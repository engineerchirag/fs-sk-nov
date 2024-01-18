"use strict";

console.log(this); // window

////////////////////////////////
function test() {
    console.log(this); // window
}

test();

////////////////////////////////
let obj = {
    name: "Atul Jha",
    age: 60,
    getThis: function () {
        console.log(this); // 
    }
}
obj.getThis();

////////////////////////////////
const getThisFn = obj.getThis;
getThisFn();