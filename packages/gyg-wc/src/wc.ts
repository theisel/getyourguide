import type { GetYourGuideAttributes } from "./types";

export class GetYourGuide extends HTMLElement {
  static SCRIPT_SRC = "https://widget.getyourguide.com/dist/pa.umd.production.min.js"
  
  private attrs = {} as Pick<GetYourGuideAttributes, "partner-id" | "query">;
  private observer: MutationObserver;
  
  constructor() {
    super();
    this.observer = new MutationObserver(this.onMutation.bind(this));
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this.attrs = {
      "partner-id": this.getAttribute("partner-id") || "",
      query: (this.getAttribute("query") || "search") as GetYourGuideAttributes["query"],
    };

    this.render();
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }

  private onMutation() {
    if (!this.isConnected) return;

    this.render();
  }

  private render() {
    if (this.hasAttribute("hidden")) {
      // Preload the script
      if (!document.head.querySelector(`link[href="${GetYourGuide.SCRIPT_SRC}"]`)) {
        document.head.appendChild(this.createPreloadLink());
      }
      return;
    }

    // Append the script
    if (!document.head.querySelector(`script[data-gyg-partner-id]`)) {
      document.head.appendChild(this.createScript());
    }

    this.innerHTML = ""; // Clear the content

    const widget = ((wgt) => {
      return "city" === this.attrs.query
        ? this.withCityWidgetAttributes(wgt)
        : this.withActivitiesWidgetAttributes(wgt);
    })(this.createWidget());

    this.appendChild(widget);
  }

  private createWidget() {
    const widget = "city" === this.attrs.query ? "city" : "activities";
    const div = document.createElement("div");

    div.setAttribute("data-gyg-href", `https://widget.getyourguide.com/default/${widget}.frame`);
    div.setAttribute("data-gyg-widget", widget);
    div.setAttribute("data-gyg-partner-id", this.attrs["partner-id"]);
    div.setAttribute("data-gyg-locale-code", this.lang || document.documentElement.lang);

    return div;
  }

  private withActivitiesWidgetAttributes(widget: HTMLElement) {
    const query = this.getAttribute("query") || "";
    const value = this.getAttribute("value") || "";

    if ("tours" === query) {
      widget.setAttribute("data-gyg-tour-ids", value);
      widget.setAttribute("data-gyg-number-of-items", value.split(",").length.toString());
      return widget;
    }

    if ("location" == query) {
      widget.setAttribute("data-gyg-location-id", value);
    } else {
      widget.setAttribute("data-gyg-q", value);
    }

    const size = this.getAttribute("size");

    if (size) {
      widget.setAttribute("data-gyg-number-of-items", size);
    }

    const exclude = this.getAttribute("exclude");

    if (exclude) {
      widget.setAttribute("data-gyg-excluded-tour-ids", exclude);
    }

    return widget;
  }

  private withCityWidgetAttributes(widget: HTMLElement) {
    widget.setAttribute("data-gyg-location-id", this.getAttribute("value") || "");
    return widget;
  }

  private createPreloadLink() {
    const link = document.createElement("link");

    link.rel = "preload";
    link.as = "script";
    link.href = GetYourGuide.SCRIPT_SRC;

    return link;
  }

  private createScript() {
    const script = document.createElement("script");

    script.async = true;
    script.src = GetYourGuide.SCRIPT_SRC;

    script.setAttribute("data-gyg-partner-id", this.attrs["partner-id"]);

    return script;
  }
}
