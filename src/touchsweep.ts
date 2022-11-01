export const enum TouchSwipeEventType {
	tap = 'tap',
	up = 'swipeup',
	down = 'swipedown',
	left = 'swipeleft',
	right = 'swiperight'
}

export default class TouchSweep {
	private element: HTMLElement;
	private eventData: Record<string, unknown>;
	private threshold: number;
	private coords: Record<'startX' | 'startY' | 'endX' | 'endY', number>;

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

	public bind(): void {
		this.element.addEventListener('touchstart', this.onStart, false);
		this.element.addEventListener('touchend', this.onEnd, false);
		this.element.addEventListener('mousedown', this.onStart, false);
		this.element.addEventListener('mouseup', this.onEnd, false);
	}

	public unbind(): void {
		this.element.removeEventListener('touchstart', this.onStart, false);
		this.element.removeEventListener('touchend', this.onEnd, false);
		this.element.removeEventListener('mousedown', this.onStart, false);
		this.element.removeEventListener('mouseup', this.onEnd, false);
	}

	private getCoords(event: MouseEvent | TouchEvent): Record<'x' | 'y', number> {
		const isMouseEvent = 'pageX' in event;
		const x = isMouseEvent ? event.pageX : event.changedTouches[0].screenX;
		const y = isMouseEvent ? event.pageY : event.changedTouches[0].screenY;

		return { x, y };
	}

	private onStart(event: MouseEvent | TouchEvent): void {
		const { x, y } = this.getCoords(event);

		this.coords.startX = x;
		this.coords.startY = y;
	}

	private onEnd(event: MouseEvent | TouchEvent): void {
		const { x, y } = this.getCoords(event);

		this.coords.endX = x;
		this.coords.endY = y;

		this.dispatch();
	}

	private getEventName(): TouchSwipeEventType | '' {
		const threshold = this.threshold;
		const { startX, startY, endX, endY } = this.coords;
		const distanceX = Math.abs(endX - startX);
		const distanceY = Math.abs(endY - startY);
		const isSwipeX = distanceX > distanceY;

		if (isSwipeX) {
			if (endX < startX && distanceX > threshold) {
				return TouchSwipeEventType.left;
			}

			if (endX > startX && distanceX > threshold) {
				return TouchSwipeEventType.right;
			}
		} else {
			if (endY < startY && distanceY > threshold) {
				return TouchSwipeEventType.up;
			}

			if (endY > startY && distanceY > threshold) {
				return TouchSwipeEventType.down;
			}
		}

		if (endY === startY && endX === startX) {
			return TouchSwipeEventType.tap;
		}

		return '';
	}

	private dispatch(): void {
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
