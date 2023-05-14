export const propsToAttrs = <T>(props: Record<string, unknown>): T =>
  Object.entries(props).reduce((acc, [key, value]) => {
    key = key.replace(/([a-z]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
    return { ...acc, [key]: value };
  }, {}) as T;
