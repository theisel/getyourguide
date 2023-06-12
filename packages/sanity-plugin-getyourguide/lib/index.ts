import { definePlugin } from "sanity";
import widgetSchema from "./schemas/widget";

interface PluginOptions {
  partnerId: string;
  lang?: string;
}

export const getYourGuide = definePlugin<PluginOptions>((options) => ({
  name: "getYourGuide",
  schema: {
    name: "getYourGuide",
    types: [{ ...widgetSchema, options }],
  },
}));
