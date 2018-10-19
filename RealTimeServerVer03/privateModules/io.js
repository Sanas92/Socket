module.exports = function(server) {
	var io = require('socket.io')(server);

	io.on('connection', function(socket) {
		socket.on('login', function(data) {
			console.log('Client logged-in : name : ' + data.name + '\n userid : ' + data.userid);
			socket.join(data.room);
			socket.name = data.name;
			socket.userid = data.userid;
			socket.room = data.room;
			
			io.to(data.room).emit('login', {'name' : socket.name, 'room' : socket.room});
		});

		socket.on('message', function(msg) {
			var messageData = {
				from : {
					name : socket.name,
					userid : socket.userid,
					room : socket.room
				},
				msg : msg
			};

			socket.emit('my message', msg);
			socket.to(socket.room).broadcast.emit('other message', messageData);
		});

		socket.on('forceDisconnect', function() {
			socket.disconnect();
		});

		socket.on('disconnect', function() {
			console.log('Client logged-out : name : ' + socket.name + '\n userid : ' + socket.userid);

			io.to(socket.room).emit('leave', socket.name);
		})
	});

	return io;
}