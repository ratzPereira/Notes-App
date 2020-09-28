const chalk = require("chalk"); // changing color of the text
const getNotes = require("./notes"); // getting data from other file in the project
const yargs = require("yargs"); //input from user

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
        type: 'string',
    },
    title: {
      describe: "Note Title",
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log("Title: ", argv.title);
    console.log("Note: ", argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note!");
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Showing all the notes");
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note!");
  },
});


yargs.parse();
//console.log(yargs.argv);
