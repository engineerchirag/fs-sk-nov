function test(a, b) {
    console.log(a, b, this); 
}

var obj = {
    name: "Praveen",
    age: 17,
}

obj.myTest = test;

obj.myTest(1, 2); // obj (gf)

const newTestFn = obj.myTest;
newTestFn(3, 4); // window (crush)


const obj1 = {
    name: "Vinetha",
    age: 99,
}

newTestFn.call(obj1, 5, 6);
newTestFn.apply(obj1, [7, 8]);


////////////////////////////////////

const obj3 = {
    name: "Kavya",
    age: 18,
}

const obj4 = {
    name: "Sheela",
    age: 81
}

function greet() {
    console.log(this);
}

obj3.greetFn = greet;
obj3.greetFn(); // Kavya (obj3)

obj4.greetFn = obj3.greetFn;
obj4.greetFn(); // Sheela (obj4)

const greetFnFromObj3 = obj3.greetFn.bind(obj4);
greetFnFromObj3(); // window (crush)




