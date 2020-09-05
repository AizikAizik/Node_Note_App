// import built in modules
const fs = require("fs");

//import installed modules from NPM registry
const _ = require("lodash");
const yargs = require("yargs");

//import user defined module
const notes = require("./notes");


const titleOptions = {
    describe : 'Title of note',
    demand : true,
    alias : 't'
}

const bodyOptions = {
    describe : 'Body of note',
    demand : true,
    alias : 'b'
}


const argv = yargs.command("add", true, {
    title : titleOptions,
    body : bodyOptions
})
.command("list", true)
.command(["read","Read"], true, {
    title : titleOptions
})
.command("remove", true, {title : titleOptions})
.help().argv;


let command = argv._[0];
console.log("command :", command);


// Adding a note
if(command === "Add" || command === "add"){
    let note = notes.addNote(argv.title, argv.body);//adds a note and returns note object or undefined
    if(note){
        console.log("note created!!");
        notes.logNote(note)
    }else{
        console.log("Note Title already taken");
    }
}else if(command === "Remove" || command === "remove"){
    let isRemoved = notes.removeNote(argv.title); //returns true or false
    let msg;

    isRemoved ? msg = `${argv.title} deleted !` : msg = `${argv.title} not found`

    console.log(msg);
}else if(command === "Read" || command === "read"){
    let noteToRead = notes.readNote(argv.title); //returns array of note or undefined

    if(noteToRead){
        notes.logNote(noteToRead);
    }else{
        console.log("---");
        console.log(`Note with the Title "${argv.title}" not found!!`);
    }
}else if(command === "List" || command === "list"){
    const allNotes = notes.listAllNotes();
    console.log(`printing ${allNotes.length} note(s) to the screen`);

    if(allNotes.length > 0){
        allNotes.forEach(note => {
            notes.logNote(note)
        });
    }else{
        console.log("No notes saved in the file!!")
    }
}else{
    console.log(`${command} is an invalid command`)
}
