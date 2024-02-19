
function sum(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}


// console.log(sum(1)(2)(3)); // 6




function multiply(x) {
    return function(y) {
        return x * y;
    };
}


// console.log(multiply(1)(2)); // 2








function total(x) {
    const totalWithY = function(Y) {
        return x + Y;
    }

    return totalWithY;
}

const r1 = total(2);
console.log(typeof r1);
const r2 = r1(3);
console.log(r2);


