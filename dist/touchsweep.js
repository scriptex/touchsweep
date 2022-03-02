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
  _exports["default"] = _exports.TouchSwipeEventType = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  /**
   * @enum {string}
   */
  var TouchSwipeEventType = {
    tap: 'tap',
    up: 'swipeup',
    down: 'swipedown',
    left: 'swipeleft',
    right: 'swiperight'
  };
  _exports.TouchSwipeEventType = TouchSwipeEventType;

  var TouchSweep = /*#__PURE__*/function () {
    /**
     * Create a new TouchSweep instance
     * @constructor
     * @param {HTMLElement} element
     * @param {Record<string, any>} data
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
    /**
     * Get X and Y coordinates from a mouse or touch event
     * @private
     * @param {MouseEvent | TouchEvent} event
     * @return {Record<'x' | 'y', number>}
     */


    _createClass(TouchSweep, [{
      key: "getCoords",
      value: function getCoords(event) {
        var isMouseEvent = event.type === 'mousedown' || event.type === 'mouseup';
        var x = isMouseEvent ? event.pageX : event.changedTouches[0].screenX;
        var y = isMouseEvent ? event.pageY : event.changedTouches[0].screenY;
        return {
          x: x,
          y: y
        };
      }
      /**
       * Set start X and Y coordinates
       * @private
       * @param {MouseEvent | TouchEvent} event
       * @return {void}
       */

    }, {
      key: "onStart",
      value: function onStart(event) {
        var _this$getCoords = this.getCoords(event),
            x = _this$getCoords.x,
            y = _this$getCoords.y;

        this.coords.startX = x;
        this.coords.startY = y;
      }
      /**
       * Set end X and Y coordinates
       * @private
       * @param {MouseEvent | TouchEvent} event
       * @return {void}
       */

    }, {
      key: "onEnd",
      value: function onEnd(event) {
        var _this$getCoords2 = this.getCoords(event),
            x = _this$getCoords2.x,
            y = _this$getCoords2.y;

        this.coords.endX = x;
        this.coords.endY = y;
        this.dispatch();
      }
      /**
       * Add event listeners
       * @public
       * @return {void}
       */

    }, {
      key: "bind",
      value: function bind() {
        this.element.addEventListener('touchstart', this.onStart, false);
        this.element.addEventListener('touchend', this.onEnd, false);
        this.element.addEventListener('mousedown', this.onStart, false);
        this.element.addEventListener('mouseup', this.onEnd, false);
      }
      /**
       * Remove event listeners
       * @public
       * @return {void}
       */

    }, {
      key: "unbind",
      value: function unbind() {
        this.element.removeEventListener('touchstart', this.onStart, false);
        this.element.removeEventListener('touchend', this.onEnd, false);
        this.element.removeEventListener('mousedown', this.onStart, false);
        this.element.removeEventListener('mouseup', this.onEnd, false);
      }
      /**
       * Get the event name based on the swipe direction
       * @private
       * @return {TouchSwipeEventType | ''}
       */

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
          return TouchSwipeEventType.left;
        }

        if (endX > startX && Math.abs(endX - startX) > threshold) {
          return TouchSwipeEventType.right;
        }

        if (endY < startY && Math.abs(endY - startY) > threshold) {
          return TouchSwipeEventType.up;
        }

        if (endY > startY && Math.abs(endY - startY) > threshold) {
          return TouchSwipeEventType.down;
        }

        if (endY === startY && endX === startX) {
          return TouchSwipeEventType.tap;
        }

        return '';
      }
      /**
       * Dispatch an event
       * @private
       * @return {void}
       */

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
