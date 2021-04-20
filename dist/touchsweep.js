(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.touchsweep = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var TouchSweep = /*#__PURE__*/function () {
    /**
     * Create a new TouchSweep instance
     * @constructor
     * @param {HTMLElement} element
     * @param {any} data
     * @param {number} threshold
     * @return {TouchSweep}
     */
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

        if (endX < startX && Math.abs(endX - startX) > threshold) {
          return 'swipeleft';
        }

        if (endX > startX && Math.abs(endX - startX) > threshold) {
          return 'swiperight';
        }

        if (endY < startY && Math.abs(endY - startY) > threshold) {
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
        }

        var event = new CustomEvent(eventName, {
          detail: this.eventData
        });
        this.element.dispatchEvent(event);
      }
    }]);

    return TouchSweep;
  }();

  _exports["default"] = TouchSweep;
});
