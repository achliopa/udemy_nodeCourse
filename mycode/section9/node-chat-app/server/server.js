const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const ip = process.env.IP || 'localhost';
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.on('createMessage', (newMessage) => {
		console.log(newMessage);
		newMessage.createdAt = new Date().toString();
		socket.emit('newMessage', newMessage);
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
})

server.listen(port, ip, ()=> {
	console.log(`Server is Up on http://${ip}:${port}/`);
});