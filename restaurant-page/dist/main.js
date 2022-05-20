/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CreateMenuPage.js":
/*!*******************************!*\
  !*** ./src/CreateMenuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuPage\": () => (/* binding */ createMenuPage)\n/* harmony export */ });\nclass Food{\n    constructor(name, description, image){\n        this.name = name\n        this.description = description\n        this.image = image\n    }\n}\n\nconst createMenuPage = (content) => {\n    const food1 = new Food(\"bread\",\"Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture\",\"./Fresh_made_bread_05.jpg\")\n    const food2 = new Food(\"naber\",\"Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture\",\"./Fresh_made_bread_05.jpg\")\n    const food3 = new Food(\"bread\",\"Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture\",\"./Fresh_made_bread_05.jpg\")\n    const food4 = new Food(\"bread\",\"Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture\",\"./Fresh_made_bread_05.jpg\")\n\n    let foods = [food1,food2,food3,food4]\n    content.setAttribute(\"gap\",\"50px\")\n    foods.forEach(food => {\n        let food_container = document.createElement(\"div\")\n        let name = document.createElement(\"p\")\n        let description = document.createElement(\"p\")\n        let image = document.createElement(\"img\")\n        name.textContent = food.name\n        description.textContent = food.description\n        image.src = food.image\n        food_container.append(name,image,description)\n        content.append(food_container)\n    });\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/CreateMenuPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateMenuPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateMenuPage.js */ \"./src/CreateMenuPage.js\");\n\n\nconst headpage_button = document.querySelector(\"#headpage\")\nconst menu_button = document.querySelector(\"#menu\")\nconst contact_button = document.querySelector(\"#contact\")\n\n\n\nfunction createHeadPage(content){\n    let p = document.createElement(\"p\")\n    p.textContent = \"Welcome to the human restourant where you can eat the food that humans consume back then they exists.\"\n    p.setAttribute(\"margin\",\"250px\")\n    content.appendChild(p)\n}\n\n\n\nfunction createContactPage(content){\n    let phone_p = document.createElement(\"p\")\n    phone_p.textContent = \"Phone: 05387328926\"\n    let email_p = document.createElement(\"p\")\n    email_p.textContent = \"freehumans@solarsystem.bok\"\n    let instagram = document.createElement(\"a\")\n    instagram.href = \"https://www.youtube.com/\"\n    content.appendChild(phone_p)\n    content.appendChild(email_p)\n    content.appendChild(instagram)\n}\n\nfunction reset_content(){\n    let old_content = document.querySelector(\"#content\")\n    old_content.remove()\n    let content = document.createElement(\"div\")\n    content.setAttribute(\"id\",\"content\")\n    document.body.appendChild(content)\n    return content\n}\n\nheadpage_button.addEventListener(\"click\", () => {\n    let content = reset_content()\n    createHeadPage(content)\n})\n\ncontact_button.addEventListener(\"click\", () => {\n    let content = reset_content()\n    createContactPage(content)\n})\n\nmenu_button.addEventListener(\"click\", () => {\n    let content = reset_content()\n    ;(0,_CreateMenuPage_js__WEBPACK_IMPORTED_MODULE_0__.createMenuPage)(content)\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;