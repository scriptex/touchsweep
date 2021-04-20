export default class TouchSweep {
	/**
	 * Create a new TouchSweep instance
	 * @constructor
	 * @param {HTMLElement} element
	 * @param {any} data
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

	onStart(event) {
		this.coords.startX = event.changedTouches[0].screenX;
		this.coords.startY = event.changedTouches[0].screenY;
	}

	onEnd(event) {
		this.coords.endX = event.changedTouches[0].screenX;
		this.coords.endY = event.changedTouches[0].screenY;

		this.dispatch();
	}

	bind() {
		this.element.addEventListener('touchstart', this.onStart, false);
		this.element.addEventListener('touchend', this.onEnd, false);
	}

	unbind() {
		this.element.removeEventListener('touchstart', this.onStart, false);
		this.element.removeEventListener('touchend', this.onEnd, false);
	}

	getEventName() {
		const threshold = this.threshold;
		const { startX, startY, endX, endY } = this.coords;

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
