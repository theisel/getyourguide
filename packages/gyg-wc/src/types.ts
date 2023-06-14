export interface GetYourGuideAttributes {
  "partner-id": string;
  widget: "activities" | "availability" | "city";
  query: string;
  lang?: string;
}

export type GetYourGuideProps = CamelCaseKeys<GetYourGuideAttributes>;

export interface GetYourGuideActivitiesAttributes extends GetYourGuideAttributes {
  widget: "activities";
  type: "location" | "search" | "tours";
  exclude?: string;
  size?: number | string;
}

export type GetYourGuideActivitiesProps = CamelCaseKeys<GetYourGuideActivitiesAttributes>;

export interface GetYourGuideAvailabilityAttributes extends GetYourGuideAttributes {
  widget: "availability";
  theme?: "dark" | "light" | "system";
  layout?: "horizontal" | "vertical";
  currency?: string;
  campaign?: string;
}

export type GetYourGuideAvailabilityProps = CamelCaseKeys<GetYourGuideAvailabilityAttributes>;

export interface GetYourGuideCityAttributes extends GetYourGuideAttributes {
  widget: "city";
  query: string;
}

export type GetYourGuideCityProps = CamelCaseKeys<GetYourGuideCityAttributes>;

type CamelCaseKeys<T> = {
  [Key in keyof T as CamelCase<Key>]: T[Key];
};

type CamelCase<T> = T extends string
  ? T extends `${infer F}${infer R}`
    ? F extends "-"
      ? `${CamelCase<Capitalize<R>>}`
      : `${F}${CamelCase<R>}`
    : T
  : T;
