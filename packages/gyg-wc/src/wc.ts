export class GetYourGuide extends HTMLElement {
  private attrs = {} as Record<"widget" | "partnerId", string>;
  private observer: MutationObserver;

  constructor() {
    super();
    this.observer = new MutationObserver(this.onMutation.bind(this));
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    if (!document.head.querySelector(`script[data-gyg-partner-id]`)) {
      document.head.appendChild(this.createScript());
    }

    this.attrs = {
      widget: this.getAttribute("widget") || "",
      partnerId: this.getAttribute("partner-id") || "",
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
    if (this.hasAttribute("hidden")) return;

    this.innerHTML = ""; // Clear the content

    const widget = ((wgt) => {
      return "activities" === this.attrs.widget
        ? this.withActivitiesWidgetAttributes(wgt)
        : this.withCityWidgetAttributes(wgt);
    })(this.createWidget());

    this.appendChild(widget);
  }

  private createWidget() {
    const { widget, partnerId } = this.attrs;

    const div = document.createElement("div");

    div.setAttribute("data-gyg-href", `https://widget.getyourguide.com/default/${widget}.frame`);
    div.setAttribute("data-gyg-widget", widget);
    div.setAttribute("data-gyg-partner-id", partnerId);
    div.setAttribute("data-gyg-locale-code", this.lang || document.documentElement.lang);

    return div;
  }

  private withActivitiesWidgetAttributes(widget: HTMLElement) {
    const queryType = this.getAttribute("query-type") || "";
    const query = this.getAttribute("query") || "";

    if ("tours" === queryType) {
      widget.setAttribute("data-gyg-tour-ids", query);
      widget.setAttribute("data-gyg-number-of-items", query.split(",").length.toString());
      return widget;
    }

    if ("location" == queryType) {
      widget.setAttribute("data-gyg-location-id", query);
    } else {
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

  private withCityWidgetAttributes(widget: HTMLElement) {
    widget.setAttribute("data-gyg-location-id", this.getAttribute("city-id") || "");
    return widget;
  }

  private createScript() {
    const script = document.createElement("script");

    script.async = true;
    script.src = "https://widget.getyourguide.com/dist/pa.umd.production.min.js";

    script.setAttribute("data-gyg-partner-id", this.attrs.partnerId);

    return script;
  }
}
