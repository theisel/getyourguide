/// <reference types="astro/client" />

import type {
  GetYourGuideAttributes,
  GetYourGuideActivitiesAttributes,
  GetYourGuideAvailabilityAttributes,
} from "./lib/types";

export {};

declare global {
  namespace astroHTML.JSX {
    interface IntrinsicElements {
      "gyg-activities": GetYourGuideActivitiesAttributes & IntrinsicAttributes;
      "gyg-availability": GetYourGuideAvailabilityAttributes & IntrinsicAttributes;
      "gyg-wc":
        | IntrinsicElements["gyg-activities"]
        | IntrinsicElements["gyg-availability"]
        | (GetYourGuideAttributes & IntrinsicAttributes);
    }
  }
}
