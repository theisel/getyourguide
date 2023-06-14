import type {
  GetYourGuideActivitiesProps,
  GetYourGuideAvailabilityProps,
  GetYourGuideCityProps,
  GetYourGuideProps,
} from "gyg-wc/types";

import "gyg-wc"; // import GetYourGuide Web Component

export type Props =
  | Omit<GetYourGuideProps, "partnerId">
  | Omit<GetYourGuideActivitiesProps, "partnerId">
  | Omit<GetYourGuideAvailabilityProps, "partnerId">
  | Omit<GetYourGuideCityProps, "partnerId">;

export default function GetYourGuide(props: Props) {
  const _props = { ...props, partnerId: "0" } satisfies GetYourGuideProps;

  const { widget, ...attrs } = (Object.keys(_props) as Array<keyof typeof _props>).reduce(
    (attrs, prop) => {
      const key = prop
        .toString()
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase();

      attrs[key] = _props[prop];

      return attrs;
    },
    {} as Record<string, unknown>
  ) as unknown as React.JSX.IntrinsicElements["gyg-wc"];

  // Alternatively, you can use the following:
  // return <gyg-wc {...attrs} widget={widget}></gyg-wc>;

  const Widget = `gyg-${widget}`;

  return <Widget {...attrs} />;
}
