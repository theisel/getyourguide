import { definePlugin } from "sanity";

interface PluginOptions {
  partnerId: string;
  lang?: string;
}

export const getYourGuide = definePlugin<PluginOptions>((options) => ({
  name: "getYourGuide",
  schema: {
    name: "getYourGuide",
  },
}));
