// Question 1:
console.log('A');
setTimeout(function() {
    console.log('B');
}, 1000);
setTimeout(function() {
    console.log('C');
});
Promise
    .resolve()
    .then(() => console.log('D'));
console.log('E');


// Output??


// Question 2:
console.log('A');
setTimeout(function() {
    console.log('B');
}, 1000);
setTimeout(function() {
    console.log('C');
});
Promise
    .resolve()
    .then(() => {
        setTimeout(function() {
            console.log('D');
        }, 500);
    });
console.log('E');

