[**`sanity-plugin-getyourguide`**](../README.md)

&nbsp;

# GetYourGuide + Sanity.io Plugin

This is a **Sanity Studio v3** plugin.

&nbsp;

## Getting Started

### Installation

```bash
$ npm install sanity-plugin-getyourguide
# $ pnpm add sanity-plugin-getyourguide
# $ yarn add sanity-plugin-getyourguide
```

&nbsp;

### Usage

#### Sanity Config

```ts
/* sanity.config.ts (or .js) */
import { defineConfig } from "sanity";
import { getYourGuide } from "sanity-plugin-getyourguide";

export default defineConfig({
  // ...
  plugins: [
    getYourGuide({
      partnerId: /* Required */,
      lang: /* Optional */
    }),
  ]
})
```

#### Schema

```js
import { defineType } from "sanity";

export default defineType({
  type: "document",
  name: "BlogPosting",
  title: "Blog Post",
  fields: [
    // ...
    {
      name: "getYourGuideAvailability",
      type: "getYourGuideAvailability",
    },
    {
      name: "getYourGuideLocation",
      type: "getYourGuideLocation",
    },
    {
      name: "getYourGuideSearch",
      type: "getYourGuideSearch",
    },
    {
      name: "getYourGuideTours",
      type: "getYourGuideTours",
    },
    // ...
  ],
  ...,
});
```

&nbsp;

## Links

[Sanity.io](https://www.sanity.io/)

[GetYourGuide Partner](https://partner.getyourguide.com/en-us/content-creators)

&nbsp;

## License

ISC
