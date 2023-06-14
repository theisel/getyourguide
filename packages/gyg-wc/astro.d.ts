/// <reference types="astro/client" />

import type {
  GetYourGuideAttributes,
  GetYourGuideActivitiesAttributes,
} from "./lib/types";

export {};

declare global {
  namespace astroHTML.JSX {
    interface IntrinsicElements {
      "gyg-activities": GetYourGuideActivitiesAttributes & IntrinsicAttributes;
      "gyg-wc":
        | IntrinsicElements["gyg-activities"]
        | (GetYourGuideAttributes & IntrinsicAttributes);
    }
  }
}
