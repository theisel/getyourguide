import { definePlugin } from "sanity";
import availabilitySchema from "./schemas/availability";
import locationSchema from "./schemas/location";
import searchSchema from "./schemas/search";
import toursSchema from "./schemas/tours";

interface PluginOptions {
  partnerId?: string;
  lang?: string;
}

export const getYourGuide = definePlugin<PluginOptions>((options = {}) => ({
  name: "getYourGuide",
  schema: {
    name: "getYourGuide",
    types: [
      { ...availabilitySchema, options },
      { ...locationSchema, options },
      { ...searchSchema, options },
      { ...toursSchema, options },
    ],
  },
}));
