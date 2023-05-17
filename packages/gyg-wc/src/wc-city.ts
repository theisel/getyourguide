import { GetYourGuide } from "./wc-gyg";

export {};

customElements.define(
  `getyourguide-city`,
  class GetYourGuideCity extends GetYourGuide {
    private _cityId = "";

    static get observedAttributes() {
      return ["city-id"];
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      switch (name) {
        case "city-id":
          this._cityId = newValue;
          break;
      }
      super.attributeChangedCallback(name, oldValue, newValue);
    }
    protected render() {
      this.innerHTML = "";
      this.appendChild(this._createWidget);
    }
    private get _createWidget() {
      const widget = document.createElement("div");

      widget.setAttribute("data-gyg-href", "https://widget.getyourguide.com/default/city.frame");
      widget.setAttribute("data-gyg-widget", "city");
      widget.setAttribute("data-gyg-partner-id", this.partnerId);
      widget.setAttribute("data-gyg-locale-code", this.lang);
      widget.setAttribute("data-gyg-location-id", this._cityId);

      return widget;
    }
  }
);
