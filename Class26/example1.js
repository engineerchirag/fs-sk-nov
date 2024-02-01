const list = [{
    id: 1,
    title: 'Product 1',
    description: 'Awesome product'
}, {
    id: 2,
    title: 'Product 2',
    description: 'Awesome product'
}, {
    id: 3,
    title: 'Product 3',
    description: 'Awesome product'
}];


const myFetch = function(delay, limit) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if (limit > 3) {
                reject("Not of limit")
            } else {
                resolve(list.slice(0, limit));
            }
        }, delay);
    })
}

let count = 1;
setInterval(() => {
    console.log(count);
    count++;
}, 1000);


// Example 1:
// Post
const promise1 = myFetch(1000, 1);
// User
const promise2 = myFetch(2000, 2);
// Comment
const promise3 = myFetch(5000, 1);

promise1.then((data) => { console.log(data); console.log('Common logic'); }).catch((err) => console.log(err));

promise2.then((data) => { console.log(data); console.log('Common logic'); }).catch((err) => console.log(err));

promise3.then((data) => { console.log(data); console.log('Common logic'); }).catch((err) => console.log(err));


// Example 2:
myFetch(1000, 1)
    .then((data) => {
        console.log(data);
        return myFetch(2000, 2);
    })
    .then((data) => {
        console.log(data);
        return myFetch(5000, 1);
    })
    .then((data) => {
        console.log(data);
    });

// Example 3:

Promise.all([myFetch(1000, 1), myFetch(2000, 2), myFetch(5000, 1)])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })


// Example 4:

Promise.allSettled([myFetch(1000, 1), myFetch(2000, 2), myFetch(5000, 1)])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })


// Example 5:

Promise.race([myFetch(2000, 2), myFetch(5000, 3), myFetch(1000, 1)])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })




