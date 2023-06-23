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
      "gyg-availability": GetYourGuideAvailabilityAttributes & HTMLAttributes;
      "gyg-location": GetYourGuideLocationAttributes & HTMLAttributes;
      "gyg-search": GetYourGuideSearchAttributes & HTMLAttributes;
      "gyg-tours": GetYourGuideToursAttributes & HTMLAttributes;
      "gyg-wc":
        | IntrinsicElements["gyg-availability"]
        | IntrinsicElements["gyg-location"]
        | IntrinsicElements["gyg-search"]
        | IntrinsicElements["gyg-tours"];
    }
  }
}
