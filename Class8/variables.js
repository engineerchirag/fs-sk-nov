// console.log('1.');
// console.log('2.');
// console.log('3.');
// console.log('4.');
// var a = 10;
// console.log('a --- ', a);
// console.log('5.');
// console.log('6.');
// console.log('7.');
// var b = 5;
// var c = a + b;
// console.log('a,b > ', a, b, c);



// Old
// console.log(d);
// var d = 10;

// New
// var d;
// console.log(d);
// d = 10;
// console.log(d);

// Old

// console.log(e,f,g); // 1.
// var e = 10;
// console.log(e, f, g); // 2. 
// var f;
// console.log(e,f,g); // 3. 
// f = 15;
// console.log(e,f,g); // 4.
// var g = 20;
// console.log(e,f,g); // 5.

// New

// var e, f, g;

// console.log(e,f,g); // 1. u, u, u
// e = 10;
// console.log(e, f, g); // 2. 10, u, u
// console.log(e,f,g); // 3. 10, u, u
// f = 15;
// console.log(e,f,g); // 4. 10, 15, u
// g = 20;
// console.log(e,f,g); // 5. 10, 15, 20


// console.log('1.');
// console.log('2.');
// console.log('3.');
// console.log('h > ', h);
// let h = 10;
// console.log(h);
// h = 20;
// console.log(h);

// {
//     let j = 10;

// }

// console.log(j);

// function abc() {
//     var k = 15;
// }

// console.log(k);