const validator = require('validator');
const add = require('./utils');


const sum = add (4, -2);

console.log(sum);

const getNotes = require('./notes');

getNotes();