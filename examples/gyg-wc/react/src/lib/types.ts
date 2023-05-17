export type CamelCase<Str> = Str extends `${infer C0}${infer R}`
  ? C0 extends "-"
    ? CamelCase<Capitalize<R>>
    : `${C0}${CamelCase<R>}`
  : "";

export type CamelCaseKeys<T> = Record<CamelCase<keyof T>, T>;
