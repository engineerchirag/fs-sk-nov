// Question 1:

// Create an animation function continuousAnimation that continuously 
// changes the background color of an element between red and blue. 
// The function should take the element's ID as an argument and update the 
// background color every 500 milliseconds.

// SetTimeout or SetInterval ???

// SetInterval

function continuousAnimation(id) {
    let isRed = false;

    setInterval(function() {
        const newColor = isRed ? 'red' : 'blue';
        changeColor(id, newColor);
        isRed = !isRed;
    }, 500);
}

function changeColor(id, color) {
    document.getElementById(id).style.backgroundColor = color;
}

// Question 2:

var obj = {
    name: 'Nirmal',
    logDetail: function() {
        setTimeout(function() {
            console.log(this);
        });
    }
}

obj.logDetail(); // window

// Question 3:

for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    });
}
//55555

// Question 4:

for(let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    });
}
//01234




// Question 5:

// Write a function countdownWithClear that takes a positive integer n as an argument.
//  The function should log the numbers from n down to 1, with a delay of 1000 milliseconds 
//  between each log. However, the function should stop logging after 20 seconds 
//  (i.e., when it has logged n, n-1, ..., n-5, ..., n-20).



function countdownWithClear1(n) {
    for(let i = n; i > n - 20; i--) {
        setTimeout(function() {
            console.log(i);
        }, 1000*(n - i + 1));
    }
}
countdownWithClear1(50);

function countdownWithClear2(n) {
    let count = 0;
    const ref = setInterval(function() {
        console.log(n - count);  // 50 49 48

        if (count === 20) {
            clearInterval(ref);
        }
        count++;
    }, 1000);
}
countdownWithClear2(50);


