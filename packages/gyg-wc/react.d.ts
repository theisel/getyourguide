/// <reference types="react" />

import type {
  GetYourGuideAttributes,
  GetYourGuideActivitiesAttributes,
  GetYourGuideAvailabilityAttributes,
} from "./lib/types";

export {};

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "gyg-activities": GetYourGuideActivitiesAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "gyg-availability": GetYourGuideAvailabilityAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "gyg-wc":
        | IntrinsicElements["gyg-activities"]
        | IntrinsicElements["gyg-availability"]
        | (GetYourGuideAttributes &
            React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>);
    }
  }
}
