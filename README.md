# 🌤️ Weather Forecast App  

A modern and responsive **Weather Forecast Application** built using **React (Vite)** and the **OpenWeather API**.  

This application allows users to search for any city and view the **current weather** along with a **5-day forecast**.

---

## 🚀 Features  

- 🔍 Search weather by city name  
- 🌡️ Current weather big display card  
- 📅 5-Day forecast  
- 🌈 Dynamic background based on weather condition  
- 💧 Humidity & 🌬️ Wind speed display  
- ⏳ Loading indicator  
- ❌ Error handling (City not found)  
- 📱 Fully responsive design  

---

## 🛠️ Tech Stack  

- ⚛️ React (Vite)  
- 🎨 CSS3  
- 🌐 OpenWeather API  
- 📦 JavaScript (ES6+)  

---

## 📂 Project Structure  
``` bash
my-weather-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CurrentWeather.jsx
│   │   ├── CurrentWeather.css
│   │   ├── Loader.jsx
│   │   ├── Loader.css
│   │   ├── WeatherCard.jsx
│   │   ├── WeatherCard.css
│   │
│   ├── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```


---

## 🔑 Environment Variables  

Create a `.env` file in the root directory and add:

You can get a free API key from:  
👉 https://openweathermap.org/api

⚠️ Do not upload your `.env` file to GitHub.

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the Repository  

```bash
git clone https://github.com/your-username/Weather-App.git
cd my-weather-app
```
## 2️⃣ Install Dependencies
``` bash
npm install
```

## 3️⃣ Run the Development Server
```bash
npm run dev
```

## 🎯 How It Works

- User enters a city name
- App fetches weather data from OpenWeather API

### Displays:

- Current weather (first forecast item)
- 5 day forecast (filtered at 12:00 PM)
- Background changes dynamically based on weather condition


## 👩‍💻 Author

**Sadhana Shree**

