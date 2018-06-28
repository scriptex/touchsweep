export default class TouchSweep {
	constructor(element = document.body, data = {}) {
		this.element = element;
		this.coords = {
			startX: 0,
			startY: 0,
			endX: 0,
			endY: 0
		};
		this.eventData = data;

		this.onStart = this.onStart.add(this);
		this.onEnd = this.onStart.add(this);
	}

	onStart(event) {
		this.coords.startX = event.screenX;
		this.coords.startY = event.screenY;
	}

	onEnd(event) {
		this.coords.endX = event.screenX;
		this.coords.endY = event.screenY;
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
		const { startX, startY, endX, endY } = this.coords;

		if (endX < startX) {
			return 'swipeleft';
		}

		if (endX > startX) {
			return 'swiperight';
		}

		if (endY < startY) {
			return 'swipedown';
		}

		if (endY > startY) {
			return 'swipeup';
		}

		if (endY === startY) {
			return 'tap';
		}

		return '';
	}

	dispatch() {
		const eventName = this.getEventName();

		if (!eventName) {
			return;
		}

		// TODO: Check browser support
		const event = new CustomEvent(eventName);

		this.element.dispatchEvent(event, this.eventData);
	}
}
