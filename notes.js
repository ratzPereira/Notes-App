const chalk = require("chalk");
//new need fs to read/write on files
const fs = require("fs");

const getNotes = function () {
  console.log("Your notes");
};

const addNote = function (title, body) {

    //vou buscar todas as notes existentes
    const notes = loadNotes();

    //passamos o filter por todas as notas existentes, se existir uma com o titulo igual, ela vai ser adicionada a const duplicateNotes
    const duplicateNotes = notes.filter(function (note) {

        return note.title === title;
  });

  //se o filtro a cima passar e a length for 0, adiciona a nova nota, se nao, não adiciona e manda um msg de erro
  if (duplicateNotes.length === 0) {
    //array method push, to get our note
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
    console.log("New note added");
  } else {
    console.log("ERROR!!! Note title taken!");
  }
};

//we need to safe our note , so we create an new reusable function to that
const saveNote = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//we need to load the notes first and every time, so lets create one reuseable function for that
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json"); // if we had no file it fails , so we create defensive code ( try/catch )
    const dataJSON = dataBuffer.toString(); //converting binary to string

    return JSON.parse(dataJSON); // now we take the string, and parse it to json object and return that
  } catch (e) {
    //if the code above fails we return an empty array
    return [];
  }
};



const removeNote = function (title){
    const notes = loadNotes();

    //passamos o filter por todas as notas existentes, se existir uma com o titulo igual, ela vai ser adicionada a const duplicateNotes
    const notesToKeep = notes.filter(function (note) {

        return note.title !== title;
  });


    if(notes.length == notesToKeep.length){
        console.log(chalk.bgRed('Note was not fund'))
    }else{
        saveNote(notesToKeep);
        console.log(chalk.bgGreen('Note removed successfully'))
    }
    

}



//module.exports= getNotes;  <- exportar só uma funciton
//exportar várias "coisas" transformanos num object com varias properties

module.exports = {
  //property with same name that the funcion
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
