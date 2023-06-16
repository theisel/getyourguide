import {
  GetYourGuide,
  GetYourGuideAvailability,
  GetYourGuideLocation,
  GetYourGuideSearch,
  GetYourGuideTours,
} from "./wc";

export {};

customElements.get("gyg-availability") ||
  customElements.define("gyg-availability", GetYourGuideAvailability);
customElements.get("gyg-location") || customElements.define("gyg-location", GetYourGuideLocation);
customElements.get("gyg-search") || customElements.define("gyg-search", GetYourGuideSearch);
customElements.get("gyg-tours") || customElements.define("gyg-tours", GetYourGuideTours);
customElements.get("gyg-wc") || customElements.define("gyg-wc", GetYourGuide);
