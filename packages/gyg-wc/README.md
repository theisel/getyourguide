# GetYourGuide + Web Component

![license](https://img.shields.io/npm/l/gyg-wc?style=flat-square)
[![npm](https://img.shields.io/npm/v/gyg-wc?style=flat-square)](https://www.npmjs.com/package/gyg-wc)

&nbsp;

This is an _unofficial_ GetYourGuide package.

This web-component is a light wrapper around the _GetYourGuide_ widget focusing on [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement), simple API, and better page performance (ie. lazy loading).

&nbsp;

## Getting started

### Installation

```bash
$ npm install gyg-wc
# $ pnpm add gyg-wc
# $ yarn add gyg-wc
```

### Usage / Examples

```html
<!-- index.html - using Vite -->
<script>
  // ✅ Remove the need to add `partner-id` attribute to each web component
  globalThis.GYG_PARTNER_ID = import.meta.env.VITE_GYG_PARTNER_ID;
</script>
<script type="module">
  import "gyg-wc";
</script>
```

#### Activities

```html
<gyg-wc url="{location_url}?partner_id={partner_id}" size="{num_items}">
  <a href="{location_url}?partner_id={partner_id}"> Things to do in ... </a>
</gyg-wc>
```

#### Availability

```html
<gyg-wc url="{tour_url}?partner_id={partner_id}">
  <a href="{tour_url}?partner_id={partner_id}"> Check availability for ... </a>
</gyg-wc>
```

#### Location

```html
<gyg-wc url="{location_url}?partner_id={partner_id}">
  <a href="{location_url}?partner_id={partner_id}"> Things to do in ... </a>
</gyg-wc>
```

#### Search

```html
<gyg-wc query="{search_term}" partner-id="{partner_id}">
  <a href="{search_url}?partner_id={partner_id}"> Things to do in ... </a>
</gyg-wc>
```

#### Tours

```html
<gyg-wc urls="[{tour_url}?partner_id={partner_id},...]">
  <a href="{tour_url}?partner_id={partner_id}"> Things to do in ... </a>
</gyg-wc>
```

&nbsp;

## Documentation

Refer to the [gyg-wc docs](https://github.com/theisel/getyourguide/blob/main/packages/gyg-wc/docs/README.md) page for details and examples.

&nbsp;

## License

ISC
