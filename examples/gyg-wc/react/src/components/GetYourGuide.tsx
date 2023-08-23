import type {
  GetYourGuideAvailabilityProps,
  GetYourGuideLocationProps,
  GetYourGuideSearchProps,
  GetYourGuideToursProps,
  GetYourGuideProps,
} from "gyg-wc/types";

import "gyg-wc"; // import GetYourGuide Web Component

type P0 = Omit<GetYourGuideAvailabilityProps, "partnerId">;
type P1 = Omit<GetYourGuideLocationProps, "partnerId">;
type P2 = Omit<GetYourGuideSearchProps, "partnerId">;
type P3 = Omit<GetYourGuideToursProps, "partnerId">;

export type Props = P0 | P1 | P2 | P3;

export default function GetYourGuide(props: Props) {
  const _props = { ...props, partnerId: "0" } satisfies GetYourGuideProps;

  const attrs = (Object.keys(_props) as Array<keyof typeof _props>).reduce(
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

  return <gyg-wc {...attrs}></gyg-wc>;
}
