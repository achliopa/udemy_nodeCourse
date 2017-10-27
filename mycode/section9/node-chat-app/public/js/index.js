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
	var formattedTime = moment(message.createdAt).format('h:mm a');
	var li = jQuery('<li></li>');
	li.text(`${message.from} ${formattedTime} :${message.text}`);
	jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function(message) {
	var formattedTime = moment(message.createdAt).format('h:mm a');
	var li = jQuery('<li></li>');
	var a = jQuery('<a target="_blank">My current location</a>');
	li.text(`${message.from} ${formattedTime} :`);
	a.attr('href', message.url);
	li.append(a);
	jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
	//prevent default behavior of submit even that is page refresh
	e.preventDefault();
	var messageTextbox = jQuery('[name=message]');
	socket.emit('createMessage', {
		from: 'User',
		text: messageTextbox.val()
	}, function() {
		messageTextbox.val('');
	});
});

var locationButton = jQuery('#send-location');

locationButton.on('click', function(e) {
	if (!navigator.geolocation) {
		return alert('Geolocation not supported by your browser.');
	}
	locationButton.attr('disabled', 'dissabled').text('Sending Location...');
	navigator.geolocation.getCurrentPosition(function (position) {
		socket.emit('createLocationMessage', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		}, function() {
			locationButton.removeAttr('disabled').text('Send Location');
		});
	}, function() {
		locationButton.removeAttr('disabled').text('Send Location');
		alert('Unable to fetch location.');
	});
	
})