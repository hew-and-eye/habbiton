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

/***/ "./src/scripts/state/MessageThread.ts":
/*!********************************************!*\
  !*** ./src/scripts/state/MessageThread.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MessageThread: () => (/* binding */ MessageThread),\n/* harmony export */   MessageThreadSingleton: () => (/* binding */ MessageThreadSingleton)\n/* harmony export */ });\n/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ \"./node_modules/idb/build/index.js\");\n/**\n * Entity class for a single conversation with an NPC.\n * Handles persisting messages to an IndexedDB table, creating tables as needed.\n */\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst singletonRegistry = {};\nfunction MessageThreadSingleton(name) {\n    singletonRegistry[name] || (singletonRegistry[name] = new MessageThread(name));\n    return singletonRegistry[name];\n}\nclass MessageThread {\n    send(body) {\n        return __awaiter(this, void 0, void 0, function* () {\n            if (!this.initialized) {\n                console.error(`Tried to send message to thread before initialization.\\nthread: ${this.name}\\nmessage: ${body}`);\n            }\n            const message = {\n                sender: \"You\",\n                body,\n                timestamp: new Date().toString()\n            };\n            this.messages.push(message);\n            const tx = this.db.transaction(this.storeName, \"readwrite\");\n            const id = yield tx.store.put(message);\n            tx.done;\n            const receiveMessageListeners = this.receiveMessageListeners;\n            const respond = (response) => __awaiter(this, void 0, void 0, function* () {\n                this.messages.push(response);\n                const tx = this.db.transaction(this.storeName, \"readwrite\");\n                const id = yield tx.store.put(response);\n                tx.done;\n                receiveMessageListeners.forEach(callback => {\n                    callback(Object.assign(Object.assign({}, response), { id }));\n                });\n            });\n            this.sendMessageListeners.forEach(callback => {\n                callback({ message: Object.assign(Object.assign({}, message), { id }), respond });\n            });\n            tx.done;\n        });\n    }\n    addEventListener(event, callback) {\n        var _a;\n        this[_a = `${event}Listeners`] || (this[_a] = []);\n        this[`${event}Listeners`].push(callback);\n    }\n    deleteHistory() {\n        this.db.clear(this.storeName);\n    }\n    constructor(name) {\n        this.name = name;\n        this.sendMessageListeners = [];\n        this.receiveMessageListeners = [];\n        this.loadMessagesListeners = [];\n        this.messages = [];\n        const context = this;\n        this.initialized = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {\n            try {\n                // Would it be more performant for each MessageThread instance to share a static db instance? Too lazy to benchmark.\n                context.db = yield (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)('habbiton', 1, {\n                    upgrade(db) {\n                        // Create or open a specific table for the MessageThread instance\n                        if (!db.objectStoreNames.contains(context.storeName)) {\n                            db.createObjectStore(context.storeName, { keyPath: 'id', autoIncrement: true });\n                        }\n                    }\n                });\n                // Read all transactions from object store\n                const storedMessages = yield context.db.transaction(context.storeName).store.getAll();\n                this.messages = storedMessages;\n                this.loadMessagesListeners.forEach(callback => callback(storedMessages));\n                resolve(true);\n            }\n            catch (err) {\n                console.error(\"Failed to initialize thread\", err);\n                reject(false);\n            }\n        }));\n    }\n    get storeName() {\n        return `thread_${this.name}`;\n    }\n}\nMessageThread.DB_NAME = \"habbiton\";\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/state/MessageThread.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n\nconst name = \"app-header\";\nconst template = /*html*/ `\n<style>\n  app-header {\n    grid-area: header;\n    box-shadow: 0px 2px 8px 4px rgba(0,0,0,0.1);\n    display: flex;\n    align-items: center;\n    padding-left: 8px;\n    background: #333;\n    color: white;\n    font-size: 1.2em;\n    font-weight: 400;\n    text-shadow: 3px 3px rgba(0, 255, 255, 0.5);\n  }\n</style>\nHabbiton\n`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/components/app-header.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n\nconst name = \"message-input\";\nconst template = /*html*/ `<input lfhandle=\"handleEnter:keyup\" lfbind=\"message:input\" placeholder=\"Write something\"/>`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    handlers: {\n        handleEnter(event) {\n            if (event.key === \"Enter\") {\n                this.dispatchEvent(new CustomEvent(\"sendMessage\", { detail: this.state.message }));\n                setTimeout(() => {\n                    event.target.value = \"\";\n                }, 0);\n            }\n        }\n    }\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/components/message-input.ts?");

