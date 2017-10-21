var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODV_URI || 'mongodb://localhost/TodoApp', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = {mongoose};