const fs = require('fs');

const f1Promise = fs.promises.readFile('f1.txt');
const f2Promise = fs.promises.readFile('f2.txt');

console.log('A');
f1Promise
    .then((data) =>  console.log(data.toString()))
    .catch((err) => console.log(err));

console.log('B');
f2Promise
    .then((data) =>  console.log(data.toString()))
    .catch((err) => console.log(err));



