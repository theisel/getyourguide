# Sanity.io plugin for _GetYourGuide_

This is a **Sanity Studio v3** plugin.

&nbsp;

## Getting started

### Installation

```bash
$ npm install sanity-plugin-getyourguide
# $ pnpm add sanity-plugin-getyourguide
# $ yarn add sanity-plugin-getyourguide
```

&nbsp;

## Usage

```ts
/* sanity.config.ts (or .js) */
import { defineConfig } from "sanity";
import { getYourGuidePlugin } from "sanity-plugin-getyourguide";

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

&nbsp;

## Links

[GetYourGuide Partner](https://partner.getyourguide.com/)

[Sanity](https://www.sanity.io/)

&nbsp;

## License

ISC
