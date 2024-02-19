const a = {
    firstName: "Atul",
    lastName: "Jha",
    address: {
        city: "Patna",
        state: "Bihar"
    }
}

// Shallow Copy

// const b = { ...a }; // a.slice();

// a.lastName = "Patil";

// // console.log(a, b); // Patil, Jha


// a.address.city = "Australia";
// console.log(a, b); // Australia, Australia


// Deep Copy - 1

// const b = { ...a }; // a.slice();
// b.address = { ...a.address };

// a.lastName = "Patil";

// // console.log(a, b); // Patil, Jha


// a.address.city = "Australia";
// console.log(a, b); // Australia, Patna


// Deep Copy - 2 // Slow 

const b = JSON.parse(JSON.stringify(a)); // 

a.lastName = "Patil";

// console.log(a, b); // Patil, Jha


a.address.city = "Australia";
console.log(a, b); // Australia, Patna
