/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/kekenik-select.js":
/*!**********************************!*\
  !*** ./src/js/kekenik-select.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KekenikSelect)
/* harmony export */ });
/* harmony import */ var _module_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/command.js */ "./src/js/module/command.js");
/* harmony import */ var _module_setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/setup.js */ "./src/js/module/setup.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var KekenikSelect = /*#__PURE__*/function () {
  function KekenikSelect(element, option) {
    _classCallCheck(this, KekenikSelect);

    this.settings = {
      searchPlaceholder: option.searchPlaceholder || 'جستجو کنید...',
      notFound: option.notFound || 'موردی یافت نشد.',
      searchIn: option.searchIn || 'label',
      theme: option.theme || 'light',
      checkmark: option.hasOwnProperty('checkmark') ? option.checkmark : true,
      searchBox: option.hasOwnProperty('searchBox') ? option.searchBox : true
    };
    this.selectElement = element;
    this.options = _module_command_js__WEBPACK_IMPORTED_MODULE_0__.default.formattedOptionElements(this.selectElement.querySelectorAll('option'));
    this.kekLabel = document.createElement('span');
    this.kekContainer = document.createElement('div');
    this.kekItems = document.createElement('div');

    if (this.settings.theme === 'dark') {
      this.kekContainer.classList.add('kek_dark');
    } else if (this.settings.theme === 'light') {
      this.kekContainer.classList.remove('kek_dark');
    }

    (0,_module_setup_js__WEBPACK_IMPORTED_MODULE_1__.setupKekenikSelect)(this);
    this.selectElement.after(this.kekContainer);
    this.selectElement.style.display = 'none';
  }

  _createClass(KekenikSelect, [{
    key: "selectedOption",
    get: function get() {
      return this.options.find(function (option) {
        return option.selected;
      });
    }
  }, {
    key: "selectedOptionIndex",
    get: function get() {
      return this.options.indexOf(this.selectedOption);
    }
  }, {
    key: "selectValue",
    value: function selectValue(value) {
      var newSelectedOption = this.options.find(function (option) {
        return option.value === value;
      });
      var prevSelectedOption = this.selectedOption;
      prevSelectedOption.selected = false;
      prevSelectedOption.element.selected = false;
      newSelectedOption.selected = true;
      newSelectedOption.element.selected = true;
      this.kekLabel.innerText = newSelectedOption.label;
      var oldCustomElement = this.kekItems.querySelector("[data-value=\"".concat(prevSelectedOption.value, "\"]"));

      if (oldCustomElement) {
        oldCustomElement.classList.remove('selected');
        var svg = oldCustomElement.querySelector('svg');
        if (svg) svg.remove();
      }

      var newCustomElement = this.kekItems.querySelector("[data-value=\"".concat(newSelectedOption.value, "\"]"));

      if (newCustomElement) {
        newCustomElement.classList.add('selected');

        if (this.settings.checkmark) {
          newCustomElement.insertAdjacentHTML('beforeend', _module_command_js__WEBPACK_IMPORTED_MODULE_0__.default.checkmarkSvgIcon);
        }

        newCustomElement.scrollIntoView({
          block: 'nearest'
        });
      }
    }
  }]);

  return KekenikSelect;
}();



window.kekenikSelect = function (selector, options) {
  var selectorElements = document.querySelectorAll(selector);
  selectorElements.forEach(function (item) {
    new KekenikSelect(item, options);
  });
};

/***/ }),

/***/ "./src/js/module/command.js":
/*!**********************************!*\
  !*** ./src/js/module/command.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var checkmarkSvgIcon = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                            \tviewBox=\"0 0 92 92\" enable-background=\"new 0 0 92 92\" xml:space=\"preserve\">\n                            <path id=\"XMLID_712_\" d=\"M34.4,72c-1.2,0-2.3-0.4-3.2-1.3L11.3,50.8c-1.8-1.8-1.8-4.6,0-6.4c1.8-1.8,4.6-1.8,6.4,0l16.8,16.7\n                            \tl39.9-39.8c1.8-1.8,4.6-1.8,6.4,0c1.8,1.8,1.8,4.6,0,6.4l-43.1,43C36.7,71.6,35.6,72,34.4,72z\"/>\n                            </svg>";

function formattedOptionElements(optionElements) {
  return _toConsumableArray(optionElements).map(function (optionElement) {
    return {
      value: optionElement.value,
      label: optionElement.label,
      selected: optionElement.selected,
      element: optionElement
    };
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  checkmarkSvgIcon: checkmarkSvgIcon,
  formattedOptionElements: formattedOptionElements
});

/***/ }),

/***/ "./src/js/module/setup.js":
/*!********************************!*\
  !*** ./src/js/module/setup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupKekenikSelect": () => (/* binding */ setupKekenikSelect)
