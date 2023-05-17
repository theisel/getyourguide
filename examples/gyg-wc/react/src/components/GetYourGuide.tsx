import React from "react";
import type { CamelCaseKeys } from "../lib/types";
import { propsToAttrs } from "gyg-wc/utils";

type ActivityAttributes = Omit<React.JSX.GetYourGuideActivityAttributes, "partner-id" | "lang">;
type CityAttributes = Omit<React.JSX.GetYourGuideCityAttributes, "partner-id" | "lang">;
type CheckHasAllProperties<T, U> = keyof U extends keyof T ? T : never;

type Widget<W extends string> = {
  widget: W;
};

type ActivityProps = Widget<"activity"> &
  CheckHasAllProperties<
    {
      queryType: string;
      query: string;
      exclude?: string;
      size?: string;
    },
    CamelCaseKeys<ActivityAttributes>
  >;

type CityProps = Widget<"city"> &
  CheckHasAllProperties<
    {
      cityId: string;
    },
    CamelCaseKeys<CityAttributes>
  >;
export type Props = ActivityProps | CityProps;

export default function GetYourGuide({ widget, ...props }: Props) {
  const Widget = `getyourguide-${widget}`;
  const attrs = propsToAttrs(props);

  return <Widget {...attrs} />;
}
