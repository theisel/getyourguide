import {
  GetYourGuide,
  GetYourGuideActivities,
} from "./wc";

export {};

customElements.get("gyg-activities") ||
  customElements.define("gyg-activities", GetYourGuideActivities);
customElements.get("gyg-wc") || customElements.define("gyg-wc", GetYourGuide);
