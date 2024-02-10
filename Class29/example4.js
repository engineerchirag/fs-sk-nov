// Polyfill

[1,2,3].reduce((acc, item) => {
    acc += item;
    return acc;
}, 0);

if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(cb, initialValue) {
        let accumulator = initialValue;
        for(let i = 0; i < this.length; i++) {
            // accumulator = cb.call(undefined, accumulator, this[i], i, this);
            accumulator = cb(accumulator, this[i], i, this);
        }

        return accumulator;
    }
}


[1,2,3,4].filter(()=> {}, [5,6,7]); // Polyfill

