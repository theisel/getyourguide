import { defineType } from "sanity";
import { parseUrl } from "gyg-wc/utils";
import { GetYourGuideForm } from "../../components/Form";

export default defineType({
  name: "getYourGuideLocation",
  type: "object",
  title: "GetYourGuide Location",
  components: {
    input: GetYourGuideForm,
  },
  preview: {
    select: {
      subtitle: "title",
    },
    prepare: ({ subtitle }) => ({
      title: `GetYourGuide Location`,
      subtitle: subtitle || `{Missing "title"}`,
    }),
  },
  fields: [
    {
      name: "url",
      type: "url",
      title: "Location URL",
      description: "https://www.getyourguide.com/{location}/",
      validation: (Rule) =>
        Rule.custom((input: string) => {
          const isValid = parseUrl(input)?.isLocationUrl || false;
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
      name: "size",
      type: "number",
      title: "Size",
      description: (
        <>
          <span>{`Number of activities to show`}</span>
          <br />
          <span>{`Enter a number for activities`}</span>
        </>
      ),
    },
    {
      name: "exclude",
      type: "array",
      of: [{ type: "url" }],
      title: "Exlude Tours",
      description: "URLs to exclude from search results",
    },
  ],
});
