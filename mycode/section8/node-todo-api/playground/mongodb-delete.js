// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Buy food'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.log('Cannot delete ', err);
	// });
	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Buy food'}).then((result) => {
	// 	console.log(result);
	// }, (err) => {
	// 	console.log('Cannot delete ', err);
	// });
	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').deleteMany({name: 'Sakis'}).then((result) => {
		console.log(result);
	});
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('59e8f45d6d7d5431fc655be7')}).then((result) => {
			console.log(result);
		});

	// db.close();
});

