var socket = io();
// avoid using arrow functions(ES6) on browser code 
// due to lack of support on certain browsers
socket.on('connect', function() {
	console.log('Connected to server');
});

socket.on('disconnect', function() {
	console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
	console.log('newMessage',message);
	var li = jQuery('<li></li>');
	li.text(`${message.from}: ${message.text}`);
	jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
	//prevent default behavior of submit even that is page refresh
	e.preventDefault();
	
	socket.emit('createMessage', {
		from: 'User',
		text: jQuery('[name=message]').val()
	}, function(data) {
		console.log('Got it! ',data);
	});
});