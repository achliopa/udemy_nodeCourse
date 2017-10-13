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

	if (note) {
		console.log('Cannot add duplicates!');
	} else {
		console.log(`Added New Note !`);
		console.log(`---------------------`);
		notes.logNote(note);
	}
} else if (command === 'list') {
	var foundNotes = notes.getAll();
	if(foundNotes.length > 0) {
		console.log(`List of Found Notes`);
		console.log(`---------------------`);
		foundNotes.forEach((note) => {
			notes.logNote(note);
		});
	} else {
		console.log(`Found No Notes!`);
	}
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log(`Note Found!`);
		console.log(`---------------------`);
		notes.logNote(note);
	} else {
		console.log('No Note Found!');
	} 
} else if (command === 'remove') {
	var deletedNote = notes.delNote(argv.title);
	var message = (deletedNote) ? `Deleted Note with Title: ${argv.title}`
								: `Note was not found`
	console.log(message);
}else {
	console.log('Command unknown');
}