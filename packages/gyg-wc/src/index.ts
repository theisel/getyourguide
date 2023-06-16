import {
  GetYourGuide,
  GetYourGuideAvailability,
  GetYourGuideLocation,
} from "./wc";

export {};

customElements.get("gyg-availability") ||
  customElements.define("gyg-availability", GetYourGuideAvailability);
customElements.get("gyg-location") || customElements.define("gyg-location", GetYourGuideLocation);
customElements.get("gyg-wc") || customElements.define("gyg-wc", GetYourGuide);
