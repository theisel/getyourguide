import React from "react";
import type { GetYourGuideProps } from "gyg-wc/types";
import "gyg-wc"; // import GetYourGuide Web Component

export type Props = Omit<GetYourGuideProps, "partnerId">;

export default function GetYourGuide(props: Props) {
  const _props = { ...props, partnerId: "0" } satisfies GetYourGuideProps;

  const attrs = (Object.keys(_props) as Array<keyof typeof _props>).reduce((attrs, prop) => {
    const key = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
    attrs[key] = _props[prop];
    return attrs;
  }, {} as Record<string, unknown>) as React.JSX.IntrinsicElements["gyg-wc"];

  return <gyg-wc {...attrs}></gyg-wc>;
}
