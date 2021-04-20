export default class TouchSweep {
    /**
     * Create a new TouchSweep instance
     * @constructor
     * @param {HTMLElement} element
     * @param {any} data
     * @param {number} threshold
     * @return {TouchSweep}
     */
    constructor(element?: HTMLElement, data?: any, threshold?: number);
    element: HTMLElement;
    eventData: any;
    threshold: number;
    coords: {
        startX: number;
        startY: number;
        endX: number;
        endY: number;
    };
    onStart(event: any): void;
    onEnd(event: any): void;
    bind(): void;
    unbind(): void;
    getEventName(): "" | "swipeleft" | "swiperight" | "swipeup" | "swipedown" | "tap";
    dispatch(): void;
}
