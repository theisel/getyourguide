import type { ActivitiesAttrs, CityAttrs } from "./lib/types";

export {};

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "gyg-wc":
        | (React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
            ActivitiesAttrs)
        | (React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & CityAttrs);
    }
  }
}
