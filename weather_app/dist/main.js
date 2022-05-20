/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const API_KEY = \"9511a980519d2619d280ebc37aa0febe\";\n\nasync function getCurrentWeatherData(lat,lon){\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);\n    const data = await response.json();\n    return data;\n}\n\nasync function getLatLon(cityName){\n    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);\n    const data = await response.json();\n    const lat = data[0].lat;\n    const lon = data[0].lon;\n    return getCurrentWeatherData(lat,lon).then();\n}\n\nconst input = prompt(\"Enter a city name\");\n\nfunction getTemp(data){\n    return data.main.temp;\n}\n\nfunction getWind(data){\n    return data.wind.speed;\n}\n\nfunction getHumudity(data){\n    return data.main.humidity;\n}\n\nfunction getWeather(data){\n    return data.weather[0].main;\n}\ngetLatLon(input).then(data => {\n    const temp = getTemp(data);\n    const wind = getWind(data);\n    const humidity = getHumudity(data);\n    const weather = getWeather(data);\n    const weatherDiv = createWeatherDiv(temp,wind,humidity,weather);\n    document.body.appendChild(weatherDiv);\n});\n\nfunction createWeatherDiv(temp,wind,humidity,weather){\n    const weatherDiv = document.createElement(\"div\");\n    weatherDiv.classList.add(\"weather_container\");\n    const tempDiv = document.createElement(\"div\");\n    tempDiv.classList.add(\"temp\");\n    tempDiv.innerHTML = `${temp}&deg;C`;\n    const windDiv = document.createElement(\"div\");\n    windDiv.classList.add(\"wind\");\n    windDiv.innerHTML = `${wind}m/s`;\n    const humidityDiv = document.createElement(\"div\");\n    humidityDiv.classList.add(\"humidity\");\n    humidityDiv.innerHTML = `${humidity}%`;\n    const weatherDiv1 = document.createElement(\"div\");\n    weatherDiv1.classList.add(\"weather\");\n    weatherDiv1.innerHTML = `${weather}`;\n    const img = document.createElement(\"img\");\n    img.src = \"https://openweathermap.org/img/wn/\" + getWeatherPNGname(weather) + \"@2x.png\";\n    const specDiv = document.createElement(\"div\");\n    specDiv.classList.add(\"spec\");\n    const tempAndIcon = document.createElement(\"div\");\n    tempAndIcon.classList.add(\"temp_and_icon\");\n    tempAndIcon.appendChild(img);\n    tempAndIcon.appendChild(tempDiv);\n    specDiv.appendChild(weatherDiv1);\n    specDiv.appendChild(windDiv);\n    specDiv.appendChild(humidityDiv);\n    weatherDiv.appendChild(tempAndIcon);\n    weatherDiv.appendChild(specDiv);\n    \n    return weatherDiv;\n}\n\nfunction getWeatherPNGname(weather){\n    switch(weather){\n        case \"Clear\":\n            return \"01d\";\n        case \"Clouds\":\n            return \"02d\";\n        case \"Rain\":\n            return \"10d\";\n        case \"Snow\":\n            return \"13d\";\n        case \"Thunderstorm\":\n            return \"11d\";\n        default:\n            return \"01d\";\n    }\n}\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;