const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59ea6615994a06f531484238';

// if(!ObjectID.isValid(id)) {
// 	console.log('ID is not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '59eb9365fb5eedffbc2f8b72';

User.findById(id).then((user) => {
	if(!user) {
		return console.log('User Not Found');
	}
	console.log('Found User: ', user);
}).catch((e) => console.log(e));