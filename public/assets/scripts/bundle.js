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

/***/ "./node_modules/lil-framework/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/lil-framework/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lilComponent: () => (/* reexport safe */ _lilComponent__WEBPACK_IMPORTED_MODULE_0__.lilComponent)\n/* harmony export */ });\n/* harmony import */ var _lilComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lilComponent */ \"./node_modules/lil-framework/dist/lilComponent.js\");\n\n\n//# sourceURL=webpack://habbiton/./node_modules/lil-framework/dist/index.js?");

/***/ }),

/***/ "./node_modules/lil-framework/dist/lilComponent.js":
/*!*********************************************************!*\
  !*** ./node_modules/lil-framework/dist/lilComponent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lilComponent: () => (/* binding */ lilComponent)\n/* harmony export */ });\n/* harmony import */ var _stateObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateObject */ \"./node_modules/lil-framework/dist/stateObject.js\");\n/* harmony import */ var _parseTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseTemplate */ \"./node_modules/lil-framework/dist/parseTemplate.js\");\nfunction lilComponent({name:t,template:e,data:i={},hooks:s={},handlers:a={}}){getImplicitVariables(e,s).forEach(t=>{i[t]=null!=(t=i[t])?t:\"\"}),i.mounted||(i.mounted=\"false\"),i._stateVars=Object.keys(i),e=(0,_parseTemplate__WEBPACK_IMPORTED_MODULE_1__.parseTemplate)(e,i);var r=class extends HTMLElement{constructor(){super()}static get observedAttributes(){return i._stateVars.map(t=>t.toLowerCase())}connectedCallback(){this.innerHTML=e,this.addListeners(),this.dependencyTree=this.parseDependencies();var t=Object.assign(Object.assign({},s),this.getRenderHooks({data:i,hooks:s}));this.state=(0,_stateObject__WEBPACK_IMPORTED_MODULE_0__.stateObject)(this,{data:i,hooks:t}),this.handlers=a;try{this.state._stateVars.forEach(t=>{(this.hasAttribute(t)||\"mounted\"===t)&&this.state&&(this.state[t]=\"mounted\"!==t?this.getAttribute(t):\"true\")})}catch(t){}}attributeChangedCallback(e,t,s){var a;this.state&&(a=i._stateVars.find(t=>t.toLowerCase()===e),this.state[a]=s)}parseDependencies(){const r={};return this.querySelectorAll(\"[has-lfdeps]\").forEach(a=>{a.getAttributeNames().filter(t=>t.startsWith(\"lfdep\")).forEach(t=>{let[,e,s]=t.split(\"-\");(s=i._stateVars.find(t=>t.toLowerCase()===s))&&(r[s]||(r[s]=[]),r[s].push({el:a,attribute:e,innerText:!e}))})}),r}getRenderHooks({data:t,hooks:s}){return Object.keys(t).reduce((t,e)=>(t[e]=s[e]||[],t[e].push(s=>{var t;this.dependencyTree&&null!=(t=this.dependencyTree[e])&&t.forEach(({el:t,attribute:e})=>{e?t.setAttribute(e,s):t.innerText=s})}),t),{})}addListeners(){this.querySelectorAll(\"[lfbind]\").forEach(t=>{const[e,s]=t.getAttribute(\"lfbind\").split(\":\");t.addEventListener(s,t=>{this.state[e]=t.detail||t.target.value})}),this.querySelectorAll(\"[lfhandle]\").forEach(t=>{const[e,s]=t.getAttribute(\"lfhandle\").split(\":\");t.addEventListener(s,t=>{this.handlers[e].call(this,t),t.stopImmediatePropagation()})})}};window.customElements.define(t,r)}function getImplicitVariables(t,e){const s=new Set;return null!=(t=t.match(/{{([^}}]*)}}/gm))&&t.forEach(t=>{t=t.replace(\"{{\",\"\").replace(\"}}\",\"\");s.add(t)}),Object.keys(e).forEach(t=>s.add(t)),Array.from(s)}\n\n//# sourceURL=webpack://habbiton/./node_modules/lil-framework/dist/lilComponent.js?");

/***/ }),

/***/ "./node_modules/lil-framework/dist/parseTemplate.js":
/*!**********************************************************!*\
  !*** ./node_modules/lil-framework/dist/parseTemplate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseTemplate: () => (/* binding */ parseTemplate)\n/* harmony export */ });\nfunction parseTemplate(e,p){var a;let r=e;null!=(a=e.match(/[a-zA-Z-]*=\"{{[^}}]*}}\"/gm))&&a.forEach(e=>{var[a,l]=e.split(\"=\"),l=l.replace('\"{{',\"\").replace('}}\"',\"\"),l=`has-lfdeps lfdep-${a}-${l} ${a}=\"${null!=(a=p[l])?a:\"\"}\"`;r=r.replace(e,l)});return null!=(a=e.match(/{{[^}}]*}}/gm))&&a.forEach(e=>{var a=e.replace(\"{{\",\"\").replace(\"}}\",\"\"),a=`<span has-lfdeps lfdep--${a}>${null!=(a=p[a])?a:\"\"}</span>`;r=r.replace(e,a)}),r}\n\n//# sourceURL=webpack://habbiton/./node_modules/lil-framework/dist/parseTemplate.js?");

/***/ }),

