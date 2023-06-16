import { defineType, type ObjectInputProps } from "sanity";
import { GetYourGuideForm } from "../../components/Form";

export default defineType({
  name: "getYourGuideSearch",
  type: "object",
  title: "GetYourGuide Search",
  components: {
    input: GetYourGuideForm,
  },
  preview: {
    select: {
      subtitle: "title",
    },
    prepare: ({ subtitle }) => ({
      title: `GetYourGuide Search`,
      subtitle: subtitle || `{Missing "title"}`,
    }),
  },
  fields: [
    {
      name: "query",
      type: "string",
      title: "Search Query",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      type: "url",
      title: "URL",
      description: "https://www.getyourguide.com/{location}/",
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
      name: "size",
      type: "number",
      title: "Size",
      description: "Number of activities to show",
    },
    {
      name: "exclude",
      type: "array",
      of: [{ type: "url" }],
      title: "Exlude Tours",
      description: "URLs to exclude from search results",
      validation: (Rule) => Rule.required(),
    },
  ],
});