/***/ }),

/***/ "./src/scripts/ui/components/messages-list.ts":
/*!****************************************************!*\
  !*** ./src/scripts/ui/components/messages-list.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n/* harmony import */ var _state_MessageThread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/MessageThread */ \"./src/scripts/state/MessageThread.ts\");\n\n\nconst name = \"messages-list\";\nconst style = /*html*/ `\n<style>\n  messages-list {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    overflow: auto;\n    padding: 0 24px;\n  }\n  messages-list .spacer {\n    flex: 1;\n    min-height: 400px;\n  }\n  messages-list .message {\n    border: 2px solid #777;\n    display: inline-block;\n    margin: 4px;\n    margin-top: 32px;\n    border-radius: 6px;\n    padding: 4px 8px;\n    max-width: 80%;\n  }\n  messages-list .right+.right,\n  messages-list .left+.left {\n    margin-top: 2px;\n    margin-bottom: 2px;\n  }\n  messages-list .message.right {\n    align-self: flex-end;\n    border-bottom-width: 4px;\n    border-right-width: 4px;\n  }\n  messages-list .message .timestamp {\n    font-size: 0.7em;\n    opacity: 0.7;\n    float: right;\n  }\n</style>\n`;\nconst template = /*html*/ `\n<div\n  style=\"height: 100%; display: flex; justify-content: center; align-items: center\">\n  There are no messages in this thread\n</div>`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    hooks: {\n        threadName: [function (name) {\n                if (!name) {\n                    return;\n                }\n                const thread = (0,_state_MessageThread__WEBPACK_IMPORTED_MODULE_1__.MessageThreadSingleton)(name);\n                thread.addEventListener(\"loadMessages\", () => renderMessages(this, thread.messages));\n                thread.addEventListener(\"sendMessage\", ({ message, respond }) => {\n                    renderMessages(this, thread.messages);\n                    setTimeout(() => {\n                        const response = {\n                            sender: name,\n                            body: `This is a hardcoded response to \"${message.body}\"`,\n                            timestamp: new Date().toString()\n                        };\n                        respond(response);\n                    }, 4000);\n                });\n                thread.addEventListener(\"receiveMessage\", () => renderMessages(this, thread.messages));\n            }],\n    }\n});\nfunction renderMessages(wrapper, messages) {\n    wrapper.innerHTML = /*html*/ `${style}<span class=\"spacer\"></span>` + messages.map((message) => {\n        return /*html*/ `\n      <div class=\"message ${message.sender === \"You\" ? \"right\" : \"left\"}\">\n        <div class=\"message-body\">${message.body}</div>\n        <div class=\"timestamp\">${message.timestamp.toString().split(\" \")[4]}</div>\n      </div>`;\n    }).join(\"\");\n    setTimeout(() => {\n        wrapper.scrollTop = wrapper.scrollHeight + 1000000;\n    }, 10);\n}\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/components/messages-list.ts?");

/***/ }),

