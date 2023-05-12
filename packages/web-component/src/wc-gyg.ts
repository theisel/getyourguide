export class GetYourGuide extends HTMLElement {
  protected partnerId = "";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (this.isConnected) {
      this.render();
    }
  }

  connectedCallback() {
    this.partnerId = this.getAttribute("partner-id") ?? "";
    this.lang ||= document.documentElement.lang || "";

    if (!document.head.querySelector(`script[data-gyg-partner-id]`)) {
      document.head.appendChild(this._createScript());
    }

    this.render();
  }
  private _createScript() {
    const script = document.createElement("script");

    script.async = true;
    script.defer = true;
    script.src = "https://widget.getyourguide.com/dist/pa.umd.production.min.js";

    script.setAttribute("data-gyg-partner-id", this.partnerId);

    return script;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected render() {}
}
