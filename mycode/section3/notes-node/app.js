console.log('Starting App...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');


// console.log(_.isString(true));
// console.log(_.isString(3232));
// console.log(_.isString('hello'));


var filteredArray = _.uniq(['Makis',1,'Makis',2,3,4,1])
console.log(filteredArray);

// var res = notes.addNote();
// console.log(res);
// console.log(`Sum is: ${notes.add(1,2)}`);
// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
// 	if(err) {
// 		console.log('Unable to write to file');
// 	}
// }) 