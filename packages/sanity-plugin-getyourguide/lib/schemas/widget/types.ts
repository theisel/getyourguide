import type { GetYourGuideProps } from "gyg-wc/types";

export interface GetYourGuideValue extends Omit<GetYourGuideProps, "partnerId"> {
  title: string;
  url: string;
}
