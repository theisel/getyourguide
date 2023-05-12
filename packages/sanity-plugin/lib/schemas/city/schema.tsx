import { defineType } from "sanity";
import TypeInput from "./TypeInput";

export default defineType({
  name: "getYourGuideCity",
  type: "object",
  title: "GetYourGuide: City",
  components: {
    input: TypeInput,
  },
  preview: {
    select: {
      title: "title",
      cityId: "cityId",
    },
    prepare: ({ title, cityId }) => ({
      title: `GetYourGuide: City Widget`,
      subtitle: `#${cityId || "{???}"} ${title}`,
    }),
  },
  fields: [
    {
      name: "cityId",
      type: "string",
      title: "City Id",
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
