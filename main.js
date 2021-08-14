/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 460:
/***/ (() => {


// I wish I could have used ES6 extravaganza, but not everyone supports it :(
var r = document.getElementById("rbw"),
  currentHue = 0,
  hueAddition = 5,
  documentElement = document.getElementsByTagName("html")[0],
  clickEvent = "ontouchstart" in window ? "touchend" : "click",
  classMethods = ["remove", "add"],
  rainbowTiming = 1000 / 25,
  stringArray = ["Add more contrast", "Remove additional contrast", "Inverted mode", "Normal mode"];

function createControls() {
  var contrastButton = document.createElement('button');
    contrastButton.id = "contrast";
    contrastButton.classList.add('cont-inv');
    contrastButton.innerText = stringArray[0];
    contrastButton.tabIndex = 1;

  var nightModeButton = document.createElement('button');
    nightModeButton.id = "invmode";
    nightModeButton.classList.add('cont-inv');
    nightModeButton.innerText = stringArray[2];
    nightModeButton.tabIndex = 2;
  document.body.appendChild(contrastButton);
  document.body.appendChild(nightModeButton);
}

function doThatFuckingColorThing() {
  var color = "hsl(" + currentHue + ", 80%, 60%)",
    nextHue = currentHue + hueAddition;
  currentHue = nextHue > 360 ? 0 : nextHue;
  r.style.color = color;
  setTimeout(doThatFuckingColorThing, rainbowTiming);
}

function someControl(id, textArr, className) {
  /* You see? No fucking jQuery needed, check:
   * http://www.vanilla-js.com/
   * http://jsperf.com/getelementbyid-vs-jquery-id/44
   */
  var el = document.getElementsByTagName("html")[0];
  var acbox = document.getElementById(id),
    textNode = acbox.firstChild,
    toggled = false;
  acbox.addEventListener(
    clickEvent,
    function() {
      var selector = Number((toggled = !toggled));
      textNode.data = textArr[selector];
      el.classList[classMethods[selector]](className);
    },
    false
  );
}

function addContrastControl() {
  someControl(
    "contrast",
    [stringArray[0], stringArray[1]],
    "contrast"
  );
}

function addInvertedControl() {
  someControl("invmode", [stringArray[2], stringArray[3]], "inverted");
}

createControls();
doThatFuckingColorThing();
addContrastControl();
addInvertedControl();


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _js_main_fucking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(460);
/* harmony import */ var _js_main_fucking_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_main_fucking_js__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
(()=>{"use strict";var e={460:()=>{var e=document.getElementById("rbw"),t=0,n=(document.getElementsByTagName("html")[0],"ontouchstart"in window?"touchend":"click"),o=["remove","add"],r=["Add more contrast","Remove additional contrast","Inverted mode","Normal mode"];function d(e,t,r){var d=document.getElementsByTagName("html")[0],a=document.getElementById(e),c=a.firstChild,i=!1;a.addEventListener(n,(function(){var e=Number(i=!i);c.data=t[e],d.classList[o[e]](r)}),!1)}!function(){var e=document.createElement("button");e.id="contrast",e.classList.add("cont-inv"),e.innerText=r[0],e.tabIndex=1;var t=document.createElement("button");t.id="invmode",t.classList.add("cont-inv"),t.innerText=r[2],t.tabIndex=2,document.body.appendChild(e),document.body.appendChild(t)}(),function n(){var o="hsl("+t+", 80%, 60%)",r=t+5;t=r>360?0:r,e.style.color=o,setTimeout(n,40)}(),d("contrast",[r[0],r[1]],"contrast"),d("invmode",[r[2],r[3]],"inverted")}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(460)})();
