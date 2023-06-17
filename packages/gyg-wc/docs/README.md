[**`gyg-wc`**](../README.md)

# GetYourGuide + Web Component

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

### \<gyg-wc ...\>

| Attribute  | Type     | Description                                     |
| ---------- | -------- | ----------------------------------------------- |
| partner-id | `string` | `required` if global `GYG_PARTNER_ID` isn't set |
| lang       | `string` | Overrides `<html>` lang                         |

### Activities

&#9656; _extends_ [gyg-wc](#gyg-wc)

| Attribute       | Type     | Description                                                          |
| --------------- | -------- | -------------------------------------------------------------------- |
| url `required`  | `string` | Location URL                                                         |
| size `required` | `string` | Number of items. Leave blank `size=""` to let GetYourGuide to decide |

### Availability

&#9656; _extends_ [gyg-wc](#gyg-wc)

| Attribute      | Type     | Description                                      |
| -------------- | -------- | ------------------------------------------------ |
| url `required` | `string` | Tour URL                                         |
| campaign       | `string` | Associate this widget with a campaign            |
| theme          | `string` | `dark` \| `light`; default `system`              |
| layout         | `string` | `horizontal` \| `vertical`; default `horizontal` |
| currency       | `string` | Check GetYourGuide Partner dashboard for options |

### Location

&#9656; _extends_ [gyg-wc](#gyg-wc)

| Attribute      | Type     | Description  |
| -------------- | -------- | ------------ |
| url `required` | `string` | Location URL |

### Search

&#9656; _extends_ [gyg-wc](#gyg-wc)

| Attribute        | Type     | Description  |
| ---------------- | -------- | ------------ |
| query `required` | `string` | Location URL |

### Tours

&#9656; _extends_ [gyg-wc](#gyg-wc)

| Attribute       | Type     | Description                                           |
| --------------- | -------- | ----------------------------------------------------- |
| urls `required` | `string` | Array of tour URL's or comma (,) separated tour URL's |

&nbsp;

## Links

[GetYourGuide Partner](https://partner.getyourguide.com/)

&nbsp;

## License

ISC
