import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { getYourGuide } from "sanity-plugin-getyourguide";

export default defineConfig({
  name: "default",
  title: "GetYourGuide Example",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: "production",

  plugins: [deskTool(), visionTool(), getYourGuide({ partnerId: "0" })],

  schema: {
    types: schemaTypes,
  },
});
