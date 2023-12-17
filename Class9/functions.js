// function sum() {
//     var x = 0;
//     var y = 10;
//     // console.log(x + y);
//     return x + y;
// }

// console.log(sum());

// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(2, 5));

// function total(arr) {
//     arr[2] = 30;
//     var sum = 0;
//     for(var i = 0; i< arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// var arr1 = [1,2,3,4];
// console.log(total(arr1));
// console.log(arr1);

// Named function
// console.log(multiply(2, 5));

// function multiply(x, y) {
//     return x * y;
// }

// Anonymous function

// console.log(multiply(2, 5));
// var multiply = function(x, y) {
//     return x * y;
// }

// Arrow function
// var multiply = (x, y) => x * y;

var multiply = (x, y) => { 
    return x * y 
};

// console.log(multiply(2, 5));



function multiply() {
    console.log(typeof arguments);
    var result = 1;
    for(var i = 0 ; i< arguments.length; i++) {
        result  *= arguments[i];
    }
    return result;
}

console.log(multiply(1, 2, 3, 4, 5));