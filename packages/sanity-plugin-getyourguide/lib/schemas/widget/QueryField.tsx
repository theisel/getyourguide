// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useFormValue, type FieldProps } from "sanity";
import type { GetYourGuideValue } from "./types";

export default function QueryField(props: FieldProps) {
  const { query } = (useFormValue(props.path.slice(0, -1)) ?? {}) as GetYourGuideValue;
  let { description } = props.schemaType;

  switch (query) {
    case "city":
      description = `Enter city id`;
      break;
    case "location":
      description = `Enter location/city id`;
      break;
    case "search":
      description = `Enter search terms, a city, or geographical coordinates`;
      break;
    case "tours":
      description = `A comma (,) seperated list of tour id's`;
      break;
  }

  return props.renderDefault({ ...props, description });
}
