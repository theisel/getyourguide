/// <reference types="react" />

import type {
  GetYourGuideAttributes,
  GetYourGuideActivitiesAttributes,
} from "./lib/types";

export {};

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "gyg-activities": GetYourGuideActivitiesAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "gyg-wc":
        | IntrinsicElements["gyg-activities"]
        | (GetYourGuideAttributes &
            React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>);
    }
  }
}
