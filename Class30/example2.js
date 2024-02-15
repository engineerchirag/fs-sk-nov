const myPromise = new Promise(function(resolve, reject) {
    if (true) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});


// ES5 - chaining
myPromise.then((data) =>  console.log(data)).catch((err) => console.log(err));


// ES6 - async/await
async function fetchData() {
    try {
        console.log(1);
        await myPromise;
        console.log(2);
    } catch(e) {
        console.log(e)
    }
}


setTimeout(() => console.log('setTimeout'));
Promise.resolve("Promise").then(data => console.log(data));

