'use strict';
const mather = require('./mather.js');
class Helper {
  constructor() {
    this.db = require('./db.js');
    this.user = require('./models/user.model.js');
    this.friend = require('./models/friend.model.js');
    this.word = require('./models/word.model.js');
    this.history = require('./models/history.model.js');
  }

  /* 
  * Method to get sum of online user
  */
  getContentGame(numQues, callback) {
    this.word.find()
    .limit(50)
    .exec(function(err, allWords) {
      var content = [];
      var typeGames = ['reading'];
      
      var words = mather.getRandomArrayElements(allWords, numQues);
      let numOfAns = 4;
      let question = {};

      for (var i = 0; i < words.length; i++) {
        let j = mather.random(typeGames.length);
        let question = {};
        question.word = words[i];
        question.type = typeGames[j];
        if(question.type == 'reading') {
          question['choices'] = mather.getChoices(allWords, words[i], numOfAns);
        }
        content.push(question);
      }
      callback(err, content);
    });
  }

  getUser(userId, callback) {
    this.user.findOne({
      _id: userId
    })
    .populate('list_friend')
    .exec(function(err, user) {
      callback(err, user);
    });
  }

 /* 
  * Method to get sum of online user
  */
  getSumOnline(callback) {
    this.user.count({
      online: true,
    }, function(err, count) {
      callback(err, count);
    });
  }

  getRandomUser(userId, callback) {
    this.user.find({
      online: true,
    })
    .exec(function(err, users) {
      if (users.length > 0 ) {
        for (let i = 0; i < users.length; i++) {
          if (users[i]['_id'] == userId) {
            users.splice(i, 1);
            break;
          }
        }
        if(users.length >= 1) {
          let random = mather.random(users.length);
          callback(err, users[random]);
        }
        else {
          callback(err, null);
        } 
      }else {
        callback(err, null)
      }     
    });
  }

  addSocketId(userId, socketId, callback) {
    this.user.findOneAndUpdate({
      _id: userId
    },
    { 
      $set: { 
      'socketId': socketId,
      }
    }, {new: true},
    function (err, user) {
      callback(err, user);
    });
  }

  changeStatus(userId, status, callback) {
    this.user.findOneAndUpdate({
      _id: userId
    },
    { 
      $set: { 
      'online': status,
      }
    }, {new: true},
    function (err, user) {
      callback(err, user);
    });
  }

  getListFriend(userId, callback) {
    this.user.findOne({
      _id: userId
    })
    .populate('list_friend')
    .exec(function(err, user) {
      callback(err, user.list_friend);
    });
  }

  createFriend(data, callback) {
    this.user.findOne({
      _id: data['from']
    })
    .exec((err, user) => {
      if (user.list_friend.indexOf(data['to']) < 0) {
        this.friend.create(data, function(err, friend) {
          callback(err, friend);
        });
      }else {
        callback(err, null);
      }
    });
  }

  /* 
  * Method to unfriend
  */
  unfriend(fromId, toId, callback) {
    this.user.findOneAndUpdate({
      _id: fromId
    }, 
    { $pull: { list_friend: toId } },
    (err, userX) => {
      if(err) {
        console.log('error occured');
      } else {
        this.user.findOneAndUpdate({
          _id: toId
        }, 
        { $pull: { list_friend: fromId } },
        function (err, friend) {
          callback(err, true);
        });   
      }
    });
  }

  checkValidRequest(userId, friendId, callback){
    this.user.findOne({
      _id: userId
    })
    .exec((err, user) => {
      var result = {};
      if(user.list_friend.indexOf(friendId) >=0) {
        result['status'] = 'invalid';
        result['type'] = 'friend';
        callback(err, result);
      } else {
        this.friend.find({ 
          $and: [
          {
            confirmed: false
          }, {
            from: userId
          }]
        })
        .exec((err, request) => {
          var myRequests = [];
          for (var i = 0; i < request.length; i++){
            myRequests.push(request[i].to);
          }
          if(myRequests.indexOf(friendId) >= 0) {
            result['status'] = 'invalid';
            result['type'] = 'request';
            callback(err, result);
          } else {
            result['status'] = 'valid';
            callback(err, result);
          }
        });
      }
    }); 
  }

 /* 
  * Method to get friendship request
  */
  getFriendshipRequest(userId, callback) {
    this.friend.find({ 
      $and: [
      {
        confirmed: false
      }, {
        to: userId
      }]
    })
    .populate('from')
    .exec(function (err, friends) {
      var result = [];
      for (var i = 0; i < friends.length; i++){
        result.push(friends[i].from);
      }
      callback(err, result);
    });
  }

  /* 
  * Method to search user by email or name
  */
  searchUser(input, callback) {
    this.user.find({ $or: [{
      email: new RegExp(input, "i")
    },
    {
      name: new RegExp(input, "i")
    } ]})
    .exec((err, users) => {
      callback(err, users);
    });
  }

  /* 
  * Method to accept friend
  */
  acceptRequest(fromId, toId, callback) {
    this.friend.findOneAndRemove({ $and: [
      { from: fromId }, 
      { to: toId }
    ]}, 
    (err, friend) => {
      this.user.findOneAndUpdate({
        _id: fromId
      }, 
      { $push: { list_friend: toId } },
      (err, userX) => {
        if(err) {
          console.log('error occured');
        } else {
          this.user.findOneAndUpdate({
            _id: toId
          }, 
          { $push: { list_friend: fromId } },
          function (err, friendY) {
            callback(err, true);
          });   
        }
      });
    });
  }

  /* 
  * Method to delete friendship request
  */
  deleteRequest(fromId, toId, callback) {
    this.friend.remove({ $and: [
      { from: fromId }, 
      { to: toId },
      { confirmed: false }
    ]}, function(err, friend) {
      callback(err, friend);
    });
  }

  /* 
  * Method to get recent history
  */
  getHistory(userId, callback) {
    this.history.find({ $or: [
      { 'player1.id': userId }, 
      { 'player2.id': userId }
    ]})
    .populate('player1.id')
    .populate('player2.id')
    .sort({created: -1})
    .limit(5)
    .exec(function(err, history) {
      let result = [];
      for(let i = 0; i < history.length; i++) {
        let data = {};
        if (history[i].player1['id']['_id'] == userId) {  
          data['player1'] = history[i].player2;
          data['player2'] = history[i].player1;
        } else {
          data = history[i];
        }
        result.push(data);
      }
      callback(err, result);
    });
  }

  /* 
   * Method to update result game to history collection when ending game
   */
  updateHistory(data, callback) {
    this.history.findOne({ $or: [
      {
        'player1.id': data.player1.id,
        'player2.id': data.player2.id
      }, {
        'player2.id': data.player1.id,
        'player1.id': data.player2.id
      }]
    }).exec((err, history) => {
      if(history != null) {
        if(data.isWinner == history.player1.id) {
          history['player1']['win']++;
        }
        if(data.isWinner == history.player2.id) {
          history['player2']['win']++;
        }
        history.save((err) => {
          callback(err, history);
        })
      } else {
        let newHistory = data;
        this.history.create(newHistory, (err, newHistory) => {
          callback(err, history);
        })
      }
    });
  }
}
module.exports = new Helper();
