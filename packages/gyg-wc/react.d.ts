export {};

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "getyourguide-activity": GetYourGuideActivityAttributes & HTMLAttributes<"div">;
      "getyourguide-city": GetYourGuideCityAttributes & HTMLAttributes<"div">;
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

    interface GetYourGuideAttributes extends Pick<HTMLAttributes<"div">, "lang"> {
      "partner-id": string;
    }
  }
}
