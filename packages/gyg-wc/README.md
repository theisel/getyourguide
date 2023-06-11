# GetYourGuide + Web Component

[![npm](https://img.shields.io/npm/v/gyg-wc?style=flat-square)](https://www.npmjs.com/package/gyg-wc)

&nbsp;

## Getting started

### Installation

```bash
$ npm install gyg-wc
# $ pnpm add gyg-wc
# $ yarn add gyg-wc
```

### Usage

```html
<!-- import "gyg-wc" module -->

<!-- activity widget example -->
<gyg-wc widget="activities" query-type="search" query="Sydney" size="3" partner-id="...">
  <a href="https://www.getyourguide.com/sydney-l200/?partner_id=...">Things to do in Sydney</a>
</gyg-wc>

<!-- city widget example -->
<gyg-wc widget="city" city-id="200" partner-id="...">
  <a href="https://www.getyourguide.com/sydney-l200/?partner_id=...">Things to do in Sydney</a>
</gyg-wc>
```

&nbsp;

### Documentation

Refer to the `gyg-wc` [docs page](https://github.com/theisel/getyourguide/blob/main/packages/gyg-wc/docs/README.md) for more details.

&nbsp;

## License

ISC
