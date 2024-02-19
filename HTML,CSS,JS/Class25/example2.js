const myPromise = new Promise(function(resolve, reject) {
    var passingScore = 33;
    var studentScore = 20;
    
    setTimeout(function() { 
        if (studentScore > passingScore) {
            resolve('Passed!');
        } else {
            reject('Failed!')
        }
    }, 10000);
}).then(function(data) {
    // On success
    console.log('Success >> ', data);
}).catch(function(err) {
    // On failure
    console.log('Failure >> ', err);
});