/***/ "./src/scripts/ui/components/thread-preview.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/ui/components/thread-preview.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n/* harmony import */ var _state_globalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/globalState */ \"./src/scripts/state/globalState.ts\");\n/* harmony import */ var _state_MessageThread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/MessageThread */ \"./src/scripts/state/MessageThread.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst name = \"thread-preview\";\nconst template = /*html*/ `\n  <style>\n    thread-preview {\n      background: white;\n      display: block;\n      padding: 4px 8px;\n      margin: 6px;\n      border: 2px solid #aaa;\n      border-bottom-width: 4px;\n      border-left-width: 4px;\n      border-radius: 6px;\n      box-sizing: border-box;\n      cursor: pointer;\n      transition: border 0.2s;\n    }\n    thread-preview.is-selected {\n      border-color: #777;\n      border-top-width: 4px;\n      border-right-width: 4px;\n      border-bottom-width: 2px;\n      border-left-width: 2px;\n    }\n    thread-preview:hover {\n      border-color: #777;\n    }\n    .message-preview {\n      color: #777;\n      font-size: 0.8em;\n    }\n    .thread-name {\n      color: #333;\n      text-transform: uppercase;\n    }\n    thread-preview .message-preview {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 300px;\n    }\n  </style>\n  <div class=\"thread-name\">{{threadName}}</div>\n  <div class=\"message-preview\">{{messagePreview}}</div>\n`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    data: {\n        thread: null,\n        messagePreview: \"loading...\"\n    },\n    hooks: {\n        mounted: [function () {\n                this.addEventListener(\"click\", () => {\n                    var _a;\n                    console.log(\"uh\", this.state.threadName);\n                    _state_globalState__WEBPACK_IMPORTED_MODULE_1__.globalState.selectedThread = this.state.threadName;\n                    (_a = document.querySelector(\"thread-preview.is-selected\")) === null || _a === void 0 ? void 0 : _a.classList.remove(\"is-selected\");\n                    this.classList.add(\"is-selected\");\n                });\n            }],\n        threadName: [function (threadName) {\n                var _a;\n                return __awaiter(this, void 0, void 0, function* () {\n                    // should get last message in thread and set preview\n                    console.log(`should get last message in ${threadName} and set preview`);\n                    if (threadName) {\n                        const thread = new _state_MessageThread__WEBPACK_IMPORTED_MODULE_2__.MessageThread(threadName);\n                        yield thread.initialized;\n                        this.state.messagePreview = `\"${(_a = thread.messages[thread.messages.length - 1]) === null || _a === void 0 ? void 0 : _a.body}\"`;\n                    }\n                });\n            }]\n    }\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/components/thread-preview.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n/* harmony import */ var _state_globalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/globalState */ \"./src/scripts/state/globalState.ts\");\n/* harmony import */ var _state_MessageThread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/MessageThread */ \"./src/scripts/state/MessageThread.ts\");\n/**\n * Renders all messages in a thread.\n * Includes UI for sending messages from the user.\n * Emits events whenever the user sends a message.\n */\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst name = \"messages-view\";\nconst template = /*html*/ `\n  <style>\n    messages-view {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      width: 100%;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: 200px 100px;\n      max-height: 100vh;\n      overflow: hidden;\n    }\n    .no-thread-selected {\n      display: none;\n    }\n    messages-list {\n      flex: 1;\n    }\n    messages-list,\n    message-input {\n      background: white;\n    }\n  </style>\n  <div class=\"select-thread-cta\"></div>\n  <messages-list threadName=\"{{selectedThread}}\" class=\"{{threadSelectedClass}}\"></messages-list>\n  <message-input lfhandle=\"handleMessage:sendMessage\" class=\"{{threadSelectedClass}}\"></message-input>\n`;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    data: {\n        threadSelectedClass: \"no-thread-selected\",\n        selectedThread: null\n    },\n    hooks: {\n        mounted: [function () {\n                (0,_state_globalState__WEBPACK_IMPORTED_MODULE_1__.bindAttribute)(this, \"selectedThread\");\n            }],\n        selectedThread: [function (thread) {\n                return __awaiter(this, void 0, void 0, function* () {\n                    this.state.threadSelectedClass = thread ? \"thread-selected\" : \"no-thread-selected\";\n                    if (!thread) {\n                        this.state.thread = null;\n                    }\n                    else {\n                        this.state.thread = (0,_state_MessageThread__WEBPACK_IMPORTED_MODULE_2__.MessageThreadSingleton)(thread);\n                    }\n                });\n            }]\n    },\n    handlers: {\n        handleMessage(event) {\n            var _a;\n            return __awaiter(this, void 0, void 0, function* () {\n                (_a = this.state.thread) === null || _a === void 0 ? void 0 : _a.send(event.detail);\n            });\n        }\n    }\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/views/messages-view.ts?");

