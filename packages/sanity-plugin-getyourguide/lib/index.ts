import type { PluginFactory, SchemaTypeDefinition } from "sanity";
import { definePlugin } from "sanity";
import activitiesSchema from "./schemas/activities/schema";
import citySchema from "./schemas/city/schema";

interface PluginOptions {
  partnerId: string;
  lang?: string;
}

export const getYourGuide = definePlugin<PluginOptions>((options) => ({
  name: "getyourguide",
  schema: {
    name: "getyourguide",
    types: [
      { ...activitiesSchema, options },
      { ...citySchema, options },
    ],
  },
}));
