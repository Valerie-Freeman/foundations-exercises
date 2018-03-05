#!/usr/bin/env node

const { readFile, readFileSync } = require('fs');

const [,,file] = process.argv;

//Asynchronously
if (file) {
  readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
  })
} else {
  console.log('Please enter a file');
  process.exit();
}

//Synchronously
if (file) {
  try {
    let data = readFileSync(file, 'utf8');
    process.stdout.write(data);
  } catch(err) {
    console.log('Error', err);
  }
} else {
  console.log('Please enter a file');
  process.exit();
}

