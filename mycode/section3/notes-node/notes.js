console.log('Starting notes.js...');

const fs = require('fs');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));	
};


var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	} 
};

var getAll = () => {
	//fetch all notes
	//return notes
	return fetchNotes();
};

var getNote = (title) => {
	//fetch all notes
	var notes = fetchNotes();
	//find note by title
	var filteredNotes = notes.filter((note) => note.title === title);
	//return note
	if(filteredNotes.length >0) {
		return filteredNotes[0];
	}
}

var delNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);

	return (notes.length !== filteredNotes.length);
}

module.exports = {
	addNote,
	getAll,
	getNote,
	delNote
};
