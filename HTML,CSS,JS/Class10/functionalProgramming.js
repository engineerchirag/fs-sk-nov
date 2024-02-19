// // Can be assigned to variable
// const sum  = function(a, b) {
//     return a + b;
// }

// // pass functions as argument
// const compute = function(cb) {
//     console.log(cb);
//     // any computation here
//     cb(10, 20);
// }

// compute(sum);

// function can be returned from another function

// const multiply = function (a,b, c) {
//     return a * b * c;
// }

// const compute1 = function(cb) {
//     return cb; // return function
// }

// const multiplyFn = compute1(multiply);
// console.log(multiplyFn(1, 5, 3));



// Pure Function

const generatePaneer = function(milk) {
    return milk / 4;
}

// console.log(generatePaneer(10));
// console.log(generatePaneer(20));
// console.log(generatePaneer(10));
// console.log(generatePaneer(10));
// console.log(generatePaneer(10));
// console.log(generatePaneer(10));
// console.log(generatePaneer(10));

// Impure function


let water = 1;
const generateCurd = function(milk) {
    return (milk - water) / 3;
}

// console.log(generateCurd(10));
// water = 2;
// console.log(generateCurd(10));
// water = 3;
// console.log(generateCurd(10));


const getTotalBillAmount = (items) => {
    items[1] = 100; // mutating data
    let total = 0;
    for(let i = 0; i< items.length; i++) {
        total += items[i];
    }
    return total;
}


const bills = [100, 200, 100, 400];
console.log(getTotalBillAmount(bills.slice()));
console.log(bills);

