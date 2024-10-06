const apiKey = '4f59b554da5342c18a5b830243973464';


let cityName = document.querySelector("#city-name");
let searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
    const cityValue = cityName.value;
    // console.log(cityValue);

    getWheatherData(cityValue);
});

getWheatherData = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    const data = await response.json();
    console.log(data);
    let temperature = Math.round(data.main.temp)
    let hawa = data.weather[0].description
    let feels = Math.round(data.main.feels_like)
    let humidity = data.main.humidity
    let winds = data.wind.speed
    let image = data.weather[0].icon
    document.getElementById('tempe').innerHTML = `${temperature}°C`;

    document.getElementById('hawa').innerHTML = `${hawa}`;
    document.getElementById('feels').innerHTML = `Feels Like: ${feels}°C`;
    document.getElementById('humi').innerHTML = `Humidity: ${humidity} `;
    document.getElementById('windspeed').innerHTML = `Wind Speed: ${winds} km/h`;
    document.getElementById('icons').innerHTML = `<img src="https://openweathermap.org/img/wn/${image}.png" alt="">`

}