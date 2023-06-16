/// <reference types="react" />

import type {
  GetYourGuideAvailabilityAttributes,
  GetYourGuideLocationAttributes,
  GetYourGuideSearchAttributes,
  GetYourGuideToursAttributes,
} from "./lib/types";

export {};

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "gyg-availability": GetYourGuideAvailabilityAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "gyg-location": GetYourGuideLocationAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "gyg-search": GetYourGuideSearchAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "gyg-tours": GetYourGuideToursAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "gyg-wc":
        | IntrinsicElements["gyg-availability"]
        | IntrinsicElements["gyg-location"]
        | IntrinsicElements["gyg-search"]
        | IntrinsicElements["gyg-tours"];
    }
  }
}
