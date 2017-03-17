
var helper = require('./helper');

exports = module.exports = function(io){
  io.on('connection', function(socket) {
  	var userId = socket.handshake.query.userId;
	  console.log('user: ' + userId + '----' + 'socketId: ' +  socket.id);
	  //console.log(socket.id);
	  helper.changeStatus(userId, true, (err, user) => {
	  	console.log('isOnline: ' + user.online);
	  });

	  helper.addSocketId(userId, socket.id, (err, user) => {
	  	//console.log(user);
	  })

	  socket.on('friend-list', (userId) => {
	  	helper.getUser(userId, (err, user) => {
	  		io.to(socket.id).emit('friend-list-response', {
	  			singleUser: false,
	  			list_friend: user.list_friend
	  		});
	  		// thêm mình vào trạng thái online của bạn
	  		socket.broadcast.emit('friend-list-response', {
	  			singleUser: true,
	  			list_friend: user
	  		})
	  	});
	  	// helper.getListFriend(userId, (err, list) => {
	  	// 	//console.log(list);
	  	// 	io.to(socket.id).emit('friend-list-response', list);
	  	// });
	  });

	  socket.on('send-request', (request) => {
	  	let fromSocketId = request.fromId;
	  	let toSocketId = request.toId;
	  	console.log(request);
	  	io.to(toSocketId).emit('send-request-response', request);
	  })

	  socket.on('add-message', (message) => {
	    console.log(message);
	    io.emit('message', { type:'new-message', text: message});
	  });

	  socket.on('disconnect', () => {
			helper.changeStatus(userId, false, (err, user) => {
		  	console.log('disconnect');
		  	//io.emit('logout update', user);
		  	socket.broadcast.emit('friend-list-response', {
					error : false ,
					userDisconnected : true, 
					singleUser: true,
					list_friend: user
				});

		  });
		});

		socket.on('logout',(userId) => {
			helper.changeStatus(userId , false, (error, result) => {
				socket.broadcast.emit('logout-user', userId);
			});	
    });

	});
}