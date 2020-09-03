console.log("starting notes.js file.....")

const fs = require("fs")

//fetches the lists of notes we have and returns [] or array of notes
const fetchNotes = () =>{
    try{
        const noteString = fs.readFileSync("notes-data.json");
        return JSON.parse(noteString) // return array of json notes
    }catch(e){
        return []; //return empty array if exception occurs
    }
}

// save a note by writing to the file to persist data
const saveNotes = (notes) =>{
    fs.writeFileSync("notes-data.json", JSON.stringify(notes,null,4));
}

const logNote = (note) =>{
    console.log("---");
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
}

// functionality for Adding a note
const addNote = (title, body) =>{
    let notes = fetchNotes();
    let note = {
        title,
        body
    }

    let duplicateNotes = notes.filter(note => note.title === title)
    
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

// functionality for deleting a note from the file
const removeNote = (title) =>{
    let noteList = fetchNotes(); // get list of notes in an array
    let filteredNote = noteList.filter(note => note.title !== title)
    saveNotes(filteredNote) // save the new note

    return filteredNote.length !== noteList.length
}

const readNote = (title) =>{
    let noteList = fetchNotes(); // get all lists of note
    //fiter out the single note
    let findNote = noteList.filter(note => note.title === title);
    return findNote[0]; // return the array object of the note
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    logNote
} 