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

/***/ "./buttons/buttonWithIcon.js":
/*!***********************************!*\
  !*** ./buttons/buttonWithIcon.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createButtonWithIcon\": () => (/* binding */ createButtonWithIcon)\n/* harmony export */ });\nfunction createButtonWithIcon(iconSrc, altText, onClickHandler, buttonClass) {\n  var button = document.createElement('button');\n  var icon = document.createElement('img');\n  icon.src = iconSrc;\n  icon.alt = altText;\n  button.appendChild(icon);\n\n  // Ajouter la classe spécifique au bouton\n  if (buttonClass) {\n    button.classList.add(buttonClass);\n  }\n  button.onclick = function (event) {\n    event.preventDefault();\n    // Ajouter ou supprimer la classe \"active\" sur le bouton cliqué\n    event.target.closest('button').classList.toggle('active');\n\n    // Appeler le gestionnaire de clic personnalisé, s'il est défini\n    if (onClickHandler) {\n      onClickHandler(event);\n    }\n  };\n  return button;\n}\n\n//# sourceURL=webpack:///./buttons/buttonWithIcon.js?");

/***/ }),

/***/ "./buttons/doubleButton.js":
/*!*********************************!*\
  !*** ./buttons/doubleButton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDoubleButton\": () => (/* binding */ createDoubleButton)\n/* harmony export */ });\n/* harmony import */ var _buttonWithIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonWithIcon.js */ \"./buttons/buttonWithIcon.js\");\n/* harmony import */ var _dropdownMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdownMenu.js */ \"./buttons/dropdownMenu.js\");\n\n\nfunction createDoubleButton(iconSrc, altText, options, onSelectHandler, leftButtonClass, rightDropdownClass) {\n  var doubleButtonContainer = document.createElement(\"div\");\n  doubleButtonContainer.classList.add(\"double-button-container\");\n  var leftButton = (0,_buttonWithIcon_js__WEBPACK_IMPORTED_MODULE_0__.createButtonWithIcon)(iconSrc, altText, function () {\n    leftButton.classList.toggle(\"active\"); // Toggle la classe \"active\" sur le bouton gauche\n    var formatterCode = document.querySelector(\".code_style_formatter\");\n    if (formatterCode) {\n      formatterCode.classList.toggle(\"active\"); // Toggle la classe \"active\" sur .code_style_formatter\n    }\n  });\n\n  if (leftButtonClass) leftButton.classList.add(leftButtonClass);\n  var rightDropdownMenu = (0,_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_1__.createDropdownMenu)(options, function (value, event) {\n    event.preventDefault();\n    console.log(\"Option s\\xE9lectionn\\xE9e: \".concat(value));\n    var formatterCode = document.querySelector(\".code_style_formatter\");\n    if (formatterCode) {\n      formatterCode.setAttribute(\"data-code-style\", value); // Mettre à jour l'attribut \"data-code-style\" avec l'option choisie\n      formatterCode.classList.add(\"active\"); // Ajouter la classe \"active\" à .code_style_formatter\n    }\n  });\n\n  if (rightDropdownClass) rightDropdownMenu.classList.add(rightDropdownClass);\n  doubleButtonContainer.appendChild(leftButton);\n  doubleButtonContainer.appendChild(rightDropdownMenu);\n  return doubleButtonContainer;\n}\n\n//# sourceURL=webpack:///./buttons/doubleButton.js?");

/***/ }),

