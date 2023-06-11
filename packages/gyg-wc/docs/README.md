[**`gyg-wc`**](../README.md)

# GetYourGuide + Web Component

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

<!-- activities widget example -->
<gyg-wc widget="activities" query-type="search" query="Sydney" size="3" partner-id="...">
  <a href="https://www.getyourguide.com/sydney-l200/?partner_id=...">Things to do in Sydney</a>
</gyg-wc>

<!-- city widget example -->
<gyg-wc widget="city" city-id="200" partner-id="...">
  <a href="https://www.getyourguide.com/sydney-l200/?partner_id=...">Things to do in Sydney</a>
</gyg-wc>
```

&nbsp;

## Examples

Check the [examples](../../../examples/gyg-wc/) directory for implementation

&#9656; HTML

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/theisel/getyourguide/tree/main/examples/gyg-wc/html)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/theisel/getyourguide/tree/main/examples/gyg-wc/html)

&#9656; Astro

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/theisel/getyourguide/tree/main/examples/gyg-wc/astro)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/theisel/getyourguide/tree/main/examples/gyg-wc/astro)

&#9656; React

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/theisel/getyourguide/tree/main/examples/gyg-wc/react)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/theisel/getyourguide/tree/main/examples/gyg-wc/react)

&nbsp;

## API

## \<gyg-wc widget="activities" ...\>

| Attribute             | Type                 | Description                                    |
| --------------------- | -------------------- | ---------------------------------------------- |
| partner-id `required` | `string`             | GetYourGuide Partner ID                        |
| query-type `required` | `string`             | Value can be `search` \| `location` \| `tours` |
| query `required`      | `string`             | Value relates to `query-type`                  |
| exclude               | `string`             | Comma (,) separated list                       |
| size                  | `string` \| `number` | Number of items to display; ignored if `query-type` is tours   |
| lang                  | `string`             | Overrides `<html>` lang                        |

&nbsp;

## \<gyg-wc widget="city" ...\>

| Attribute             | Type     | Description             |
| --------------------- | -------- | ----------------------- |
| partner-id `required` | `string` | GetYourGuide Partner ID |
| city-id `required`    | `string` | City/Location ID        |
| lang                  | `string` | Overrides `<html>` lang |

&nbsp;

## Links

[GetYourGuide Partner](https://partner.getyourguide.com/)

&nbsp;

## License

ISC
