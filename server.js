// file system module in nodejs

const fs = require('fs');
const path = require('path');

// Function to read a file
fs.readFile("info.js", 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File content:", data);
});


//write a file 
const content = 'This is a test file.';

fs.writeFile('output.txt', content, (err) => {
    if (err) throw err;
    console.log('File has been created!');
});


// append a file in output.txt me toh acha hun
fs.appendFile('output.txt', ' This is appended content.', (err) => {
    if (err) throw err;
    console.log('Content appended!');
});


//rename file             
fs.rename('output.txt', 'renamed_output.txt', (err) => {
    if (err) throw err;
    console.log('File has been renamed!');
});


//make a new folder whos name is copy and renamed_output.txt copy this file into this copy folder
 fs.copyFile('info.js', './copy/newCopyFile.txt', (err) => {
    if (err) throw err;
    console.log('File copied!');
});


//for unlink module delete particularly file
// rmdir remove empty folder remove if you need to remove with content so you need to learn how to remove with content. recursive : true so you can delete with content.