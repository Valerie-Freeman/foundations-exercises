#!/usr/bin/env node

const { readFile } = require('fs');
const [,,file] = process.argv;

if (file) {
  readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
  })
} else {
  console.log('Please enter a file');
  process.exit();
}