export type TouchSwipeEventType = string;
export namespace TouchSwipeEventType {
    const tap: string;
    const up: string;
    const down: string;
    const left: string;
    const right: string;
}
export default class TouchSweep {
    /**
     * Create a new TouchSweep instance
     * @constructor
     * @param {HTMLElement} element
     * @param {Record<string, any>} data
     * @param {number} threshold
     * @return {TouchSweep}
     */
    constructor(element?: HTMLElement, data?: Record<string, any>, threshold?: number);
    element: HTMLElement;
    eventData: Record<string, any>;
    threshold: number;
    coords: {
        startX: number;
        startY: number;
        endX: number;
        endY: number;
    };
    /**
     * Set start X and Y coordinates
     * @private
     * @param {MouseEvent | TouchEvent} event
     * @return {void}
     */
    private onStart;
    /**
     * Set end X and Y coordinates
     * @private
     * @param {MouseEvent | TouchEvent} event
     * @return {void}
     */
    private onEnd;
    /**
     * Get X and Y coordinates from a mouse or touch event
     * @private
     * @param {MouseEvent | TouchEvent} event
     * @return {Record<'x' | 'y', number>}
     */
    private getCoords;
    /**
     * Add event listeners
     * @public
     * @return {void}
     */
    public bind(): void;
    /**
     * Remove event listeners
     * @public
     * @return {void}
     */
    public unbind(): void;
    /**
     * Get the event name based on the swipe direction
     * @private
     * @return {TouchSwipeEventType | ''}
     */
    private getEventName;
    /**
     * Dispatch an event
     * @private
     * @return {void}
     */
    private dispatch;
}
