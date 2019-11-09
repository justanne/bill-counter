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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/app.scss":
/*!**************************!*\
  !*** ./src/css/app.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/css/print.scss":
/*!****************************!*\
  !*** ./src/css/print.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Vue.config.devtools      = false
// Vue.config.productionTip = false
// Vue.config.silent        = true
// Vue.config.debug         = false
// console.log = function () { }
new Vue({
  el: '#app',
  data: {
    st1000: 0,
    st500: 0,
    st200: 0,
    st100: 0,
    st50: 0,
    st20: 0,
    st10: 0,
    st5: 0,
    st1: 0,
    st025: 0,
    st010: 0,
    st005: 0,
    total: 0,
    v1000: null,
    v500: null,
    v200: null,
    v100: null,
    v50: null,
    v20: null,
    v10: null,
    v5: null,
    v1: null,
    v025: null,
    v010: null,
    v005: null,
    billname: '',
    billname2: ''
  },
  mounted: function mounted() {},
  methods: {
    addBillName: function addBillName() {
      this.billname2 = this.billname;
    },
    updateSubTotal: function updateSubTotal(d) {
      switch (d) {
        case 1000:
          this.st1000 = d * this.v1000;
          break;

        case 500:
          this.st500 = d * this.v500;
          break;

        case 200:
          this.st200 = d * this.v200;
          break;

        case 100:
          this.st100 = d * this.v100;
          break;

        case 50:
          this.st50 = d * this.v50;
          break;

        case 20:
          this.st20 = d * this.v20;
          break;

        case 10:
          this.st10 = d * this.v10;
          break;

        case 5:
          this.st5 = d * this.v5;
          break;

        case 1:
          this.st1 = d * this.v1;
          break;

        case '025':
          this.st025 = parseInt(d) * this.v025 / 100;
          break;

        case '010':
          this.st010 = parseInt(d) * this.v010 / 100;
          break;

        case '005':
          this.st005 = parseInt(d) * this.v005 / 100;
          break;
      }

      this.updateTotal();
    },
    updateTotal: function updateTotal() {
      this.total = this.st1000 + this.st500 + this.st200 + this.st100 + this.st50 + this.st20 + this.st10 + this.st5 + this.st1 + this.st025 + this.st010 + this.st005;
      this.total = this.total.toLocaleString('en', {
        maximumSignificantDigits: 12
      });
      console.log(this.total);
    },
    resetValues: function resetValues() {
      console.log('values are cleared');
      this.v1000 = this.v500 = this.v200 = this.v100 = this.v50 = this.v20 = this.v10 = this.v5 = this.v1 = this.v025 = this.v010 = this.v005 = null;
      this.st1000 = this.st500 = this.st200 = this.st100 = this.st50 = this.st20 = this.st10 = this.st5 = this.st1 = this.st025 = this.st010 = this.st005 = 0;
      this.total = 0;
      this.billname2 = this.billname = '';
    },
    printCounts: function printCounts() {
      return window.print();
    }
  }
});

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./src/js/app.js ./src/css/app.scss ./src/css/print.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/anne/Sites/bill-counter/src/js/app.js */"./src/js/app.js");
__webpack_require__(/*! /Users/anne/Sites/bill-counter/src/css/app.scss */"./src/css/app.scss");
module.exports = __webpack_require__(/*! /Users/anne/Sites/bill-counter/src/css/print.scss */"./src/css/print.scss");


/***/ })

/******/ });