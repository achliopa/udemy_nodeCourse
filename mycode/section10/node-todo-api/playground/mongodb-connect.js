// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// // make mongodb object ids for general use
// var obj = ObjectID();
// console.log(obj);

// //ES6 object destructuring
// // pull out a variable from an ibject
// var user = {name: 'Sakis', age: 34};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something else to do',
	// 	completed: false
	// }, (err,result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Manolis',
	// 	age: 33,
	// 	location: 'Thessaloniki'
	// }, (err,result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert user', err);
	// 	}
	// 	// console.log(JSON.stringify(result.ops, undefined,2));
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	db.close();
});

