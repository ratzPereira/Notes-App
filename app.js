const chalk = require("chalk"); // changing color of the text
const yargs = require("yargs");
//const getNotes = require("./notes"); // getting data from other file in the project
const notes = require("./notes"); // changed name because now, notes.js return an object not a single function

// Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",

  builder: {
    body: {
      describe: "Body of your Note",
      demandOption: true,
      type: "string",
    },

    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },

  handler:(argv) => notes.addNote(argv.title, argv.body)
    
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",

  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },

  handler:(argv) => notes.removeNote(argv.title)
    
  
});

//Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => notes.listNotes()

});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a note",

  builder:{
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.readNote(argv.title)
    
});

yargs.parse();
//console.log(yargs.argv);
