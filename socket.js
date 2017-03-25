
var helper = require('./helper');

exports = module.exports = function(io){
  io.on('connection', function(socket) {
  	var userId = socket.handshake.query.userId; 
	  /* 
	   * Online App
	   */
	  helper.changeOnApp(userId, true, (err, user) => {
  	 /* 
		  * Update new socketId for user 
		 	*/
		  helper.addSocketId(userId, socket.id, (err, user) => {
		  	console.log('isOnApp: ' + user.onApp);
		  	console.log('user: ' + userId + '----' + 'socketId: ' +  socket.id);
		  	socket.broadcast.emit('new-user', user);
		  });
		});

		/*
		 * Accept request friend, have a new friend
		 */
		 socket.on('accept-request', (data) => {
		 	fromId = data['from']['_id'];
			toId = data['to']['_id'];

		 	helper.acceptRequest(fromId, toId, (err, result) => {
		 		if (result) {
		 			console.log('sucess');
		 			io.to(data['from']['socketId']).emit('friend-list-response', {
		  			type: 'new-friend',
		  			user: data['to']
		  		});

		  		io.to(socket.id).emit('friend-list-response', {
		  			type: 'new-friend',
		  			user: data['from']
		  		});
		 		}
		 	})
		 })

		socket.on('unfriend', (data) => {
			fromId = data['from']['_id'];
			toId = data['to']['_id'];

			helper.unfriend(fromId, toId, (err, result) => {
				if (result) {
					io.to(data['to']['socketId']).emit('friend-list-response', {
		  			type: 'unfriend',
		  			user: data['from']
		  		});

		  		io.to(socket.id).emit('friend-list-response', {
		  			type: 'unfriend',
		  			user: data['to']
		  		});
				};
			})
		});

		/*
		 * Search user by name or email
		 */
		socket.on('search-user', (data) => {
			helper.searchUser(data['query'], (err, result) => {
				io.to(socket.id).emit('search-user-response', result);
			});
		});



	  /* 
	   * Online Games
	   */
	  socket.on('go-play-word', () => {
	  	helper.changeStatus(userId, true, (err, user) => {
		  	console.log('isOnlineGame: ' + user.online);
			  helper.getSumOnline((err, count) => {
			  		io.emit('sum-online', count);
			  	});
			  });
	  })
	  
	  socket.on('friend-list', (userId) => {
	  	helper.getUser(userId, (err, user) => {
	  		io.to(socket.id).emit('friend-list-response', {
	  			singleUser: false,
	  			type : 'list',
	  			list_friend: user.list_friend
	  		});

	  		// thêm mình vào trạng thái online của bạn
	  		socket.broadcast.emit('friend-list-response', {
	  			singleUser: true,
	  			userDisconnected : false, 
	  			list_friend: user
	  		});
	  	});
	  });

	  socket.on('send-request', (request) => {
	  	//let fromSocketId = socket.id;
	  	let toSocketId = request.toSocketId;
	  	request['fromSocketId'] = socket.id;
	  	//trạng thái đợi chấp thuận
	  	io.to(socket.id).emit('wait-accept', "đang đợi đồng ý");
	  	io.to(toSocketId).emit('send-request-response', request);
	  });

	  //phản hồi lại yêu cầu gửi đến
	  socket.on('send-response', (data) => {
	  	//socket gửi phản hồi đến
	  	let toSocketId = data['fromSocketId'];
	  	//thông báo tới người gửi cần đợi chấp thuận
	  	io.to(toSocketId).emit('receive-response', data);

	  	if(data['agree']) {
	  		helper.getContentGame(data['numOfQues'], (err, content) => {
	  			data1 = {
	  				agree: true,
	  				content: content,
	  				from: data['from'],
	  				to: data['to'],
	  				playerSocketId: toSocketId
	  			};

	  			data2 = {
	  				agree: true,
	  				content: content,
	  				from: data['from'],
	  				to: data['to'],
	  				playerSocketId: socket.id
	  			}
	  			io.to(socket.id).emit('begin-game', data1);
			  	io.to(toSocketId).emit('begin-game', data2);
  				
			  });
	  	}  
	  });

	  /*
	   * Sau 10s mà đối thủ không trả lời. Gửi event kết thúc.
	   * Gửi yêu cầu kết thúc để xóa dialog hiện lên bên đối thủ
	  */
	  socket.on('finish-request', (data) => {
	  	data['close'] = true;
	  	io.to(data['toSocketId']).emit('close-dialog', data);
	  });

	  //gửi câu trả lời tạm thời là nếu đúng
	  socket.on('send-answer', (data) => {
	  		io.to(data['playerSocketId']).emit('receive-answer', data);
	  });

	  socket.on('random-user', (userId) => {
	  	helper.getRandomUser(userId, (err, user) =>{
	  		io.to(socket.id).emit('random-user-response', user);
	  	});
	  });

	  socket.on('history', (usedId) => {
	  	helper.getHistory(userId, (err, games) => {
	  		//console.log(games);
	  	});
	  });

	  socket.on('create-friend', (data) => {
	  	//console.log(data);
	  	helper.createFriend(data, (err, friend) => {
	  		if (err) return;
	  		if (friend == null) {
	  			console.log('đã là bạn');
	  			return;
	  		} 
	  		io.to(data['toSocketId']).emit('create-friend-request', data);
	  	})
	  });

	  socket.on('friendship-request', (usedId) => {
	  	helper.getFriendshipRequest(userId, (err, request) => {
	  		io.to(socket.id).emit('friendship-response', request);
	  	});
	  });

		socket.on('disconnect', () => {
			console.log('close window' + userId);
			helper.changeStatus(userId, false, (err, user) => {
		  	socket.broadcast.emit('friend-list-response', {
					error : false ,
					userDisconnected : true, 
					singleUser: true,
					list_friend: user
				});
				helper.getSumOnline((err, count) => {
		  		io.emit('sum-online', count);
		  	});
		  	helper.changeOnApp(userId, false, (err, user) => {
			  	console.log('isOnApp: ' + user.onApp);
				});
		  });	  
		});

		socket.on('logout-game',(userId) => {
			helper.changeStatus(userId, false, (err, user) => {
		  	socket.broadcast.emit('friend-list-response', {
					error : false ,
					userDisconnected : true, 
					singleUser: true,
					list_friend: user
				});
				helper.getSumOnline((err, count) => {
		  		io.emit('sum-online', count);
		  	});
		  });	  
    });

    socket.on('logout',(userId) => {
			helper.changeStatus(userId, false, (err, user) => {
		  	socket.broadcast.emit('friend-list-response', {
					error : false ,
					userDisconnected : true, 
					singleUser: true,
					list_friend: user
				});
				helper.getSumOnline((err, count) => {
		  		io.emit('sum-online', count);
		  	});
		  	helper.changeOnApp(userId, false, (err, user) => {
			  	console.log('isOnApp: ' + user.onApp);
				});
		  });	  
    });
	});
}
