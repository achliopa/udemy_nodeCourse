var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TodoApp', {useMongoClient: true});
mongoose.Promise = global.Promise;

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 3,
		trim: true
	}
});

// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// var newTodo = new Todo({
// 	text: '      Paint House                        ',
// 	// completed: false,
// 	// completedAt: Date.now()
// });

var newUser = new User({
	email: 'andreq@mead.com'	
});

// newTodo.save().then((doc) => {
// 	console.log('Saved todo',doc);
// }, (err) => {
// 	console.log('Unable to save todo');
// });

newUser.save().then((doc) => {
	console.log('Saved user',doc);
}, (err) => {
	console.log('Unable to save todo ', err);
});