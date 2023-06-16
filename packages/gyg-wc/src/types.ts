export interface GetYourGuideAttributes {
  "partner-id": string;
  lang?: string;
}

export type GetYourGuideProps = CamelCaseKeys<GetYourGuideAttributes>;

export interface GetYourGuideAvailabilityAttributes extends GetYourGuideAttributes {
  url: TourUrl | string;
  theme?: "dark" | "light" | "system";
  layout?: "horizontal" | "vertical";
  currency?: string;
  campaign?: string;
}

export type GetYourGuideAvailabilityProps = CamelCaseKeys<GetYourGuideAvailabilityAttributes>;

export interface GetYourGuideLocationAttributes extends GetYourGuideAttributes {
  url: LocationUrl | string;
  size?: string;
  exclude?: string | string[];
}

export type GetYourGuideLocationProps = CamelCaseKeys<GetYourGuideLocationAttributes>;

export interface GetYourGuideSearchAttributes extends GetYourGuideAttributes {
  query: string;
  size?: number | string;
  exclude?: GetYourGuideLocationAttributes["exclude"];
}

export type GetYourGuideSearchProps = CamelCaseKeys<GetYourGuideSearchAttributes>;

export interface GetYourGuideToursAttributes extends GetYourGuideAttributes {
  urls: TourUrl | TourUrl[] | string;
}

export type GetYourGuideToursProps = CamelCaseKeys<GetYourGuideToursAttributes>;

export type LocationUrl = `https://www.getyourguide.com/${string}-l${string}`;
export type TourUrl = `${LocationUrl}/${string}-t${string}`;

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
