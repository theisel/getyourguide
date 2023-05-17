import { GetYourGuide } from "./wc-gyg";

export {};

customElements.define(
  `getyourguide-activity`,
  class GetYourGuideActivity extends GetYourGuide {
    private DEFAULT_SIZE = "3";

    private _queryType = "search";
    private _query = "";
    private _exclude = "";
    private _size = this.DEFAULT_SIZE;

    static get observedAttributes() {
      return ["query-type", "query", "exclude", "size"];
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      switch (name) {
        case "query-type":
          this._queryType = newValue;
          break;
        case "query":
        case "exclude":
        case "size":
          this[`_${name}`] = newValue;
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

      widget.setAttribute(
        "data-gyg-href",
        "https://widget.getyourguide.com/default/activities.frame"
      );
      widget.setAttribute("data-gyg-widget", "activities");
      widget.setAttribute("data-gyg-partner-id", this.partnerId);
      widget.setAttribute("data-gyg-locale-code", this.lang);
      widget.setAttribute("data-gyg-number-of-items", this._size || this.DEFAULT_SIZE);

      if (this._queryType === "tours") {
        widget.setAttribute("data-gyg-tour-ids", this._query);
        return widget;
      }

      widget.setAttribute("data-gyg-excluded-tour-ids", this._exclude);

      if (this._queryType === "location") {
        widget.setAttribute("data-gyg-location-id", this._query);
      } else {
        widget.setAttribute("data-gyg-q", this._query);
      }

      return widget;
    }
  }
);
