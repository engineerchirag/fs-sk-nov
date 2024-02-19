const fs = require('fs');


// Question 1
console.log('Start');

fs.readFile('f1.txt', function (err, data) {
    if(err) {
        console.log(err);
    }else {
        console.log('File 1 Data > ', data);
    }
});

console.log('End');

// Start > End > Hi Guys

// Question 2
console.log('Start');

const fileContent = fs.readFileSync('f1.txt');
console.log(fileContent);

console.log('End');

// Start >  Hi Guys > End
