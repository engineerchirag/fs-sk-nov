"use strict";

console.log(this); // global

////////////////////////////////
function test() {
    console.log(this); // undefined
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
obj.getThis(); // obj

////////////////////////////////
const getThisFn = obj.getThis;
getThisFn(); // undefined