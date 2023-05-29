// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { useFormValue, type FieldProps } from "sanity";
import type { GetYourGuideActivityValue } from "./types";

export default function QueryField(props: FieldProps) {
  const { queryType } = (useFormValue(props.path.slice(0, -1)) ?? {}) as GetYourGuideActivityValue;

  let description = props.description;

  switch (queryType) {
    case "search":
      description = `Enter search terms, a city, or geographical coordinates`;
      break;
    case "tours":
      description = `A comma (,) seperated list of tour id's`;
      break;
    case "location":
      description = `Enter location/city id`;
      break;
  }

  return props.renderDefault({ ...props, description });
}
