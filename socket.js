
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
	  		helper.getContentGame(5, (err, content) => {
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

	  //gửi câu trả lời tạm thời là nếu đúng
	  socket.on('send-answer', (data) => {
	  	if (data['correct'] == true) {
	  		io.to(data['playerSocketId']).emit('receive-answer', data);
	  	}
	  	//console.log(data);
	  });

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