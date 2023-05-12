import { defineType } from "sanity";
import TypeInput from "./TypeInput";
import QueryField from "./QueryField";

export default defineType({
  name: "getYourGuideActivity",
  type: "object",
  title: "GetYourGuide: Activity",
  components: {
    input: TypeInput,
  },
  preview: {
    select: {
      subtitle: "title",
    },
    prepare: ({ subtitle }) => ({
      title: `GetYourGuide: Activity Widget`,
      subtitle: subtitle || `{Missing "title"}`,
    }),
  },
  initialValue: {
    queryType: "search",
    size: 3,
  },
  fields: [
    {
      name: "queryType",
      type: "string",
      title: "Query Type",
      options: {
        list: [
          { title: "Search", value: "search" },
          { title: "Tours", value: "tours" },
          { title: "Location Id", value: "location" },
        ],
      },
    },
    {
      name: "query",
      type: "string",
      title: "Query",
      components: {
        field: QueryField,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "exclude",
      type: "string",
      title: "Exclude",
      description: "A comma (,) separated list of activity id's",
      of: [{ type: "string" }],
      hidden: ({ parent }) => parent?.queryType === "tours",
      options: {
        layout: "tags",
      },
    },
    {
      name: "size",
      type: "number",
      title: "Size",
      description: "Number of acitivites to display",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
  ],
});
