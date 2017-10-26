var socket = io();
// avoid using arrow functions(ES6) on browser code 
// due to lack of support on certain browsers
socket.on('connect', function() {
	console.log('Connected to server');
});

socket.on('newUser', function(welcome) {
	console.log(welcome.adminTxt);
});

socket.on('newUserBroadc', function(welcome) {
	console.log(welcome.adminTxt);
});

socket.emit('createMessage', {
	from: 'Andrew',
	text: 'Hey. This is Andrew'
});

socket.on('disconnect', function() {
	console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
	console.log('(' + message.from + ')@' + message.createdAt + ': ' + message.text);
});