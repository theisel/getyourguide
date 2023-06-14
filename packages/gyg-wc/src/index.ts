import {
  GetYourGuide,
  GetYourGuideActivities,
  GetYourGuideAvailability,
  GetYourGuideCity,
} from "./wc";

export {};

customElements.get("gyg-activities") ||
  customElements.define("gyg-activities", GetYourGuideActivities);
customElements.get("gyg-availability") ||
  customElements.define("gyg-availability", GetYourGuideAvailability);
customElements.get("gyg-city") || customElements.define("gyg-city", GetYourGuideCity);
customElements.get("gyg-wc") || customElements.define("gyg-wc", GetYourGuide);
