require('./config/config');

const _= require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

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

//GET todo by id route
app.get('/todos/:id', (req,res) => {
	var id = req.params.id;
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Todo.findById(id).then((todo) => {
		if(!todo) {
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => res.status(400).send());
});

//DELETE todo 
app.delete('/todos/:id', (req,res) => {
	var id = req.params.id;
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo) {
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => res.status(400).send());
});


// PATCH /todos/:id
app.patch('/todos/:id', (req,res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text','completed']);

	if(!ObjectID.isValid(id)){
		return res.status(404),sebd();
	}

	if(_.isBoolean(body.completed) && (body.completed)) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
		if(!todo) {
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => res.status(400).send());
});

// POST /users
app.post('/users', (req,res) => {
	var body = _.pick(req.body, ['email','password']);
	var user = new User(body);
	user.save().then((user) => {
		res.send(user);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(process.env.PORT, process.env.IP, () => {
	console.log('App is listening on port: ', process.env.PORT);
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
