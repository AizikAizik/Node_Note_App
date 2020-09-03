console.log("starting notes.js file.....")

const fs = require("fs")

//fetches the lists of notes we have
const fetchNotes = () =>{
    try{
        const noteString = fs.readFileSync("notes-data.json");
        return JSON.parse(noteString)
    }catch(e){
        return [];
    }
}

// save a note to the file to persist data
const saveNotes = (notes) =>{
    fs.writeFileSync("notes-data.json", JSON.stringify(notes,null,4));
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

module.exports = {
    addNote
} 