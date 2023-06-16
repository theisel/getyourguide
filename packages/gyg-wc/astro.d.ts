/// <reference types="astro/client" />

import type {
  GetYourGuideAvailabilityAttributes,
  GetYourGuideLocationAttributes,
  GetYourGuideSearchAttributes,
  GetYourGuideToursAttributes,
} from "./lib/types";

export {};

declare global {
  namespace astroHTML.JSX {
    interface IntrinsicElements {
      "gyg-availability": GetYourGuideAvailabilityAttributes & IntrinsicAttributes;
      "gyg-location": GetYourGuideLocationAttributes & IntrinsicAttributes;
      "gyg-search": GetYourGuideSearchAttributes & IntrinsicAttributes;
      "gyg-tours": GetYourGuideToursAttributes & IntrinsicAttributes;
      "gyg-wc":
        | IntrinsicElements["gyg-availability"]
        | IntrinsicElements["gyg-location"]
        | IntrinsicElements["gyg-search"]
        | IntrinsicElements["gyg-tours"];
    }
  }
}
