// import apiKey from "./apiKey";
const apiKey = "8b64f39345da8a13cec9239f33f65770";

const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.getElementById("searchbox");
const searchbtn = document.getElementById("searchbtn");
const wetherIcon = document.querySelector(".wether-icon");
let imgPath;

async function checkWether(city){
    const response = await fetch(apiURL+city+`&appid=${apiKey}`);
    var data = await response.json();
console.log(data);
    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+" °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+" %";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
    // switch(data.wether[0].main){
    //     case "Clouds":
    //             wetherIcon = "Source/clouds.png";
    //             break;
                
    //     case "Clear":
    //             wetherIcon = "Source/clear.png";
    //             break;
                
    //     case "Drizzle":
    //             wetherIcon = "Source/drizzle.png";
    //             break;

    //     case "Mist":
    //             wetherIcon = "Source/mist.png";
    //             break;
                
    //     case "Rain":
    //             wetherIcon = "Source/rain.png";
    //             break;    
                    
    //     case "Snow":
    //             wetherIcon = "Source/snow.png";
    //             break;
        
    //     default:
    //             wetherIcon = "Source/clouds.png";
    // }
    document.querySelector(".wether-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    // document.querySelector("#description").innerHTML = `${data.weather[0].description}`;

}

searchbtn.addEventListener("click", ()=>{
    checkWether(searchbox.value)
});