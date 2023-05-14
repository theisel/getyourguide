import { HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "getyourguide-activity": GetYourGuideActivityAttributes;
      "getyourguide-city": GetYourGuideCityAttributes;
    }

    interface GetYourGuideActivityAttributes extends GetYourGuideAttributes {
      "query-type": "search" | "location" | "tours";
      query: string;
      exclude?: string[];
      size?: number;
    }

    interface GetYourGuideCityAttributes extends GetYourGuideAttributes {
      "city-id": string;
    }

    interface GetYourGuideAttributes extends HTMLAttributes<HTMLElement> {
      "partner-id": string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      children?: any;
    }
  }
}
