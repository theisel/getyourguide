import {
  GetYourGuide,
  GetYourGuideAvailability,
} from "./wc";

export {};

customElements.get("gyg-availability") ||
  customElements.define("gyg-availability", GetYourGuideAvailability);
customElements.get("gyg-wc") || customElements.define("gyg-wc", GetYourGuide);
