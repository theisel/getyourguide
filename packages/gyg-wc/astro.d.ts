/// <reference types="astro" />
import type { ActivitiesAttrs, CityAttrs } from "./lib/types";

export {};

declare global {
  namespace astroHTML.JSX {
    interface IntrinsicElements {
      "gyg-widget": ActivitiesAttrs | CityAttrs;
    }
  }
}
