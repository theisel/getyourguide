/**
 * Converts a `camelCase` string to a `kebab-case` string
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const propsToAttrs = <T extends Record<string, any>>(props: T) =>
  Object.entries(props).reduce((acc, [key, value]) => {
    key = key
      .replaceAll("_", "-")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase();
    return { ...acc, [key]: value };
  }, {} as Record<KeyAsSlug<keyof typeof props>, (typeof props)[keyof typeof props]>);

type KeyAsSlug<T> = T extends string
  ? T extends `${infer C0}${infer R}`
    ? `${KS<C0>}${KeyAsSlug<R>}`
    : ""
  : never;

type KS<Str extends string> = Str extends Lowercase<Str> ? Str : `-${Lowercase<Str>}`;
