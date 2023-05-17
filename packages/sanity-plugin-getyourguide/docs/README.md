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

&nbsp;

## Links

[Sanity.io](https://www.sanity.io/)

[GetYourGuide Partner](https://partner.getyourguide.com/)

&nbsp;

## License

ISC