/***/ "./node_modules/lil-framework/dist/stateObject.js":
/*!********************************************************!*\
  !*** ./node_modules/lil-framework/dist/stateObject.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stateObject: () => (/* binding */ stateObject)\n/* harmony export */ });\nfunction stateObject(n,t){const{data:e={},hooks:r={}}=t;return new Proxy(e,{get(t,e){return\"addHook\"===e?(t,e)=>{r[t]||(r[t]=[]),r[t].push(e)}:Reflect.get(t,e)},set(t,e,o){const c=t[e];return Reflect.set(t,e,o),null!=(t=r[e])&&t.forEach(t=>t.call(n,o,c)),o}})}\n\n//# sourceURL=webpack://habbiton/./node_modules/lil-framework/dist/stateObject.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://habbiton/./src/styles/main.scss?");

/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _state_globalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/globalState */ \"./src/scripts/state/globalState.ts\");\n/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/components */ \"./src/scripts/ui/components/index.ts\");\n/* harmony import */ var _ui_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/views */ \"./src/scripts/ui/views/index.ts\");\n\n\n\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/main.ts?");

/***/ }),

/***/ "./src/scripts/state/globalState.ts":
/*!******************************************!*\
  !*** ./src/scripts/state/globalState.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bindAttribute: () => (/* binding */ bindAttribute),\n/* harmony export */   globalState: () => (/* binding */ globalState)\n/* harmony export */ });\n/* harmony import */ var lil_framework_dist_stateObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework/dist/stateObject */ \"./node_modules/lil-framework/dist/stateObject.js\");\n// @ts-ignore\n\nconst globalState = (0,lil_framework_dist_stateObject__WEBPACK_IMPORTED_MODULE_0__.stateObject)({}, {\n    data: {\n        apiToken: window.localStorage.getItem(\"habbiton_apiToken\"),\n        threadNames: JSON.parse(window.localStorage.getItem(\"habbiton_threads\")) || [\"Narrator\"],\n        selectedThread: window.localStorage.getItem(\"habbiton_selectedThread\")\n    }\n});\nfunction bindAttribute(el, key) {\n    console.log(\"yuh\", el, key);\n    globalState.addHook(key, (newVal) => {\n        console.log(\"bruh\", key, newVal);\n        el.setAttribute(key, newVal);\n    });\n}\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/state/globalState.ts?");

/***/ }),

/***/ "./src/scripts/ui/components/app-header.ts":
/*!*************************************************!*\
  !*** ./src/scripts/ui/components/app-header.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n\nconst name = \"app-header\";\nconst template = /*html*/ `Habbiton`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/components/app-header.ts?");

/***/ }),

/***/ "./src/scripts/ui/components/index.ts":
/*!********************************************!*\
  !*** ./src/scripts/ui/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-header */ \"./src/scripts/ui/components/app-header.ts\");\n/* harmony import */ var _message_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-input */ \"./src/scripts/ui/components/message-input.ts\");\n/* harmony import */ var _messages_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-list */ \"./src/scripts/ui/components/messages-list.ts\");\n/* harmony import */ var _thread_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thread-preview */ \"./src/scripts/ui/components/thread-preview.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/components/index.ts?");

/***/ }),

/***/ "./src/scripts/ui/components/message-input.ts":
/*!****************************************************!*\
  !*** ./src/scripts/ui/components/message-input.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n\nconst name = \"message-input\";\nconst template = /*html*/ `<input placeholder=\"Write something\"/>`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/components/message-input.ts?");

/***/ }),

/***/ "./src/scripts/ui/components/messages-list.ts":
/*!****************************************************!*\
  !*** ./src/scripts/ui/components/messages-list.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n\nconst name = \"messages-list\";\nconst template = /*html*/ `<div>messages will go here</div>`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/components/messages-list.ts?");

/***/ }),

