var arr = ["gf1", "gf2", "gf6", "gf4"];

// Output: ["GF_1", "GF_2", "GF_6", "GF_4"]


// gf => string 1/2/6  => number

// GF_ => prefix string  1/2/6 => number

// Approaches:
// gf1 > GF_1 // Split, Convert & Concat
// gf1 > GF_1 // slice, convert & concat
// gf1 > GF_1 // brute force by iterating
// gf1 > GF_1 // replace

// map, forEach, for

const output1 = [];
arr.forEach((item) => {
    const newItem = item.replace('gf', 'GF_'); // gf1 > GF_1
    output1.push(newItem);
})

console.log(output1);

/// MAP ///
const output2 = arr.map(item => {
    return item.replace('gf', 'GF_');
});
console.log(output2);

/// String Way ///

arr.toString().replaceAll('gf', "GF_").split(',');


[1,2,3,4].myForEach(item => console.log(item)); // Error myForEach is not a function


// Polyfill of forEach

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function() {
        // Implement logic of forEach

        // 

    }
}


// Polyfill of map

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function() {
        // Implement logic of map
    }
}

// Polyfill of filter

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function() {
        // Implement logic of filter
    }
}


// Polyfill of reduce

if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function() {
        // Implement logic of reduce
    }
}


// Array.prototype.sort = function() {
//     return "Chal hat!";
// }