/* harmony export */ });
/* harmony import */ var _command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command.js */ "./src/js/module/command.js");

function setupKekenikSelect(kekenik) {
  var _this = this;

  var selectedWrapper = document.createElement('div');
  var caretIcon = document.createElement('span');
  var searchBox = document.createElement('input');
  var optionNav = document.createElement('ul');
  selectedWrapper.classList.add('kek_selected-wrapper');
  kekenik.kekContainer.tabIndex = 1;
  caretIcon.classList.add('kek_select-caret');
  searchBox.classList.add('kek_select-search');
  searchBox.placeholder = kekenik.settings.searchPlaceholder;
  optionNav.classList.add('kek_select-nav');
  kekenik.kekContainer.classList.add('kek_select-container');
  kekenik.kekContainer.tabIndex = 0;
  kekenik.kekLabel.classList.add('kek_selected-item');
  kekenik.kekLabel.innerText = kekenik.selectedOption.label;
  selectedWrapper.append(kekenik.kekLabel);
  selectedWrapper.append(caretIcon);
  kekenik.kekContainer.append(selectedWrapper);
  kekenik.kekItems.classList.add('kek_select-items');
  if (kekenik.settings.searchBox) kekenik.kekItems.append(searchBox);
  kekenik.options.forEach(renderCustomOptionElements.bind(this, kekenik, optionNav));
  kekenik.kekItems.append(optionNav);
  kekenik.kekContainer.append(kekenik.kekItems);
  selectedWrapper.addEventListener('click', function () {
    kekenik.kekItems.classList.toggle('show');
    selectedWrapper.classList.add('focus');
    kekenik.kekItems.scrollTo(0, 0);
  });
  kekenik.kekContainer.addEventListener('keyup', function (e) {
    console.log(e.code);

    switch (e.code) {
      case 'Space':
        kekenik.kekItems.classList.toggle('show');
        kekenik.kekItems.scrollTo(0, 0);
        break;

      case 'Escape':
        kekenik.kekItems.classList.remove('show');
        break;

      case "ArrowUp":
        var prevOption = kekenik.options[kekenik.selectedOptionIndex - 1];

        if (prevOption) {
          kekenik.selectValue(prevOption.value);
        }

        break;

      case "ArrowDown":
        var nextOption = kekenik.options[kekenik.selectedOptionIndex + 1];

        if (nextOption) {
          kekenik.selectValue(nextOption.value);
        }

        break;
    }
  });
  document.addEventListener('click', function (e) {
    if (!kekenik.kekContainer.contains(e.target)) {
      kekenik.kekItems.classList.remove('show');
      selectedWrapper.classList.remove('focus');
    }
  });
  searchBox.addEventListener('keyup', function (e) {
    var newOptions = [];

    if (kekenik.settings.searchIn === 'value') {
      newOptions = kekenik.options.filter(function (option) {
        return option.value.toLowerCase().includes(searchBox.value.toLowerCase());
      });
    } else {
      newOptions = kekenik.options.filter(function (option) {
        return option.label.toLowerCase().includes(searchBox.value.toLowerCase());
      });
    }

    optionNav.innerHTML = '';

    if (newOptions.length <= 0) {
      var nullElement = document.createElement('span');
      nullElement.classList.add('kek_select-null');
      nullElement.innerText = kekenik.settings.notFound;
      optionNav.append(nullElement);
    } else {
      newOptions.forEach(renderCustomOptionElements.bind(_this, kekenik, optionNav));
    }
  });
}

function renderCustomOptionElements(kekenik, optionNav, option) {
  var optionElement = document.createElement('li');
  optionElement.classList.add('kek_select-item');
  optionElement.classList.toggle('selected', option.selected);
  optionElement.innerText = option.label;
  optionElement.dataset.value = option.value;

  if (option.selected) {
    if (kekenik.settings.checkmark) {
      optionElement.insertAdjacentHTML('beforeend', _command_js__WEBPACK_IMPORTED_MODULE_0__.default.checkmarkSvgIcon);
    }
  }

  optionElement.addEventListener('click', function () {
    kekenik.selectValue(option.value);
    kekenik.kekItems.classList.remove('show');
  });
  optionNav.append(optionElement);
}

/***/ }),

/***/ "./src/sass/kekenik-select.scss":
/*!**************************************!*\
  !*** ./src/sass/kekenik-select.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/kekenik-select": 0,
/******/ 			"css/kekenik-select": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkkekenik_select"] = self["webpackChunkkekenik_select"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/kekenik-select"], () => (__webpack_require__("./src/js/kekenik-select.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/kekenik-select"], () => (__webpack_require__("./src/sass/kekenik-select.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;