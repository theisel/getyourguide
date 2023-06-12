export interface GetYourGuideAttributes {
  "partner-id": string;
  query: "city" | "location" | "search" | "tours";
  value: string | string[];
  exclude?: string | string[];
  size?: number | string;
}

export type GetYourGuideProps = CamelCaseKeys<GetYourGuideAttributes>;

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
