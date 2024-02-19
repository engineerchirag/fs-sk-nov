// Question 1:

console.log(x); // Error


// Question 2:

y = 1;
console.log(y); // 1
var y;


// Question 3:

console.log(z); // undefined
var z = 1;


// Question 4:

a = 1;
console.log(a); // Error
let a;


// Question 5:

console.log(b); // Error
let b = 1;

// Question 6:

console.log(c); // Error
c = 1;

// Question 7:

console.log(sum); // undefined

var sum = function(a, b) {
    return a + b;
}

// Question 8

console.log(total); // Error
let total = function(a, b) {
    return a + b;
}

// Question 9;

console.log(sum1(1, 2)); // 3

function sum1(a, b) {
    return a + b;
}

// Question 10:


function example1() {
    if (true) {
        var aa = 1;
        let bb = 2;
    }
    console.log(aa); // AA: 1
    console.log(bb); // BB: error
}
example1();


// Question 11:

var cc = 20;
function example1() {
    if (true) {
        var cc = 1;
    }
    console.log(cc); // CC: 
}
example1();

console.log(cc);



// Question 12:

var dd = 20;
function example1() {
    if (true) {
        dd = 1;
    }
    console.log(dd); // CC: 
}
example1();

console.log(dd);

// Question 13:

function parent(){
    var a = 20
    function child(){
        console.log(a); // 20
    }
    child()
 }
 
 parent()


 // Question  14:

 function parent1(){
    var a = 20
    function child(){
        console.log(a);
        
        function child2() {
            console.log(a); 
        }
    }
    child2() // Error
}

parent1()


 // Question  14:

 function parent2(){
    var a = 20
    function child(){
        console.log(a); // 20
        
        function child2() {
            console.log(a); // 20
        }

        child2();
    }
    child() 
}

parent2()

// Question 15:


function parent2(){
    var a = 20
    function child(){
        console.log(a); // A.
        
        function child2() {
            console.log(a); // B. 
        }

        var a = 10;

        child2();
    }
    child();
    console.log(a); // C.
}

parent2();


// Question 16:


function parent3(){
    var a = 20
    function child(){
        console.log(a); // A.
        
        function child2() {
            console.log(a); // B. 
            var a = 30;
        }

        a = 10;

        child2();
    }
    child();
    console.log(a); // C.
}

parent3();

// Question 17:

function parent4(){
    var a = 20
    function child(){
        let a = 10;
        console.log(a); // A.
        
        function child2() {
            console.log(a); // B. 
            a = 30;
        }

        console.log(a); // C:

        child2();
    }
    child();
    console.log(a); // D:
}

parent4();


// Question 17:

function parent5(){
    var a = 20
    function child(){
        let a = 10;
        console.log(a); // A.
        
        function child2() {
            console.log(a); // B. 
            a = 30;
        }

        child2();
        console.log(a); // C:
    }
    child();
    console.log(a); // D:
}

parent5();













