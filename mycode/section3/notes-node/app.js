console.log('Starting app.js...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

// Printout Command Line Arguments
var command = process.argv[2];
console.log('Command: ',command);
// console.log('Process.argv: ', process.argv);
console.log('Yarg: ', argv);

if (command === 'add') {
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	notes.delNote(argv.title);
}else {
	console.log('Command unknown');
}