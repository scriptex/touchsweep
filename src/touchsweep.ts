export const enum TouchSwipeEventType {
	up = 'swipeup',
	tap = 'tap',
	down = 'swipedown',
	move = 'swipemove',
	left = 'swipeleft',
	right = 'swiperight'
}

export type TouchSwipeCoordinateType = 'startX' | 'startY' | 'moveX' | 'moveY' | 'endX' | 'endY';

export type TouchSwipeCoordinates = Record<'x' | 'y', number>;

const defaultCoordinates = {
	endX: 0,
	endY: 0,
	moveX: 0,
	moveY: 0,
	startX: 0,
	startY: 0
};

export default class TouchSweep {
	public eventData: Record<string, unknown>;

	private element: HTMLElement;
	private threshold: number;

	private coords: Record<TouchSwipeCoordinateType, number>;
	private isMoving: boolean;
	private moveCoords: TouchSwipeCoordinates;

	constructor(element = document.body, data = {}, threshold = 40) {
		this.element = element;
		this.eventData = data;
		this.threshold = threshold;

		this.coords = defaultCoordinates;
		this.isMoving = false;
		this.moveCoords = { x: 0, y: 0 };

		this.onStart = this.onStart.bind(this);
		this.onMove = this.onMove.bind(this);
		this.onEnd = this.onEnd.bind(this);

		this.bind();

		return this; //NOSONAR
	}

	public bind(): void {
		const { element } = this;

		element.addEventListener('touchstart', this.onStart, { passive: true });
		element.addEventListener('touchmove', this.onMove, { passive: true });
		element.addEventListener('touchend', this.onEnd, { passive: true });
		element.addEventListener('mousedown', this.onStart, { passive: true });
		element.addEventListener('mousemove', this.onMove, { passive: true });
		element.addEventListener('mouseup', this.onEnd, { passive: true });
	}

	public unbind(): void {
		const { element } = this;

		// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener#matching_event_listeners_for_removal
		element.removeEventListener('touchstart', this.onStart, false);
		element.removeEventListener('touchmove', this.onMove, false);
		element.removeEventListener('touchend', this.onEnd, false);
		element.removeEventListener('mousedown', this.onStart, false);
		element.removeEventListener('mousemove', this.onMove, false);
		element.removeEventListener('mouseup', this.onEnd, false);
	}

	private getCoords(event: MouseEvent | TouchEvent): TouchSwipeCoordinates {
		const result = this.moveCoords;
		const isMouseEvent = 'pageX' in event;

		result.x = isMouseEvent ? event.pageX : event.changedTouches[0].screenX;
		result.y = isMouseEvent ? event.pageY : event.changedTouches[0].screenY;

		return result;
	}

	private resetCoords(): void {
		this.coords = defaultCoordinates;
	}

	// prettier-ignore
	private getEndEventName(): TouchSwipeEventType | '' { //NOSONAR
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

	private dispatchEvent(type: TouchSwipeEventType): void {
		const event = new CustomEvent(type, {
			detail: {
				...this.eventData,
				coords: this.coords
			}
		});

		this.element.dispatchEvent(event);
	}

	private dispatchEnd(): void {
		const eventName = this.getEndEventName();

		if (!eventName) {
			return;
		}

		this.dispatchEvent(eventName);
	}

	private onStart(event: MouseEvent | TouchEvent): void {
		const { x, y } = this.getCoords(event);

		this.isMoving = true;

		this.coords.startX = x;
		this.coords.startY = y;
	}

	private onMove(event: MouseEvent | TouchEvent): void {
		if (!this.isMoving) {
			return;
		}

		const { x, y } = this.getCoords(event);

		this.coords.moveX = x;
		this.coords.moveY = y;

		this.dispatchEvent(TouchSwipeEventType.move);
	}

	private onEnd(event: MouseEvent | TouchEvent): void {
		const { x, y } = this.getCoords(event);

		this.isMoving = false;

		this.coords.endX = x;
		this.coords.endY = y;

		this.dispatchEnd();
		this.resetCoords();
	}
}
