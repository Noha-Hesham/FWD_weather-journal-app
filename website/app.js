/* Global Variables */
let baseUrl = 'https://community-open-weather-map.p.rapidapi.com/forecast?zip=';
let apiKey = 'fe0125f924msh059d2ce0c148768p1c8a84jsnc14b816c0ded';
let apiHost = 'community-open-weather-map.p.rapidapi.com';


// Create a new date instance dynamically with JS

//Date
function date() {
    let dynData = new Date();
    let newDate = dynData.getDate()+'/'+ dynData.getMonth()+'/'+ dynData.getFullYear();

    console.log('Date: ', newDate);
}

//feeling
function feeling() {
    let feeling = document.getElementById('feelings').value;
    
    console.log('Feeling: ', feeling);
}

 

//ZipCode
function zipCode() {
    let zipCode = document.getElementById('zip').value;

    console.log('Zip Code: ', zipCode);
}

//Tempreature
function Temp() {};


//eventListeners
function generate() {
    let generation = document.getElementById('generate')
    generation.addEventListener('click', function() {
        zipCode();
        feeling();
        date();
    });
}
generate();



//syncing
// const getWeatherData = async ( baseUrl, zipCode, apiKey)=>{
//     const res = await fetch(baseUrl+ zipCode, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": apiKey,
//             "x-rapidapi-host": apiHost
//         }
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }

// function clickAction(e) {
//     getWeatherData(baseUrl, zipCode, apiKey)
// }





// getWeatherData()