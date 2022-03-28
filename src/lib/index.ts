class Updown {
  public elements: NodeListOf<Element>;
  public upColor: string;
  public downColor: string;
  public redColor: string;

  constructor(
    querySelector = ".updown",
    upColor = "green",
    downColor = "red"
  ) {
    this.upColor = upColor;
    this.downColor = downColor;
    this.getElements(querySelector);
    this.paint();
  }

  getElements(querySelector: string): void {
    this.elements = document.querySelectorAll(querySelector);
  }

  paint() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    this.elements.forEach(function (e: HTMLElement) {
      if (e.children.length === 0) {
        const val = e.innerText;
        const number = Number(val.replace(/[^0-9.-]+/g, ""));
        if (!number) return;
        if (number > 0) {
          e.style.color = that.upColor;
        } else if (number < 0) {
          e.style.color = that.downColor;
        }
      }
    });
  }
}

new Updown(".updown");
new Updown(".any-class-name-u-want");

export default Updown;
