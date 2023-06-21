import React from "react";
import { defineType } from "sanity";
import { parseUrl } from "gyg-wc/utils";
import { GetYourGuideForm } from "../../components/Form";

export default defineType({
  name: "getYourGuideAvailability",
  type: "object",
  title: "GetYourGuide Availability",
  components: {
    input: GetYourGuideForm,
  },
  preview: {
    select: {
      subtitle: "title",
    },
    prepare: ({ subtitle }) => ({
      title: `GetYourGuide Availability`,
      subtitle: subtitle || `{Missing "title"}`,
    }),
  },
  fields: [
    {
      name: "url",
      type: "url",
      title: "Tour URL",
      description: "https://www.getyourguide.com/{location}/{tour}",
      validation: (Rule) =>
        Rule.custom((input: string) => {
          const isValid = parseUrl(input)?.isTourUrl || false;
          return isValid || "Check URL";
        }),
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Book a tour via GetYourGuide",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "campaign",
      type: "string",
      title: "Campaign",
      description: (
        <>
          Refer to{" "}
          <a
            href="https://partner.getyourguide.com/en-us/solutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GetYourGuide Partner portal
          </a>
        </>
      ),
    },
    {
      name: "currency",
      type: "string",
      title: "Currency",
      options: {
        list: [
          { title: "A$ Australian Dollar", value: "AUD" },
          { title: "C$ Canadian dollar", value: "CAD" },
          { title: "CHF Swiss franc", value: "CHF" },
          { title: "Kč Czech koruna", value: "CZK" },
          { title: "DKK Danish krone", value: "DKK" },
          { title: "€ Euro", value: "EUR" },
          { title: "£ British Pound", value: "GBP" },
          { title: "HK$ Hongkong-Dollar", value: "HKD" },
          { title: "₹ Indian rupee", value: "INR" },
          { title: "¥ Japanese Yen", value: "JPY" },
          { title: "NOK Norwegian krone", value: "NOK" },
          { title: "NZ$ New Zealand dollar", value: "NZD" },
          { title: "zł Polish zloty", value: "PLN" },
          { title: "SEK Swedish krona", value: "SEK" },
          { title: "S$ Singapur-Dollar", value: "SGD" },
          { title: "฿ Thai baht", value: "THB" },
          { title: "US$ U.S. Dollar", value: "USD" },
          { title: "R South African Rand", value: "ZAR" },
        ],
      },
    },
    {
      name: "layout",
      type: "string",
      initialValue: "horizontal",
      title: "Layout",
      options: {
        list: [
          { title: "Horizontal", value: "horizontal" },
          { title: "Vertical", value: "vertical" },
        ],
      },
    },
    {
      name: "theme",
      type: "string",
      title: "Theme",
      description: "Leave blank to use browser default",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
          { title: "System", value: "system" },
        ],
      },
    },
  ],
});
