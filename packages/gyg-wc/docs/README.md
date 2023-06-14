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

| Attribute             | Type     | Description                                                                                              |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| partner-id `required` | `string` | GetYourGuide Partner ID                                                                                  |
| widget `required`     | `string` | Only required when using `<gyg-wc ...>` component. Value can be `activities` \| `availability` \| `city` |
| query `required`      | `string` | Value relates to the widget. This may be a search string, location id, tour id etc.                      |
| lang                  | `string` | Overrides `<html>` lang                                                                                  |

### \<gyg-activities ...\>

Extends [gyg-wc](#gyg-wc)

| Attribute       | Type     | Description                                    |
| --------------- | -------- | ---------------------------------------------- |
| type `required` | `string` | Value can be `location` \| `search` \| `tours` |
| exclude         | `string` | Comma (,) separated list of ids                |
| size            | `string` | Number of items to display                     |

### \<gyg-availability ...\>

Extends [gyg-wc](#gyg-wc)

| Attribute | Type     | Description                                         |
| --------- | -------- | --------------------------------------------------- |
| theme     | `string` | Value can be `dark` \| `light`; default `system`    |
| layout    | `string` | Value can be `horizontal` \| `vertical`; default "" |
| currency  | `string` | Check GetYourGuide Partner dashboard for options    |
| campaign  | `string` | Associate this widget with a campaign               |

### \<gyg-city ...\>

Extends [gyg-wc](#gyg-wc)

| Attribute | Type | Description |
| --------- | ---- | ----------- |

&nbsp;

## Links

[GetYourGuide Partner](https://partner.getyourguide.com/)

&nbsp;

## License

ISC
