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
	var note = notes.addNote(argv.title, argv.body);

	if (_.isUndefined(note)) {
		console.log('Cannot add duplicates!');
	} else {
		console.log(`Added New Note !`);
		console.log(`---------------------`);
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
		console.log(`---------------------`);
	}
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	var deletedNote = notes.delNote(argv.title);
	var message = (deletedNote) ? `Deleted Note with Title: ${argv.title}`
								: `Note was not found`
	console.log(message);
}else {
	console.log('Command unknown');
}