/***/ "./src/scripts/ui/components/thread-preview.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/ui/components/thread-preview.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n/* harmony import */ var _state_globalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/globalState */ \"./src/scripts/state/globalState.ts\");\n\n\nconst name = \"thread-preview\";\nconst template = /*html*/ `\n  <style>\n    thread-preview {\n      display: block;\n      padding: 8px;\n      border-bottom: 1px solid #aaa;\n      box-sizing: border-box;\n      width: 100%;\n      cursor: pointer;\n      transition: background-color 0.2s;\n    }\n    thread-preview.is-selected {\n      background-color: #f0f0f0;\n    }\n    thread-preview:hover {\n      background-color: #f4f4f4;\n    }\n    .message-preview {\n      color: #777;\n    }\n    .thread-name {\n      color: #333;\n    }\n  </style>\n  <div class=\"thread-name\">{{threadName}}</div>\n  <div class=\"message-preview\">{{messagePreview}}</div>\n`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    data: {\n        thread: null,\n        messagePreview: \"loading...\"\n    },\n    hooks: {\n        mounted: [function () {\n                this.addEventListener(\"click\", () => {\n                    var _a;\n                    console.log(\"uh\", this.state.threadName);\n                    _state_globalState__WEBPACK_IMPORTED_MODULE_1__.globalState.selectedThread = this.state.threadName;\n                    (_a = document.querySelector(\"thread-preview.is-selected\")) === null || _a === void 0 ? void 0 : _a.classList.remove(\"is-selected\");\n                    this.classList.add(\"is-selected\");\n                });\n            }],\n        threadName: [function (threadName) {\n                // should get last message in thread and set preview\n                console.log(`should get last message in ${threadName} and set preview`);\n            }]\n    }\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/components/thread-preview.ts?");

/***/ }),

/***/ "./src/scripts/ui/views/index.ts":
/*!***************************************!*\
  !*** ./src/scripts/ui/views/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _messages_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-view */ \"./src/scripts/ui/views/messages-view.ts\");\n/* harmony import */ var _threads_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./threads-view */ \"./src/scripts/ui/views/threads-view.ts\");\n\n\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/views/index.ts?");

/***/ }),

/***/ "./src/scripts/ui/views/messages-view.ts":
/*!***********************************************!*\
  !*** ./src/scripts/ui/views/messages-view.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n/* harmony import */ var _state_globalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/globalState */ \"./src/scripts/state/globalState.ts\");\n/**\n * Renders all messages in a thread.\n * Includes UI for sending messages from the user.\n * Emits events whenever the user sends a message.\n */\n\n\nconst name = \"messages-view\";\nconst template = /*html*/ `\n  <style>\n    messages-view {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      width: 100%;\n      background-repeat: no-repeat;\n      background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E text %7B fill: %23999; font-size: 16px; font-family: VT323, monospace; %7D %3C/style%3E%3Ctext x='0' y='12'%3E(Select a conversation)%3C/text%3E%3C/svg%3E%0A\");\n      background-position: center;\n      background-size: 200px 100px;\n    }\n    .no-thread-selected {\n      display: none;\n    }\n    messages-list {\n      flex: 1;\n    }\n    messages-list,\n    message-input {\n      background: white;\n    }\n  </style>\n  <div class=\"select-thread-cta\"></div>\n  <messages-list class=\"{{threadSelectedClass}}\"></messages-list>\n  <message-input class=\"{{threadSelectedClass}}\"></message-input>\n`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    data: {\n        threadSelectedClass: \"no-thread-selected\",\n        selectedThread: null\n    },\n    hooks: {\n        mounted: [function () {\n                (0,_state_globalState__WEBPACK_IMPORTED_MODULE_1__.bindAttribute)(this, \"selectedThread\");\n            }],\n        selectedThread: [function (thread) {\n                console.log(\"hmmmm\", thread);\n                this.state.threadSelectedClass = thread ? \"thread-selected\" : \"no-thread-selected\";\n            }]\n    }\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/views/messages-view.ts?");

/***/ }),

/***/ "./src/scripts/ui/views/threads-view.ts":
/*!**********************************************!*\
  !*** ./src/scripts/ui/views/threads-view.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n/* harmony import */ var _state_globalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/globalState */ \"./src/scripts/state/globalState.ts\");\n/**\n * Renders a preview of all available threads (e.g., thread name, most recent message, etc).\n * Emits an event when the user clicks on a thread.\n */\n\n\nconst name = \"threads-view\";\nconst template = /*html*/ ``;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    data: {\n        threadNames: [],\n    },\n    hooks: {\n        mounted: [function () {\n                console.log(\"List of threads????\", _state_globalState__WEBPACK_IMPORTED_MODULE_1__.globalState.threadNames);\n                this.state.threadNames = _state_globalState__WEBPACK_IMPORTED_MODULE_1__.globalState.threadNames;\n            }],\n        threadNames: [function (threadNames) {\n                console.log(\"Should display a list of threads\");\n                this.innerHTML = \"\";\n                threadNames.forEach(name => {\n                    const previewEl = document.createElement(\"thread-preview\");\n                    previewEl.setAttribute(\"threadName\", name);\n                    this.appendChild(previewEl);\n                });\n            }]\n    }\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/views/threads-view.ts?");

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
/******/ 	__webpack_require__("./src/scripts/main.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/main.scss");
/******/ 	
/******/ })()
;