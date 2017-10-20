var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const port = process.env.PORT || 3000;
const ip = process.env.IP || 'localhost';

var app = express();

app.use(bodyParser.json());

//POST todo route
app.post('/todos', (req,res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

//GET todos route
app.get('/todos', (req,res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(port, ip, () => {
	console.log('App is listening on port: ', port);
});

module.exports = {app};

// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// var newTodo = new Todo({
// 	text: '      Paint House                        ',
// 	// completed: false,
// 	// completedAt: Date.now()
// });

// var newUser = new User({
// 	email: 'andreq@mead.com'	
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo',doc);
// }, (err) => {
// 	console.log('Unable to save todo');
// });

// newUser.save().then((doc) => {
// 	console.log('Saved user',doc);
// }, (err) => {
// 	console.log('Unable to save todo ', err);
// });
