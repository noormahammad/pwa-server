
var helper = require('./helper');

exports = module.exports = function(io){
  io.on('connection', function(socket) {
  	var userId = socket.handshake.query.userId; 
	 /* 
	  * Update new socketId for user 
	 	*/
	  helper.addSocketId(userId, socket.id, (err, user) => {
	  	console.log('user: ' + userId + '----' + 'socketId: ' +  socket.id);
	  	socket.broadcast.emit('new-user', user);

	  	// helper.changeOnApp(userId, true, (err, user) => {
	  	// });
	  	io.to(socket.id).emit('get-info-socket', socket.id);
	  });

		socket.on('create-friend', (data) => {
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
		

		/*
		 * Accept request friend, have a new friend
		 */
		socket.on('accept-request', (data) => {
		 	fromId = data['from']['_id'];
			toId = data['to']['_id'];
		 	helper.acceptRequest(fromId, toId, (err, result) => {
		 		if (result) {
		 			io.to(data['from']['socketId']).emit('friend-list-response', {
		  			type: 'new-friend',
		  			user: data['to']
		  		});

		  		io.to(socket.id).emit('friend-list-response', {
		  			type: 'new-friend',
		  			user: data['from']
		  		});

		  		//Xóa trong danh sách hiện yêu cầu
		  		io.to(socket.id).emit('list-response', {
						type: 'delete',
						user: data['from']
					});
		 		}
		 	})
		});

		socket.on('delete-request', (data) => {
			fromId = data['from']['_id'];
			toId = data['to']['_id'];
			helper.deleteRequest(fromId, toId, (err, result) => {
				io.to(socket.id).emit('list-response', {
					type: 'delete',
					user: data['from']
				});
			});
		});

		socket.on('unfriend', (data) => {
			console.log(data);
			fromId = data['from']['_id'];
			toId = data['to']['_id'];
			data['from']['state'] = '';
			data['to']['state'] = '';

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
		  	//Change sum online
			  helper.getSumOnline((err, count) => {
			  	io.emit('sum-online', count);
			  });
			  //Add to online of friend
			  socket.broadcast.emit('friend-list-response', {
	  			singleUser: true,
	  			userDisconnected : false, 
	  			list_friend: user
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
	  	});
	  });

	  socket.on('send-request', (request) => {

	  	//let fromSocketId = socket.id;
	  	let toSocketId = request.toSocketId;
	  		console.log('To player: ' + toSocketId);
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
	   * Đối thủ không trả lời. Gửi event kết thúc.
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

	  socket.on('history', (data) => {
	  	helper.getHistory(userId, (err, games) => {
	  		io.to(socket.id).emit('history-response', games);
	  	});
	  });

	  socket.on('save-history', (data) => {
	  	if(data.player1.win >= data.player2.win) {
	  		data['isWinner'] = data.player1.id;
	  	} else {
	  	  data['isWinner'] = data.player2.id;
	  	}
	  	//find có score lớn hơn rồi cho vào database
	  	helper.updateHistory(data, (err, result) => {
	  		console.log(result);
	  	})
	  })

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
