// Q1: Implement a counter function that returns +1 value

var a = 0;

function counter() {
    a = a + 1;
    return a;
}

counter(); // 1
counter(); // 2
counter(); // 3


// Q2: 

function createCounter() {
    var a = 0;
    return function() {
        a = a + 1;
        return a;
    }
}

const atulCounter = createCounter();
atulCounter(); // 1
atulCounter(); // 2

const vatanCounter = createCounter();
vatanCounter(); // 1
vatanCounter(); // 2
vatanCounter(); // 3

const vinethaCounter = createCounter();
vinethaCounter(); // 1


