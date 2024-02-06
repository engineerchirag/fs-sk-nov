var arr = ["gf1", "gf2", "gf6", "gf4"];

const output1 = [];
arr.forEach((item, idx) => {
    const newItem = item.replace('gf', 'GF_'); // gf1 > GF_1
    output1.push(newItem);
})

console.log(output1);

// Polyfill of forEach

// [1,2,3,4].forEach
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(callback) {
        // Implement logic of forEach

        // Iterate through all items
        for(var i = 0; i < this.length; i++) {
            // Execute callback with item
            callback.call(this, this[i] , i, this);
        }
    }
}


// Polyfill of map

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(callback) {
        // Implement logic of map

        // Create empty output array
        const output = [];
        // Iterate
        for(var i = 0; i < this.length; i++) {
            // execute callback 
            const newItem = callback(this[i] , i, this);

            // push result into output array
            output.push(newItem);   
        }

        // return output array
        return output;
    }
}


// Polyfill of filter
// [1,2,3,4,5] > EVEN [2, 4]

// [1,2,3,4,5].filter((item) => item % 2 === 0)


if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function() {
        // Implement logic of filter

        // Create empty output array
        const output = [];
        // Iterate
        for(var i = 0; i < this.length; i++) {
            // check if condition is met or not 
            const isTrue = callback(this[i] , i, this);

            if (isTrue) {
                // push item into output array
                output.push(this[i]); 
            }
              
        }

        // return output array
        return output;

    }
}
