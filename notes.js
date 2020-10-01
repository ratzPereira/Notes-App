//new need fs to read/write on files
const fs = require('fs');


const getNotes = function () {

    console.log('Your notes');
}


const addNote = function (title, body) {
    const notes = loadNotes();

    //array method push, to get our note
    notes.push({
        title: title,
        body: body
    }) 

    saveNote(notes);

}

//we need to safe our note , so we create an new reusable function to that
const saveNote = function(notes) {

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

//we need to load the notes first and every time, so lets create one reuseable function for that
const loadNotes = function (){

    try{

        const dataBuffer = fs.readFileSync('notes.json'); // if we had no file it fails , so we create defensive code ( try/catch )
        const dataJSON = dataBuffer.toString();  //converting binary to string

        return JSON.parse(dataJSON);  // now we take the string, and parse it to json object and return that

    } catch (e) {
        //if the code above fails we return an empty array
        return [];

    }
}

//module.exports= getNotes;  <- exportar só uma funciton
//exportar várias "coisas" transformanos num object com varias properties

module.exports = {

    //property with same name that the funcion
    getNotes: getNotes,
    addNote: addNote
}