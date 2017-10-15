const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOpt = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bodyOpt = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add', 'Add a new note', {
		title: titleOpt,
		body: bodyOpt
	})
	.command('list','List all notes')
	.command('read', 'Read a note', {
		title: titleOpt
	})
	.command('remove', 'Remove a note', {
		title: titleOpt
	})
	.help()
	.argv;

// Printout Command Line Arguments
var command = process.argv[2];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);

	if (note) {
		console.log(`Added New Note !`);
		console.log(`---------------------`);
		notes.logNote(note);
	} else {
		console.log('Cannot add duplicates!');
	}
} else if (command === 'list') {
	var foundNotes = notes.getAll();
	console.log(`Found ${foundNotes.length} Note(s)`);
	console.log(`---------------------`);
	foundNotes.forEach((note) => {
		notes.logNote(note);
	});
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