/***/ }),

/***/ "./src/scripts/ui/views/threads-view.ts":
/*!**********************************************!*\
  !*** ./src/scripts/ui/views/threads-view.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lil_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-framework */ \"./node_modules/lil-framework/dist/index.js\");\n/* harmony import */ var _state_globalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/globalState */ \"./src/scripts/state/globalState.ts\");\n/**\n * Renders a preview of all available threads (e.g., thread name, most recent message, etc).\n * Emits an event when the user clicks on a thread.\n */\n\n\nconst name = \"threads-view\";\nconst template = /*html*/ ``;\n(0,lil_framework__WEBPACK_IMPORTED_MODULE_0__.lilComponent)({\n    name,\n    template,\n    data: {\n        threadNames: [],\n    },\n    hooks: {\n        mounted: [function () {\n                console.log(\"List of threads????\", _state_globalState__WEBPACK_IMPORTED_MODULE_1__.globalState.threadNames);\n                this.state.threadNames = _state_globalState__WEBPACK_IMPORTED_MODULE_1__.globalState.threadNames;\n            }],\n        threadNames: [function (threadNames) {\n                console.log(\"Should display a list of threads\");\n                this.innerHTML = \"\";\n                threadNames.forEach(name => {\n                    const previewEl = document.createElement(\"thread-preview\");\n                    previewEl.setAttribute(\"threadName\", name);\n                    this.appendChild(previewEl);\n                });\n            }]\n    }\n});\n\n\n//# sourceURL=webpack://habbiton/./src/scripts/ui/views/threads-view.ts?");

/***/ }),

