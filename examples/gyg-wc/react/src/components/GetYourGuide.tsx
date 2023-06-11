import React from "react";
import type { ActivitiesAttrs, CityAttrs, CamelCaseKeys } from "gyg-wc/types";
import "gyg-wc"; // import GetYourGuide Web Component

type ActivitiesProps = CamelCaseKeys<ActivitiesAttrs>;
type CityProps = CamelCaseKeys<CityAttrs>;

export type Props = Omit<ActivitiesProps, "partnerId"> | Omit<CityProps, "partnerId">;

export default function GetYourGuide(props: Props) {
  const _props = { ...props, partnerId: "0" } satisfies ActivitiesProps | CityProps;

  const attrs = (Object.keys(_props) as Array<keyof typeof _props>).reduce((attrs, prop) => {
    const key = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
    attrs[key] = _props[prop];
    return attrs;
  }, {} as Record<string, unknown>) as ActivitiesAttrs | CityAttrs;

  return <gyg-wc {...attrs}></gyg-wc>;
}
