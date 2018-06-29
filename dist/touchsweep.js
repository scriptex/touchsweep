(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TouchSweep"] = factory();
	else
		root["TouchSweep"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TouchSweep =
/*#__PURE__*/
function () {
  function TouchSweep() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;

    _classCallCheck(this, TouchSweep);

    this.element = element;
    this.eventData = data;
    this.threshold = threshold;
    this.coords = {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    };
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.bind();
    return this;
  }

  _createClass(TouchSweep, [{
    key: "onStart",
    value: function onStart(event) {
      this.coords.startX = event.changedTouches[0].screenX;
      this.coords.startY = event.changedTouches[0].screenY;
    }
  }, {
    key: "onEnd",
    value: function onEnd(event) {
      this.coords.endX = event.changedTouches[0].screenX;
      this.coords.endY = event.changedTouches[0].screenY;
      this.dispatch();
    }
  }, {
    key: "bind",
    value: function bind() {
      this.element.addEventListener('touchstart', this.onStart, false);
      this.element.addEventListener('touchend', this.onEnd, false);
    }
  }, {
    key: "unbind",
    value: function unbind() {
      this.element.removeEventListener('touchstart', this.onStart, false);
      this.element.removeEventListener('touchend', this.onEnd, false);
    }
  }, {
    key: "getEventName",
    value: function getEventName() {
      var threshold = this.threshold;
      var _this$coords = this.coords,
          startX = _this$coords.startX,
          startY = _this$coords.startY,
          endX = _this$coords.endX,
          endY = _this$coords.endY;

      if (endX < startX && Math.abs(endY - startY) < threshold) {
        return 'swipeleft';
      }

      if (endX > startX && Math.abs(endX - startX) > threshold) {
        return 'swiperight';
      }

      if (endY < startY && Math.abs(endX - startX) < threshold) {
        return 'swipeup';
      }

      if (endY > startY && Math.abs(endY - startY) > threshold) {
        return 'swipedown';
      }

      if (endY === startY && endX === startX) {
        return 'tap';
      }

      return '';
    }
  }, {
    key: "dispatch",
    value: function dispatch() {
      var eventName = this.getEventName();

      if (!eventName) {
        return;
      } // TODO: Check browser support


      var event = new CustomEvent(eventName, {
        detail: this.eventData
      });
      this.element.dispatchEvent(event);
    }
  }]);

  return TouchSweep;
}();

exports.default = TouchSweep;

/***/ })
/******/ ])["default"];
});