/***/ "./node_modules/idb/build/index.js":
/*!*****************************************!*\
  !*** ./node_modules/idb/build/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteDB: () => (/* binding */ deleteDB),\n/* harmony export */   openDB: () => (/* binding */ openDB),\n/* harmony export */   unwrap: () => (/* binding */ unwrap),\n/* harmony export */   wrap: () => (/* binding */ wrap)\n/* harmony export */ });\nconst instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);\n\nlet idbProxyableTypes;\nlet cursorAdvanceMethods;\n// This is a function to prevent it throwing up in node environments.\nfunction getIdbProxyableTypes() {\n    return (idbProxyableTypes ||\n        (idbProxyableTypes = [\n            IDBDatabase,\n            IDBObjectStore,\n            IDBIndex,\n            IDBCursor,\n            IDBTransaction,\n        ]));\n}\n// This is a function to prevent it throwing up in node environments.\nfunction getCursorAdvanceMethods() {\n    return (cursorAdvanceMethods ||\n        (cursorAdvanceMethods = [\n            IDBCursor.prototype.advance,\n            IDBCursor.prototype.continue,\n            IDBCursor.prototype.continuePrimaryKey,\n        ]));\n}\nconst transactionDoneMap = new WeakMap();\nconst transformCache = new WeakMap();\nconst reverseTransformCache = new WeakMap();\nfunction promisifyRequest(request) {\n    const promise = new Promise((resolve, reject) => {\n        const unlisten = () => {\n            request.removeEventListener('success', success);\n            request.removeEventListener('error', error);\n        };\n        const success = () => {\n            resolve(wrap(request.result));\n            unlisten();\n        };\n        const error = () => {\n            reject(request.error);\n            unlisten();\n        };\n        request.addEventListener('success', success);\n        request.addEventListener('error', error);\n    });\n    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This\n    // is because we create many promises from a single IDBRequest.\n    reverseTransformCache.set(promise, request);\n    return promise;\n}\nfunction cacheDonePromiseForTransaction(tx) {\n    // Early bail if we've already created a done promise for this transaction.\n    if (transactionDoneMap.has(tx))\n        return;\n    const done = new Promise((resolve, reject) => {\n        const unlisten = () => {\n            tx.removeEventListener('complete', complete);\n            tx.removeEventListener('error', error);\n            tx.removeEventListener('abort', error);\n        };\n        const complete = () => {\n            resolve();\n            unlisten();\n        };\n        const error = () => {\n            reject(tx.error || new DOMException('AbortError', 'AbortError'));\n            unlisten();\n        };\n        tx.addEventListener('complete', complete);\n        tx.addEventListener('error', error);\n        tx.addEventListener('abort', error);\n    });\n    // Cache it for later retrieval.\n    transactionDoneMap.set(tx, done);\n}\nlet idbProxyTraps = {\n    get(target, prop, receiver) {\n        if (target instanceof IDBTransaction) {\n            // Special handling for transaction.done.\n            if (prop === 'done')\n                return transactionDoneMap.get(target);\n            // Make tx.store return the only store in the transaction, or undefined if there are many.\n            if (prop === 'store') {\n                return receiver.objectStoreNames[1]\n                    ? undefined\n                    : receiver.objectStore(receiver.objectStoreNames[0]);\n            }\n        }\n        // Else transform whatever we get back.\n        return wrap(target[prop]);\n    },\n    set(target, prop, value) {\n        target[prop] = value;\n        return true;\n    },\n    has(target, prop) {\n        if (target instanceof IDBTransaction &&\n            (prop === 'done' || prop === 'store')) {\n            return true;\n        }\n        return prop in target;\n    },\n};\nfunction replaceTraps(callback) {\n    idbProxyTraps = callback(idbProxyTraps);\n}\nfunction wrapFunction(func) {\n    // Due to expected object equality (which is enforced by the caching in `wrap`), we\n    // only create one new func per func.\n    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In\n    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the\n    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense\n    // with real promises, so each advance methods returns a new promise for the cursor object, or\n    // undefined if the end of the cursor has been reached.\n    if (getCursorAdvanceMethods().includes(func)) {\n        return function (...args) {\n            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n            // the original object.\n            func.apply(unwrap(this), args);\n            return wrap(this.request);\n        };\n    }\n    return function (...args) {\n        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use\n        // the original object.\n        return wrap(func.apply(unwrap(this), args));\n    };\n}\nfunction transformCachableValue(value) {\n    if (typeof value === 'function')\n        return wrapFunction(value);\n    // This doesn't return, it just creates a 'done' promise for the transaction,\n    // which is later returned for transaction.done (see idbObjectHandler).\n    if (value instanceof IDBTransaction)\n        cacheDonePromiseForTransaction(value);\n    if (instanceOfAny(value, getIdbProxyableTypes()))\n        return new Proxy(value, idbProxyTraps);\n    // Return the same value back if we're not going to transform it.\n    return value;\n}\nfunction wrap(value) {\n    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because\n    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.\n    if (value instanceof IDBRequest)\n        return promisifyRequest(value);\n    // If we've already transformed this value before, reuse the transformed value.\n    // This is faster, but it also provides object equality.\n    if (transformCache.has(value))\n        return transformCache.get(value);\n    const newValue = transformCachableValue(value);\n    // Not all types are transformed.\n    // These may be primitive types, so they can't be WeakMap keys.\n    if (newValue !== value) {\n        transformCache.set(value, newValue);\n        reverseTransformCache.set(newValue, value);\n    }\n    return newValue;\n}\nconst unwrap = (value) => reverseTransformCache.get(value);\n\n/**\n * Open a database.\n *\n * @param name Name of the database.\n * @param version Schema version.\n * @param callbacks Additional callbacks.\n */\nfunction openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {\n    const request = indexedDB.open(name, version);\n    const openPromise = wrap(request);\n    if (upgrade) {\n        request.addEventListener('upgradeneeded', (event) => {\n            upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);\n        });\n    }\n    if (blocked) {\n        request.addEventListener('blocked', (event) => blocked(\n        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405\n        event.oldVersion, event.newVersion, event));\n    }\n    openPromise\n        .then((db) => {\n        if (terminated)\n            db.addEventListener('close', () => terminated());\n        if (blocking) {\n            db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));\n        }\n    })\n        .catch(() => { });\n    return openPromise;\n}\n/**\n * Delete a database.\n *\n * @param name Name of the database.\n */\nfunction deleteDB(name, { blocked } = {}) {\n    const request = indexedDB.deleteDatabase(name);\n    if (blocked) {\n        request.addEventListener('blocked', (event) => blocked(\n        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405\n        event.oldVersion, event));\n    }\n    return wrap(request).then(() => undefined);\n}\n\nconst readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];\nconst writeMethods = ['put', 'add', 'delete', 'clear'];\nconst cachedMethods = new Map();\nfunction getMethod(target, prop) {\n    if (!(target instanceof IDBDatabase &&\n        !(prop in target) &&\n        typeof prop === 'string')) {\n        return;\n    }\n    if (cachedMethods.get(prop))\n        return cachedMethods.get(prop);\n    const targetFuncName = prop.replace(/FromIndex$/, '');\n    const useIndex = prop !== targetFuncName;\n    const isWrite = writeMethods.includes(targetFuncName);\n    if (\n    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.\n    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||\n        !(isWrite || readMethods.includes(targetFuncName))) {\n        return;\n    }\n    const method = async function (storeName, ...args) {\n        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(\n        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');\n        let target = tx.store;\n        if (useIndex)\n            target = target.index(args.shift());\n        // Must reject if op rejects.\n        // If it's a write operation, must reject if tx.done rejects.\n        // Must reject with op rejection first.\n        // Must resolve with op value.\n        // Must handle both promises (no unhandled rejections)\n        return (await Promise.all([\n            target[targetFuncName](...args),\n            isWrite && tx.done,\n        ]))[0];\n    };\n    cachedMethods.set(prop, method);\n    return method;\n}\nreplaceTraps((oldTraps) => ({\n    ...oldTraps,\n    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),\n    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),\n}));\n\nconst advanceMethodProps = ['continue', 'continuePrimaryKey', 'advance'];\nconst methodMap = {};\nconst advanceResults = new WeakMap();\nconst ittrProxiedCursorToOriginalProxy = new WeakMap();\nconst cursorIteratorTraps = {\n    get(target, prop) {\n        if (!advanceMethodProps.includes(prop))\n            return target[prop];\n        let cachedFunc = methodMap[prop];\n        if (!cachedFunc) {\n            cachedFunc = methodMap[prop] = function (...args) {\n                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));\n            };\n        }\n        return cachedFunc;\n    },\n};\nasync function* iterate(...args) {\n    // tslint:disable-next-line:no-this-assignment\n    let cursor = this;\n    if (!(cursor instanceof IDBCursor)) {\n        cursor = await cursor.openCursor(...args);\n    }\n    if (!cursor)\n        return;\n    cursor = cursor;\n    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);\n    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);\n    // Map this double-proxy back to the original, so other cursor methods work.\n    reverseTransformCache.set(proxiedCursor, unwrap(cursor));\n    while (cursor) {\n        yield proxiedCursor;\n        // If one of the advancing methods was not called, call continue().\n        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());\n        advanceResults.delete(proxiedCursor);\n    }\n}\nfunction isIteratorProp(target, prop) {\n    return ((prop === Symbol.asyncIterator &&\n        instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor])) ||\n        (prop === 'iterate' && instanceOfAny(target, [IDBIndex, IDBObjectStore])));\n}\nreplaceTraps((oldTraps) => ({\n    ...oldTraps,\n    get(target, prop, receiver) {\n        if (isIteratorProp(target, prop))\n            return iterate;\n        return oldTraps.get(target, prop, receiver);\n    },\n    has(target, prop) {\n        return isIteratorProp(target, prop) || oldTraps.has(target, prop);\n    },\n}));\n\n\n\n\n//# sourceURL=webpack://habbiton/./node_modules/idb/build/index.js?");

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