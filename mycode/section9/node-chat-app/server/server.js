const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const ip = process.env.IP || 'localhost';
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage',generateMessage('Admin','Welcome to the Chat App'));
	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined the Chat App'));


	socket.on('createMessage', (message, callback) => {
		console.log('createMessage', message);
		io.emit('newMessage', generateMessage(message.from,message.text));
		// socket.broadcast.emit('newMessage', generateMessage(message.from,message.text));
		//callback('This is from the server');
		callback();
	});
	
	socket.on('createLocationMessage', (coords,callback) => {
		io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
		callback();
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
})

server.listen(port, ip, ()=> {
	console.log(`Server is Up on http://${ip}:${port}/`);
});