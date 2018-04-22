/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CharacterData = __webpack_require__(/*! ./models/character_data.js */ \"./src/models/character_data.js\");\nconst CharacterView = __webpack_require__(/*! ./views/character_view.js */ \"./src/views/character_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('DOM loaded');\n  const characterSelect = document.querySelector('#character-select');\n  const characterContainer = document.querySelector('#character-detail-view');\n  const characterView = new CharacterView(characterSelect, characterContainer);\n\n  const houseSelect = document.querySelector('#character-house-select');\n\n\n  const characterData = new CharacterData();\n\n  characterSelect.addEventListener('change', (evt) => {\n    characterContainer.innerHTML = '';\n    const selectedIndex = evt.target.value;\n    const selectedCharacter = characterData.data[selectedIndex];\n    characterView.renderDetail(selectedCharacter);\n  })\n\n  characterData.getData((data) => {\n    characterView.renderSelect(data)\n  });\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function (onComplete) {\n  const request = new XMLHttpRequest();\n  request.open('GET', this.url);\n  request.addEventListener('load', function() {\n    if(this.status !==200) {\n      return;\n    }\n    const responseBody = JSON.parse(this.responseText);\n    onComplete(responseBody);\n  });\n  request.send();\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/character_data.js":
/*!**************************************!*\
  !*** ./src/models/character_data.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\");\n\nconst CharacterData = function() {\n  this.url = 'http://hp-api.herokuapp.com/api/characters';\n  this.data = null;\n}\n\nCharacterData.prototype.getData = function (onComplete) {\n  const request = new Request(this.url);\n  request.get((data) => {\n    console.log(data);\n    this.data = data;\n    onComplete(data);\n  });\n};\n\nmodule.exports = CharacterData;\n\n\n//# sourceURL=webpack:///./src/models/character_data.js?");

/***/ }),

/***/ "./src/views/character_view.js":
/*!*************************************!*\
  !*** ./src/views/character_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CharacterView = function(selectElement, characterContainer) {\n  this.selectElement = selectElement;\n  this.characterContainer = characterContainer;\n}\n\nCharacterView.prototype.renderSelect = function (characterData) {\n  characterData.forEach((character, index) => {\n    const characterOption = document.createElement('option');\n    characterOption.textContent = character.name;\n    characterOption.value = index;\n    this.selectElement.appendChild(characterOption);\n  })\n};\n\nCharacterView.prototype.renderDetail = function (character) {\n    const characterName = document.createElement('h3');\n    characterName.textContent = `Name is: ${character.name}`;\n\n    const characterSpecies = document.createElement('h3');\n    characterSpecies.textContent = `Species: ${character.species}`;\n\n    const characterWandWood = document.createElement('h3');\n    characterWandWood.textContent = `Wand made from: ${character.wand.wood} wood`;\n\n    const characterWandCore = document.createElement('h3');\n    characterWandCore.textContent = `Wand core is: ${character.wand.core}`;\n\n    const characterWandLength = document.createElement('h3');\n    characterWandLength.textContent = `Wand length: ${character.wand.length}`;\n\n    const characterImage = document.createElement('img');\n    characterImage.src = character.image;\n    characterImage.alt = character.name;\n\n    this.characterContainer.appendChild(characterName);\n    this.characterContainer.appendChild(characterSpecies);\n    this.characterContainer.appendChild(characterWandWood);\n    this.characterContainer.appendChild(characterWandCore);\n    this.characterContainer.appendChild(characterWandLength);\n    this.characterContainer.appendChild(characterImage);\n\n};\n\nmodule.exports = CharacterView;\n\n\n//# sourceURL=webpack:///./src/views/character_view.js?");

/***/ })

/******/ });