const apiKey = "549eb961006758b7b637c8ca37da4557";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const historyDiv = document.getElementById("history");
const consoleBox = document.getElementById("consoleLogs");

function log(msg) {
    console.log(msg);
    consoleBox.innerHTML += msg + "<br>";
}

searchBtn.addEventListener("click", () => {
    let city = cityInput.value;
    if (city === "") {
        alert("Enter city name");
        return;
    }
    getWeather(city);
    saveHistory(city);
});

async function getWeather(city) {
    consoleBox.innerHTML = "";
    log("Sync Start");
    try {
        log("Fetching weather...");
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        if (data.cod !== 200) {
            throw new Error("City not found");
        }
        displayWeather(data);
        log("Async Task Completed");
    }
    catch (error) {
        weatherResult.innerHTML = `<p style="color:red">${error.message}</p>`;
        log("Error occurred");
    }
    log("Sync End");
}

function displayWeather(data) {
    weatherResult.innerHTML = `
            <p><b>City:</b> ${data.name}</p>
            <p><b>Temperature:</b> ${data.main.temp} °C</p>
            <p><b>Weather:</b> ${data.weather[0].main}</p>
            <p><b>Humidity:</b> ${data.main.humidity}%</p>
        `;
}

function saveHistory(city) {
    let history = JSON.parse(localStorage.getItem("cities")) || [];
    if (!history.includes(city)) {
        history.push(city);
    }
    localStorage.setItem("cities", JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    historyDiv.innerHTML = "";
    let history = JSON.parse(localStorage.getItem("cities")) || [];
    history.forEach(city => {
        let btn = document.createElement("button");
        btn.innerText = city;
        btn.onclick = () => getWeather(city);
        historyDiv.appendChild(btn);
    });
}

loadHistory();

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => log("Promise example executed"))
    .catch(err => log("Promise error"));