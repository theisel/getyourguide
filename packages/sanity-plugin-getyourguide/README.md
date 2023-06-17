# GetYourGuide + Sanity.io Plugin

[![npm](https://img.shields.io/npm/v/sanity-plugin-getyourguide?style=flat-square)](https://www.npmjs.com/package/sanity-plugin-getyourguide)

&nbsp;

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

### Documentation

Refer to [docs page](https://github.com/theisel/getyourguide/blob/main/packages/sanity-plugin-getyourguide/docs/README.md) for more details.

&nbsp;

## License

ISC
