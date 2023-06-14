export class GetYourGuide extends HTMLElement {
  static SCRIPT_SRC = "https://widget.getyourguide.com/dist/pa.umd.production.min.js";

  private partnerId = "";
  private observer: MutationObserver;

  protected get widget() {
    return this.getAttribute("widget") || "";
  }

  constructor() {
    super();
    this.observer = new MutationObserver(this.onMutation.bind(this));
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this.partnerId = this.getAttribute("partner-id") || this.partnerId;
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

    this.appendChild(this.createWidget());
  }

  protected createWidget(): HTMLElement {
    let widgetInst: GetYourGuide | undefined;

    switch (this.widget) {
      case "activities":
        widgetInst = new GetYourGuideActivities();
        break;
      case "availability":
        widgetInst = new GetYourGuideAvailability();
        break;
      case "city":
        widgetInst = new GetYourGuideCity();
        break;
    }

    if (widgetInst) {
      for (let i = 0; i < this.attributes.length; i++) {
        const { name, value } = this.attributes[i];
        if (name === "widget") continue;
        widgetInst.setAttribute(name, value);
      }
      return widgetInst;
    }

    throw Error(`Unknown widget: ${this.widget}`);
  }

  protected createBaseWidget() {
    const div = document.createElement("div");

    div.setAttribute(
      "data-gyg-href",
      `https://widget.getyourguide.com/default/${this.widget}.frame`
    );
    div.setAttribute("data-gyg-widget", this.widget);
    div.setAttribute("data-gyg-partner-id", this.partnerId);
    div.setAttribute("data-gyg-locale-code", this.lang || document.documentElement.lang);

    return div;
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

    script.setAttribute("data-gyg-partner-id", this.partnerId);

    return script;
  }
}

export class GetYourGuideActivities extends GetYourGuide {
  protected get widget() {
    return "activities";
  }

  protected createWidget() {
    const widget = this.createBaseWidget();
    const type = this.getAttribute("type") || "";
    const query = this.getAttribute("query") || "";

    switch (type) {
      case "tours":
        widget.setAttribute("data-gyg-tour-ids", query);
        widget.setAttribute("data-gyg-number-of-items", query.split(",").length.toString());
        return widget;
      case "location":
        widget.setAttribute("data-gyg-location-id", query);
        break;
      default:
        widget.setAttribute("data-gyg-q", query);
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
}

export class GetYourGuideAvailability extends GetYourGuide {
  protected get widget() {
    return "availability";
  }

  protected createWidget() {
    const widget = this.createBaseWidget();
    const layout = this.getAttribute("layout") || "horizontal";
    const currency = this.getAttribute("currency") || "";
    const campaign = this.getAttribute("campaign") || "";

    const theme = ((theme) => ("system" === theme ? this.systemTheme : theme))(
      this.getAttribute("theme") || "system"
    );

    widget.setAttribute("data-gyg-theme", theme);
    widget.setAttribute("data-gyg-variant", layout);
    widget.setAttribute("data-gyg-tour-id", this.getAttribute("query") || "");

    if (currency) {
      widget.setAttribute("data-gyg-currency", currency);
    }

    if (campaign) {
      widget.setAttribute("data-gyg-cmp", campaign);
    }

    return widget;
  }

  private get systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
}

export class GetYourGuideCity extends GetYourGuide {
  protected get widget() {
    return "city";
  }

  protected createWidget() {
    const widget = this.createBaseWidget();
    widget.setAttribute("data-gyg-location-id", this.getAttribute("query") || "");

    return widget;
  }
}
