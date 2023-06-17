import { parseUrl } from "./utils";

export class GetYourGuide extends HTMLElement {
  static SCRIPT_SRC = "https://widget.getyourguide.com/dist/pa.umd.production.min.js";

  private partnerId = "";
  private observer: MutationObserver;

  protected get widgetType(): string {
    return this.getAttribute("widget") || "";
  }

  private get widget(): GetYourGuide {
    let widgetInst: GetYourGuide | undefined;

    if (this.hasAttribute("query")) {
      widgetInst = new GetYourGuideSearch();
    } else if (this.hasAttribute("url")) {
      const tourId = parseUrl(this.getAttribute("url") || "")?.tourId;
      widgetInst = tourId ? new GetYourGuideAvailability() : new GetYourGuideLocation();
    } else if (this.hasAttribute("urls")) {
      widgetInst = new GetYourGuideTours();
    } else {
      throw Error(`
        GetYourGuide widget is missing one of the following attributes: 
        - query (search)
        - url (availability|location)
        - urls (tours)
      `);
    }

    for (let i = 0; i < this.attributes.length; i++) {
      const { name, value } = this.attributes[i];
      widgetInst.setAttribute(name, value);
    }

    widgetInst.partnerId = this.partnerId; // Set the partnerId

    return widgetInst;
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

  protected render() {
    if (this.hasAttribute("hidden")) {
      // Preload the script
      if (!document.head.querySelector(`link[href="${GetYourGuide.SCRIPT_SRC}"]`)) {
        document.head.appendChild(this.providePreloadLinkElement());
      }
      return;
    }

    // Append the script
    if (!document.head.querySelector(`script[data-gyg-partner-id]`)) {
      document.head.appendChild(this.provideScriptElement());
    }

    this.innerHTML = ""; // Clear the content

    try {
      "GYG-WC" === this.tagName
        ? this.appendChild(this.widget.provideWidgetElement())
        : this.appendChild(this.provideWidgetElement());
    } catch (err) {
      console.error(err);
    }
  }

  protected provideWidgetElement() {
    const div = document.createElement("div");

    div.setAttribute(
      "data-gyg-href",
      `https://widget.getyourguide.com/default/${this.widgetType}.frame`
    );
    div.setAttribute("data-gyg-widget", this.widgetType);
    div.setAttribute("data-gyg-partner-id", this.partnerId);
    div.setAttribute("data-gyg-locale-code", this.lang || document.documentElement.lang);

    return div;
  }

  private providePreloadLinkElement() {
    const link = document.createElement("link");

    link.rel = "preload";
    link.as = "script";
    link.href = GetYourGuide.SCRIPT_SRC;

    return link;
  }

  private provideScriptElement() {
    const script = document.createElement("script");

    script.async = true;
    script.src = GetYourGuide.SCRIPT_SRC;

    script.setAttribute("data-gyg-partner-id", this.partnerId);

    return script;
  }

  protected parseAttribute<T>(attr: string): T | string | null {
    const value = ((val) => val && val.trim())(this.getAttribute(attr));

    if (!value) return null;

    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  }
}

export class GetYourGuideAvailability extends GetYourGuide {
  protected get widgetType() {
    return "availability";
  }

  private get systemTheme() {
    return globalThis.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  protected provideWidgetElement() {
    const widget = super.provideWidgetElement();

    const url = parseUrl(this.getAttribute("url") || "");
    const layout = this.getAttribute("layout") || "horizontal";
    const currency = this.getAttribute("currency");
    const campaign = this.getAttribute("campaign");

    const theme = ((theme) => ("system" === theme ? this.systemTheme : theme))(
      this.getAttribute("theme") || "system"
    );

    widget.setAttribute("data-gyg-tour-id", url?.tourId || "");
    theme && widget.setAttribute("data-gyg-theme", theme);
    layout && widget.setAttribute("data-gyg-variant", layout);
    currency && widget.setAttribute("data-gyg-currency", currency);
    campaign && widget.setAttribute("data-gyg-cmp", campaign);

    return widget;
  }
}

export class GetYourGuideLocation extends GetYourGuide {
  protected get widgetType() {
    return this.hasAttribute("size") ? "activities" : "city";
  }

  protected provideWidgetElement() {
    const widget = super.provideWidgetElement();
    const url = parseUrl(this.getAttribute("url") || "");

    const locationId = url?.locationId;
    const exclude = this.parseAttribute<string | string[]>("exclude");

    "activities" === this.widgetType &&
      widget.setAttribute("data-gyg-number-of-items", this.getAttribute("size") || "");

    locationId && widget.setAttribute("data-gyg-location-id", locationId);

    exclude &&
      widget.setAttribute(
        "data-gyg-excluded-tour-ids",
        Array.of(exclude)
          .map((it) => parseUrl(it as string)?.tourId)
          .filter((it) => it)
          .toString()
      );

    return widget;
  }
}

export class GetYourGuideSearch extends GetYourGuide {
  protected get widgetType() {
    return "activities";
  }

  protected provideWidgetElement() {
    const widget = super.provideWidgetElement();

    const query = this.getAttribute("query");
    const size = this.getAttribute("size");
    const exclude = this.parseAttribute<string | string[]>("exclude");

    query && widget.setAttribute("data-gyg-q", query);
    size && widget.setAttribute("data-gyg-number-of-items", size);

    exclude &&
      widget.setAttribute(
        "data-gyg-excluded-tour-ids",
        Array.of(exclude)
          .map((it) => parseUrl(it as string)?.tourId)
          .filter((it) => it)
          .toString()
      );

    return widget;
  }
}

export class GetYourGuideTours extends GetYourGuide {
  protected get widgetType() {
    return "activities";
  }

  protected provideWidgetElement() {
    const urls = ((val) => (Array.isArray(val) ? val : val.split(",")))(
      this.parseAttribute<string | string[]>("urls") || ""
    ) satisfies string[];

    const tourIds = urls.map((it) => parseUrl(it)?.tourId).filter((it) => it);

    const widget = super.provideWidgetElement();
    widget.setAttribute("data-gyg-tour-ids", tourIds.toString());
    widget.setAttribute("data-gyg-number-of-items", tourIds.length.toString());

    return widget;
  }
}
