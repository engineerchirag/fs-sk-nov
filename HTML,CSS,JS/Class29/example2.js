const obj = {
    firstName: "Manish",
    lastName: "Jha",
    city: "Bangalore",
    pincode: "560067"
}

// 1. String(firstName) 
console.log(obj.firstName);
// 2. Obj(lastName, city and others)
const obj1 = {
    lastName: obj.lastName,
    city: obj.city,
    pincode: obj.pincode
}

console.log(obj1);

// const { lastName, firstName } = obj; // "Jha" , "Manish";


const { firstName, city, ...restObj } = obj;
console.log(firstName);
console.log(restObj);


// Question 2:
const arr = [1,2,3,4,5];

console.log(arr[0]);

const [a, b, ...restArr] = [1,2,3,4,5];
console.log(a, b, restArr);


// Question 3: Clone

const arr2 = [1,2,3,4];
const arr3 = [...arr2];


// Question 4: 

function sum(a, b=0, c=0) {
    return a + b + c;
}

console.log(sum(1,2,3)); // 6
console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
