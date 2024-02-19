// // Event1
// function handleSubmit () {
//     console.log("Hi");
// }

// const btnRef = document.querySelector('button');

// // Event2
// btnRef.addEventListener('click', function(event) {
//     console.log(event);
//     console.log('Button Clicked-using event listener');
// })

// // Event3
// btnRef.addEventListener('dblclick', function(e) {
//     console.log(e);
//     console.log('Button Double Clicked-using event listener');
// })


const btnRef = document.querySelector('button');

btnRef.addEventListener('click', function(event) {
    event.preventDefault();
    const usernameRef = document.getElementById('username');
    const passwordRef = document.getElementById('password');
    console.log(usernameRef.value, passwordRef.value);
});