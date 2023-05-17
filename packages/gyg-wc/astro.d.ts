export {};

declare global {
  namespace astroHTML.JSX {
    interface IntrinsicElements {
      "getyourguide-activity": GetYourGuideActivityAttributes & HTMLAttributes;
      "getyourguide-city": GetYourGuideCityAttributes & HTMLAttributes;
    }

    interface GetYourGuideActivityAttributes extends GetYourGuideAttributes {
      "query-type": "search" | "location" | "tours";
      query: string;
      exclude?: string;
      size?: number | string;
    }

    interface GetYourGuideCityAttributes extends GetYourGuideAttributes {
      "city-id": string;
    }

    interface GetYourGuideAttributes extends Pick<HTMLAttributes, "lang"> {
      "partner-id": string;
    }
  }
}
