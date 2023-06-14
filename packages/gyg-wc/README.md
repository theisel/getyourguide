# GetYourGuide + Web Component

![license](https://img.shields.io/npm/l/gyg-wc?style=flat-square)
[![npm](https://img.shields.io/npm/v/gyg-wc?style=flat-square)](https://www.npmjs.com/package/gyg-wc)

&nbsp;

This is an _unofficial_ GetYourGuide package.

The web-components are a light wrapper around the _GetYourGuide_ widget focusing on [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement), simple API, and better page performance.

&nbsp;

## Getting started

### Installation

```bash
$ npm install gyg-wc
# $ pnpm add gyg-wc
# $ yarn add gyg-wc
```

### Usage / Examples

#### Activities

```html
<!-- import "gyg-wc" module -->

<gyg-activities type="search" query="{query}" partner-id="{partner_id}">
  <a href="https://www.getyourguide.com/{path_to_activities}/?partner_id={partner_id}">
    Things to do in ...
  </a>
</gyg-activities>

<!-- alternative -->
<gyg-wc widget="activities" type="search" query="{query}" partner-id="{partner_id}">
  <a href="https://www.getyourguide.com/{path_to_activities}/?partner_id={partner_id}">
    Things to do in ...
  </a>
</gyg-wc>
```

#### Availability

```html
<!-- import "gyg-wc" module -->

<!-- availability widget example -->
<gyg-availability query="{tour_id}" partner-id="{partner_id}">
  <a href="https://www.getyourguide.com/{path_to_tour}/?partner_id={partner_id}">
    Check availability for ...
  </a>
</gyg-availability>

<!-- alternative -->
<gyg-wc widget="availability" query="{tour_id}" partner-id="{partner_id}">
  <a href="https://www.getyourguide.com/{path_to_tour}/?partner_id={partner_id}">
    Check availability for ...
  </a>
</gyg-wc>
```

#### City Widget

```html
<!-- import "gyg-wc" module -->

<gyg-city query="{city_id}" partner-id="{partner_id}">
  <a href="https://www.getyourguide.com/{city_slug}/?partner_id={partner_id}">
    Things to do in ...
  </a>
</gyg-city>

<!-- alternative: city widget example -->
<gyg-wc widget="city" query="{city_id}" partner-id="{partner_id}">
  <a href="https://www.getyourguide.com/{city_slug}/?partner_id={partner_id}">
    Things to do in ...
  </a>
</gyg-wc>
```

&nbsp;

## Documentation

Refer to the [gyg-wc docs](https://github.com/theisel/getyourguide/blob/main/packages/gyg-wc/docs/README.md) page for details and examples.

&nbsp;

## License

ISC
