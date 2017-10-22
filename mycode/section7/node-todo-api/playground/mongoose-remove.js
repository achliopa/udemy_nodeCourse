const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// remove with empty object removes all docs from collection
// does not return deleted objects
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });


// Remove One doc from collection.both return the deleted doc
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({text: 'First test todo'}).then((todo) => {
	console.log(todo);
});

// Todo.findByIdAndRemove('59ebc682e59c5a1b711bd060').then((todo) => {
// 	console.log(todo);
// });