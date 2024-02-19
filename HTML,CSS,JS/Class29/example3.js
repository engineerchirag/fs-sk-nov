// Q: Create a function that logs a message after a 
// specified delay.

function delayedLog(msg, delay) {
    // Implement
    setTimeout(() => {
        console.log(msg);
    }, delay);
}

delayedLog('I', 5000);
delayedLog('LUV', 2000);
delayedLog('U', 1000);


// Q. Promise sleep

function sleep(delayInSec) {
    // implemention
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delayInSec * 1000);
    });
}

async function main() {
    console.log('1'); // 1
    await sleep(5); // wait for 5sec
    console.log('2'); // 2
}

main();