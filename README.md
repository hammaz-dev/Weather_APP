# Weather_APP
# 🌤 Async Weather Tracker

## 📌 Project Description

Async Weather Tracker is a simple web application built using **HTML, CSS, and JavaScript** that allows users to search for the weather information of any city.

The application fetches real-time weather data from the **OpenWeatherMap API** using asynchronous JavaScript (Fetch API and async/await). It also demonstrates how the **JavaScript Event Loop and Promises** work while handling API requests.

Users can search for cities, view weather details, and access their recent search history.

---

## 🚀 Features

* Search weather by **city name**
* Fetch real-time weather data using **API**
* Display:

  * City Name
  * Temperature
  * Weather Condition
  * Humidity
* **Recent search history** using Local Storage
* Demonstrates **Async/Await and Promise handling**
* Console section to show **Event Loop logs**

---

## 🛠 Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Application logic
* **Fetch API** – To retrieve weather data
* **Local Storage** – To store search history
* **OpenWeatherMap API** – Weather data source

---

## 📂 Project Structure

```
Async-Weather-Tracker
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙ How It Works

1. User enters a **city name** in the input field.
2. When the **Search button** is clicked:

   * JavaScript sends a request to the **OpenWeatherMap API**.
3. The API returns weather data in **JSON format**.
4. The application displays:

   * Temperature
   * Weather condition
   * Humidity
5. The searched city is saved in **Local Storage** for quick access later.

---

## 🔗 API Used

OpenWeatherMap API

Example request:

```
https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=API_KEY&units=metric
```

---

## 📖 Concepts Demonstrated

* JavaScript **Async/Await**
* **Promises**
* **Fetch API**
* **Event Loop**
* **Local Storage**
* **DOM Manipulation**

---

## ▶ How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a browser
   or run using **Live Server in VS Code**.

---

## 👨‍💻 Author

Student Project – Async Weather Tracker
Mohd Hammaz
