/**
 * @enum {string}
 */
export const TouchSwipeEventType = {
	tap: 'tap',
	up: 'swipeup',
	down: 'swipedown',
	left: 'swipeleft',
	right: 'swiperight'
};

export default class TouchSweep {
	/**
	 * Create a new TouchSweep instance
	 * @constructor
	 * @param {HTMLElement} element
	 * @param {Record<string, any>} data
	 * @param {number} threshold
	 * @return {TouchSweep}
	 */
	constructor(element = document.body, data = {}, threshold = 40) {
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
	getCoords(event) {
		const isMouseEvent = event.type === 'mousedown' || event.type === 'mouseup';
		const x = isMouseEvent ? event.pageX : event.changedTouches[0].screenX;
		const y = isMouseEvent ? event.pageY : event.changedTouches[0].screenY;

		return { x, y };
	}

	/**
	 * Set start X and Y coordinates
	 * @private
	 * @param {MouseEvent | TouchEvent} event
	 * @return {void}
	 */
	onStart(event) {
		const { x, y } = this.getCoords(event);

		this.coords.startX = x;
		this.coords.startY = y;
	}

	/**
	 * Set end X and Y coordinates
	 * @private
	 * @param {MouseEvent | TouchEvent} event
	 * @return {void}
	 */
	onEnd(event) {
		const { x, y } = this.getCoords(event);

		this.coords.endX = x;
		this.coords.endY = y;

		this.dispatch();
	}

	/**
	 * Add event listeners
	 * @public
	 * @return {void}
	 */
	bind() {
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
	unbind() {
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
	getEventName() {
		const threshold = this.threshold;
		const { startX, startY, endX, endY } = this.coords;

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
	dispatch() {
		const eventName = this.getEventName();

		if (!eventName) {
			return;
		}

		const event = new CustomEvent(eventName, {
			detail: this.eventData
		});

		this.element.dispatchEvent(event);
	}
}
