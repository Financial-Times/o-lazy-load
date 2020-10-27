export default LazyLoad;
declare class LazyLoad {
    /**
     * Get the data attributes from the ${name.titleCase}Element. If the message is being set up
     * declaratively, this method is used to extract the data attributes from the DOM.
     * @param {HTMLElement} rootEl - The component element in the DOM
     */
    static getDataAttributes(rootEl: HTMLElement): {};
    /**
     * Initialise component.
     * @param {(HTMLElement|String)} rootElement - The root element to intialise the component in, or a CSS selector for the root element
     * @param {Object} [options={}] - An options object for configuring the component
     */
    static init(rootEl: any, opts: any): any;
    /**
     * Class constructor.
     * @param {HTMLElement} [rootEl] - The component element in the DOM
     * @param {Object} [options={}] - An options object for configuring the component
     */
    constructor(rootEl?: HTMLElement, opts: any);
    rootEl: HTMLElement;
    options: any;
    observer: IntersectionObserver;
    observe(): void;
}