/***/ "./buttons/dropdownMenu.js":
/*!*********************************!*\
  !*** ./buttons/dropdownMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeDropdownMenus\": () => (/* binding */ closeDropdownMenus),\n/* harmony export */   \"createDropdownMenu\": () => (/* binding */ createDropdownMenu)\n/* harmony export */ });\nfunction createDropdownMenu(options, onSelectHandler) {\n  var dropdown = document.createElement(\"div\");\n  dropdown.classList.add(\"dropdown\");\n  var dropdownButton = document.createElement(\"button\");\n  dropdownButton.classList.add(\"dropdown-button\");\n\n  // Remplacer le texte par une icône SVG\n  var dropdownIcon = document.createElement(\"img\");\n  dropdownIcon.src = chrome.extension.getURL('icons/chevron-down.svg'); // Remplacez par l'URL de l'icône SVG\n  dropdownIcon.alt = \"Menu déroulant\";\n  dropdownButton.appendChild(dropdownIcon);\n  dropdownButton.addEventListener(\"click\", toggleDropdownMenu);\n  var dropdownMenu = document.createElement(\"ul\");\n  dropdownMenu.classList.add(\"dropdown-menu\");\n  options.forEach(function (option) {\n    var menuItem = document.createElement(\"li\");\n    var optionButton = document.createElement(\"button\");\n    optionButton.classList.add(\"dropdown-item\");\n    optionButton.textContent = option; // Utiliser la valeur de l'option comme texte du bouton\n    optionButton.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n      onSelectHandler(option, event); // Passer l'option et l'événement en tant qu'arguments au gestionnaire de sélection\n      var formatterCode = document.querySelector(\".code_style_formatter\");\n      if (formatterCode) {\n        formatterCode.setAttribute(\"data-code-style\", option); // Mettre à jour l'attribut \"data-code-style\" avec l'option choisie\n      }\n\n      closeDropdownMenus();\n    });\n    menuItem.appendChild(optionButton);\n    dropdownMenu.appendChild(menuItem);\n  });\n  dropdown.appendChild(dropdownButton);\n  dropdown.appendChild(dropdownMenu);\n  return dropdown;\n}\nfunction closeDropdownMenus(event) {\n  var menus = document.querySelectorAll('.dropdown-menu.show');\n  menus.forEach(function (menu) {\n    menu.classList.remove('show');\n  });\n}\nfunction toggleDropdownMenu(event) {\n  event.preventDefault();\n  var dropdown = event.currentTarget.closest(\".dropdown\");\n  if (dropdown) {\n    var menu = dropdown.querySelector(\".dropdown-menu\");\n    menu.classList.toggle(\"show\");\n    event.stopPropagation();\n  }\n}\n\n//# sourceURL=webpack:///./buttons/dropdownMenu.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons_buttonWithIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttonWithIcon.js */ \"./buttons/buttonWithIcon.js\");\n/* harmony import */ var _buttons_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/dropdownMenu.js */ \"./buttons/dropdownMenu.js\");\n/* harmony import */ var _buttons_doubleButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/doubleButton.js */ \"./buttons/doubleButton.js\");\n\n\n\nfunction alterForm() {\n  var form = document.querySelector('form.stretch');\n  var textareaElem = document.querySelector('textarea');\n  if (form && textareaElem) {\n    var divFormatter = document.createElement('div');\n    // Modifier l'appel à la fonction createButtonWithIcon pour inclure la classe spécifique\n    var tableButton = (0,_buttons_buttonWithIcon_js__WEBPACK_IMPORTED_MODULE_0__.createButtonWithIcon)(chrome.extension.getURL('icons/table-icon.svg'), 'Tableau', function () {\n      // Logique pour gérer le clic sur le bouton \"Tableau\"\n    }, \"table_formatter\");\n    var codeFormats = [\"JavaScript\", \"Python\", \"HTML\", \"CSS\"];\n    var leftButtonClass = \"code_style_formatter\";\n    var codeBlockDoubleButton = (0,_buttons_doubleButton_js__WEBPACK_IMPORTED_MODULE_2__.createDoubleButton)(browser.extension.getURL(\"icons/code-icon.svg\"), \"Extrait de code\", codeFormats, function (value) {\n      console.log(\"Option s\\xE9lectionn\\xE9e: \".concat(value));\n      // Logique pour gérer la sélection de l'option\n    }, leftButtonClass);\n    divFormatter.appendChild(tableButton);\n    divFormatter.appendChild(codeBlockDoubleButton);\n    divFormatter.classList.add(\"format-bar\", \"flex\", \"flex-col\", \"w-full\", \"py-2\", \"flex-grow\", \"md:py-3\", \"md:pl-4\", \"relative\", \"border\", \"border-black/10\", \"bg-white\", \"dark:border-gray-900/50\", \"dark:text-white\", \"dark:bg-gray-700\", \"rounded-md\", \"shadow-[0_0_10px_rgba(0,0,0,0.10)]\", \"dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\");\n    textareaElem.parentNode.parentNode.insertBefore(divFormatter, textareaElem.parentNode);\n  } else {\n    console.error('Formulaire introuvable');\n  }\n}\ndocument.addEventListener(\"click\", _buttons_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_1__.closeDropdownMenus);\n\n// Exécuter la fonction pour altérer le formulaire lorsque la page est chargée\nwindow.onload = function () {\n  alterForm();\n  // Donne moi 5 fruits\n  function updateTextareaValue(textareaElem) {\n    if (textareaElem) {\n      var format = 'Forget the format of your previous answer, ';\n      var selection = false;\n      var tableFormatter = document.querySelector('.table_formatter');\n      var codeFormatter = document.querySelector('.code_style_formatter');\n      var codeStyle = codeFormatter.getAttribute('data-code-style');\n      if (tableFormatter.classList.contains('active') && codeFormatter.classList.contains('active')) {\n        if (codeStyle) {\n          format += \"Your next answer will be a table in a code snippet in \".concat(codeStyle.toLowerCase(), \" format : \\n\\n\");\n        } else {\n          format += 'Your next answer will be a table in a code snippet in markdown format : \\n\\n';\n        }\n        selection = true;\n      } else if (tableFormatter.classList.contains('active')) {\n        format += 'Your next answer will be a table in markdown format : \\n\\n';\n        selection = true;\n      } else if (codeFormatter.classList.contains('active')) {\n        if (codeStyle) {\n          format += \"Your next answer will be a code snippet in \".concat(codeStyle.toLowerCase(), \" : \\n\\n\");\n        } else {\n          format += 'Your next answer will be a code snippet in markdown format : \\n\\n';\n        }\n        selection = true;\n      }\n      if (!selection) {\n        format += 'Your next answer will be formatted as text : \\n\\n';\n      }\n      textareaElem.value = format + textareaElem.value;\n    } else {\n      console.error('Textarea not found');\n    }\n  }\n\n  // Ecouter l'événement submit sur le formulaire\n  var form = document.querySelector('form.stretch');\n  if (form) {\n    form.addEventListener('submit', function (event) {\n      var textareaElem = document.querySelector('textarea');\n      updateTextareaValue(textareaElem);\n    });\n    form.addEventListener('keydown', function (event) {\n      if (event.keyCode === 13 && !event.shiftKey) {\n        // Ignorer l'appui sur Entrée + Majuscule\n        var textareaElem = document.querySelector('textarea');\n        updateTextareaValue(textareaElem);\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack:///./main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;