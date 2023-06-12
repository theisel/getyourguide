// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineType } from "sanity";
import QueryField from "./QueryField";
import TypeInput from "./TypeInput";

export default defineType({
  name: "getYourGuideWidget",
  type: "object",
  title: "GetYourGuide Widget",
  components: {
    input: TypeInput,
  },
  preview: {
    select: {
      subtitle: "title",
    },
    prepare: ({ subtitle }) => ({
      title: `GetYourGuide Widget`,
      subtitle: subtitle || `{Missing "title"}`,
    }),
  },
  fields: [
    {
      name: "query",
      type: "string",
      title: "Query",
      initialValue: "search",
      options: {
        list: [
          { title: "City", value: "city" },
          { title: "Location", value: "location" },
          { title: "Search", value: "search" },
          { title: "Tours", value: "tours" },
        ],
      },
    },
    {
      name: "value",
      type: "string",
      title: "Value",
      components: {
        field: QueryField,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "exclude",
      type: "array",
      title: "Exclude",
      description: "A comma (,) separated list of activity id's",
      of: [{ type: "string" }],
      hidden: ({ parent }) => ["city", "tours"].includes(parent?.query),
      options: {
        layout: "tags",
      },
    },
    {
      name: "size",
      type: "number",
      title: "Size",
      description: "Number of items to display",
      hidden: ({ parent }) => ["city", "tours"].includes(parent?.query),
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Book a tour via GetYourGuide",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      type: "url",
      title: "URL",
      description: (
        <>
          Refer to{" "}
          <a
            href="https://partner.getyourguide.com/en-us/solutions/link-builder"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://partner.getyourguide.com/en-us/solutions/link-builder
          </a>
        </>
      ),
      initialValue: "https://www.getyourguide.com/",
      validation: (Rule) => Rule.required(),
    },
  ],
});
