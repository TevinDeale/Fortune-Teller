// Requiring fs module in which
// readFile function is defined.
const fs = require('fs');

// Reading fortunes from text file and creating an array named messages.
const messages = fs.readFileSync('fortunes.txt', 'utf-8').split('\n');

let random = Math.ceil(Math.random()*messages.length);

console.log(messages[random]);






