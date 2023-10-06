// Requiring fs module in which
// readFile function is defined.
const fs = require('fs');

// importing the figlet module
const figlet = require('figlet');

// Reading fortunes from text file and creating an array named messages.
const messages = fs.readFileSync('fortunes.txt', 'utf-8').split('\n');

// Generates a random number up to the number of fortunes in the array messages.
let random = Math.ceil(Math.random()*messages.length);

// Prints fortune to console.
figlet("Fortunes", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(''); console.log('');
    console.log(data);
    console.log(' ');
    console.log(messages[random]);
    console.log(''); console.log('');
  });







