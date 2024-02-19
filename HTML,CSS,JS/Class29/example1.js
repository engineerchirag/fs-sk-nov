// Q1: Write a function sum(x)(y)(z) 
// Returns sum of x, y, z

function sum(x) {
    // implement
    return function (y) {
        return function(z) {
            return z + y + x;
        }
    }
}

sum(1)(2)(3) // Integer

console.log(sum(1)(2)(3)); // 6


// Q2: Write a function sum1(x, y)(z)() 
// Returns sum of x, y, z

function sum1(x, y) {
    // implement
    return function (z) {
        return function() {
            return z + y + x;
        }
    }
}

console.log(sum1(1, 2)(3)()); // 6


// Q3: Implement a function that generates a random 
// number between 1 and 100,
// and returns a function that checks if a guessed 
// number matches 
// the generated number.

function guessGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    return function(num) {
        if (targetNumber > num) {
            return "Try a higher number";
        } else if(targetNumber < num) {
            return "Try a lower number";
        } else {
            return "Congratulations"
        }
    }
}

const guessNumber = guessGame();
// Internal number = 40
guessNumber(1); // Try a higher number
guessNumber(80); // Try a lower number
guessNumber(40); // Congratulations




// Q4: Create a function that generates a sequence
//  of Fibonacci numbers 
// using closure.

function fibonacciSequence() {
    // implementation
    let a = 0; let b = 1;
    return function() {
        const result = a;
        // a = b;
        // b = result + b;
        [a, b] = [b, a + b];
        return result;

    }
}

const generateFibonacci = fibonacciSequence();

generateFibonacci(); 0
generateFibonacci(); 1
generateFibonacci(); 1
generateFibonacci(); 2
generateFibonacci(); 3
generateFibonacci(); 5
generateFibonacci(); 8
