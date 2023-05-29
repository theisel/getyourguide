export type ActivitiesAttrs = Attrs<
  "activities",
  {
    "query-type": string;
    query: string;
    exclude?: string;
    size?: string | number;
  }
>;

export type CityAttrs = Attrs<
  "city",
  {
    "city-id": string;
  }
>;

type Attrs<W extends string, T extends Record<string, unknown>> = {
  widget: W;
  "partner-id": string;
} & T;

export type CamelCaseKeys<T> = {
  [Key in keyof T as CamelCase<Key>]: T[Key];
};

type CamelCase<T> = T extends string
  ? T extends `${infer F}${infer R}`
    ? F extends "-"
      ? `${CamelCase<Capitalize<R>>}`
      : `${F}${CamelCase<R>}`
    : T
  : T;
