// Question 1:

console.log('A');
console.log('B');
console.log('C');

// A,B,C


// Question 2:

setTimeout(function() {
    console.log('Z');
}, 1000);

setTimeout(function() {
    console.log('A');
})

console.log('B');

setTimeout(function() {
    console.log('C');
}, 0);


// Question3:
var isChamp =  true;
while(isChamp) {
    console.log('A');
}

console.log('B');

setTimeout(function() {
    console.log('C');
}, 0);


// AAAAAAA.... inifinite loop


// Question 4: 

setTimeout(function() {
    console.log('C');
}, 0);

for (var i = 0; i < 100000; i++) {
    console.log('A');
}

console.log('B');


// A*100000 , B, C


// Question 5:


setTimeout(function() {
    console.log('A');
}, 0);

setTimeout(function() {
    console.log('B');
}, 0);

setTimeout(function() {
    console.log('C');
}, 0);

setTimeout(function() {
    console.log('D');
}, 0);

// A, B, C, D

