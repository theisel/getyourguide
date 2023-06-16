import { defineType } from "sanity";
import { parseUrl } from "gyg-wc/utils";
import { GetYourGuideForm } from "../../components/Form";

export default defineType({
  name: "getYourGuideTours",
  type: "object",
  title: "GetYourGuide Tours",
  components: {
    input: GetYourGuideForm,
  },
  preview: {
    select: {
      subtitle: "title",
    },
    prepare: ({ subtitle }) => ({
      title: `GetYourGuide Tours`,
      subtitle: subtitle || `{Missing "title"}`,
    }),
  },
  fields: [
    {
      name: "urls",
      type: "array",
      of: [{ type: "url" }],
      title: "Tour URLs",
      description: "https://www.getyourguide.com/{location}/{tour}",
      validation: (Rule) =>
        Rule.custom((input: string[] | undefined) => {
          const isValid = input?.every((url) => parseUrl(url)?.isTourUrl || false);
          return isValid || "Check URLS";
        }),
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Book a tour via GetYourGuide",
      validation: (Rule) => Rule.required(),
    },
  ],
});
