/// <reference types="astro/client" />
import type { GetYourGuideAttributes } from "./lib/types";

export {};

declare global {
  namespace astroHTML.JSX {
    interface IntrinsicElements {
      "gyg-wc": GetYourGuideAttributes & IntrinsicAttributes;
    }
  }
}
