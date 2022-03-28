/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Updown = /*#__PURE__*/function () {
  function Updown() {
    var querySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".updown";
    var upColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "green";
    var downColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "red";

    _classCallCheck(this, Updown);

    this.upColor = upColor;
    this.downColor = downColor;
    this.getElements(querySelector);
    this.paint();
  }

  _createClass(Updown, [{
    key: "getElements",
    value: function getElements(querySelector) {
      this.elements = document.querySelectorAll(querySelector);
    }
  }, {
    key: "paint",
    value: function paint() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var that = this;
      this.elements.forEach(function (e) {
        if (e.children.length === 0) {
          var val = e.innerText;
          var number = Number(val.replace(/[^0-9.-]+/g, ""));
          if (!number) return;

          if (number > 0) {
            e.style.color = that.upColor;
          } else if (number < 0) {
            e.style.color = that.downColor;
          }
        }
      });
    }
  }]);

  return Updown;
}();

new Updown(".updown");
new Updown(".any-class-name-u-want");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Updown);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/demo/index.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./src/lib/index.ts");

document.querySelector("body").innerHTML = "\n    <h1>\n        DEMO OF UPDOWN.JS\n    </h1>\n\n    <ul class=\"updown\">\n        <li class=\"updown\">123</li>\n        <li class=\"updown\">-123</li>\n        <li class=\"updown\">-5</li>\n        <li class=\"updown\">0</li>\n        <li class=\"updown\">0.1234568</li>\n        <li class=\"updown\">1,000</li>\n        <li class=\"any-class-name-u-want\">1010101</li>\n    </ul> \n";
var updown_1 = new _lib__WEBPACK_IMPORTED_MODULE_0__["default"]('.updown');
var updown_2 = new _lib__WEBPACK_IMPORTED_MODULE_0__["default"]('.any-class-name-u-want');
console.log("myLibraryInstance", updown_1, updown_2);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map