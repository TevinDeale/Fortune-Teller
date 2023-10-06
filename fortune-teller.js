// Requiring fs module in which
// readFile function is defined.
const fs = require('fs');

// Reading fortunes from text file and creating an array named messages.
const messages = fs.readFileSync('fortunes.txt', 'utf-8').split('\n');

// Generates a random number up to the number of fortunes in the array messages.
let random = Math.ceil(Math.random()*messages.length);

// Prints fortune to console.
console.log(messages[random]);






