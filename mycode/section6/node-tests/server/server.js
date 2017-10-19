const express = require('express');

var app = express();

var port = process.env.PORT || 3000;
var ip = process.env.IP || 'localhost';

// app.get('/', (req,res) => {
//     res.send('Hello world!');
// });

app.get('/',(req,res) => {
	res.status(404).send({
		error: 'Page not found',
		name: 'Todo App v1.0'
	});
});

app.get('/users', (req,res) => {
	res.send([
		{
			name: 'Sakis',
			age: 35
		},
		{
			name: 'Lydia',
			age: 29
		},
		{
			name: 'Pantelis',
			age: 15
		}		
		]);
});

app.listen(port, ip, () => {
   console.log('App is running...'); 
});

module.exports.app = app;