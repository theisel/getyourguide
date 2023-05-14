import { definePlugin } from "sanity";
import activitySchema from "./schemas/activity/schema";
import citySchema from "./schemas/city/schema";

interface GetYourGuidePluginOptions {
  partnerId: string;
  lang?: string;
}

export const getYourGuide = definePlugin<GetYourGuidePluginOptions>((options) => ({
  name: "getyourguide",
  schema: {
    name: "getyourguide",
    types: [
      { ...activitySchema, options },
      { ...citySchema, options },
    ],
  },
}));
