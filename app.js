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
        console.log("---");
        console.log(`Title : ${note.title}`);
        console.log(`Body : ${note.body}`);
    }else{
        console.log("Note Title already taken");
    }
}else if(command === "Remove" || command === "remove"){
    let isRemoved = notes.removeNote(argv.title);
    let msg;

    isRemoved ? msg = `${argv.title} deleted !` : msg = `${argv.title} not found`

    console.log(msg);
}