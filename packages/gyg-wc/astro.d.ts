/// <reference types="astro/client" />

import type {
  GetYourGuideAttributes,
  GetYourGuideActivitiesAttributes,
  GetYourGuideAvailabilityAttributes,
  GetYourGuideCityAttributes,
} from "./lib/types";

export {};

declare global {
  namespace astroHTML.JSX {
    interface IntrinsicElements {
      "gyg-activities": GetYourGuideActivitiesAttributes & IntrinsicAttributes;
      "gyg-availability": GetYourGuideAvailabilityAttributes & IntrinsicAttributes;
      "gyg-city": GetYourGuideCityAttributes & IntrinsicAttributes;
      "gyg-wc":
        | IntrinsicElements["gyg-activities"]
        | IntrinsicElements["gyg-availability"]
        | IntrinsicElements["gyg-city"]
        | (GetYourGuideAttributes & IntrinsicAttributes);
    }
  }
}
