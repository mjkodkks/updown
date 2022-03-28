declare class Updown {
    elements: NodeListOf<Element>;
    upColor: string;
    downColor: string;
    redColor: string;
    constructor(querySelector?: string, upColor?: string, downColor?: string);
    getElements(querySelector: string): void;
    paint(): void;
}
export default Updown;
