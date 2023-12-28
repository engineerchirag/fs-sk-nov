// 1. On submit get the location name

// 2. Make API call to server to get the weather deatail: https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q="New Delhi"&aqi=no

// 3. Get information from response json, display the data into respective DOM reference/element.


const inputRef = document.querySelector('.searchField');
const buttonRef = document.querySelector('button[type="submit"]');
const tmpRef = document.querySelector(".weather .temp");
const locationRef = document.querySelector(".weather .time_location p");
const timeDateRef = document.querySelector(".weather .time_location span");
const conditionTextRef = document.querySelector(".weather .weather_condition span");
const conditionIconRef = document.querySelector(".weather .weather_condition p img");


// 1. On Click get the location name
buttonRef.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputRef.value);
    fetchData(inputRef.value);
})

// 2. Make API call to server to get the weather deatail
function fetchData(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=no`)
        .then(function(res) { return res.json() })
        .then((data) => updateWeatherDetails(data))
        .catch(function(e) {
            console.log(e);
        })
}

// 3. Get information from response json, display the data into respective DOM reference/element.
function updateWeatherDetails(obj) {
    const tempC = obj.current.temp_c;
    const conditionText = obj.current.condition.text;
    const conditionIcon = obj.current.condition.icon;
    const locationName = obj.location.name;
    const dateTime = obj.location.localtime;

    tmpRef.innerText = tempC;
    conditionTextRef.innerText = conditionText;
    conditionIconRef.src = conditionIcon;
    locationRef.innerText =  locationName;   
    timeDateRef.innerText = dateTime;
}