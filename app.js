console.log("starting app....");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
let command = argv._[0];
console.log("command :", command);
console.log("Yargs", argv);

// Adding a note
if(command === "Add" || command === "add"){
    let note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("note created!!");
        notes.logNote(note)
    }else{
        console.log("Note Title already taken");
    }
}else if(command === "Remove" || command === "remove"){
    let isRemoved = notes.removeNote(argv.title);
    let msg;

    isRemoved ? msg = `${argv.title} deleted !` : msg = `${argv.title} not found`

    console.log(msg);
}else if(command === "Read" || command === "read"){
    let noteToRead = notes.readNote(argv.title);

    if(noteToRead){
        notes.logNote(noteToRead);
    }else{
        console.log("---");
        console.log(`Note with the Title "${argv.title}" not found!!`);
    }
}