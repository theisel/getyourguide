# GetYourGuide Web Component

&nbsp;

## Getting started

### Installation

```bash
$ npm install gyg-wc
# $ pnpm add gyg-wc
# $ yarn add gyg-wc
```

&nbsp;

### Usage

```html
<!-- import "gyg-wc" module -->

<!-- activity widget example -->
<getyourguide-activity query-type="search" query="Sydney" size="3" partner-id="...">
  <a href="https://www.getyourguide.com/sydney-l200/?partner_id=...">Things to do in Sydney</a>
</getyourguide-activity>

<!-- city widget example -->
<getyourguide-city city-id="200" partner-id="...">
  <a href="https://www.getyourguide.com/sydney-l200/?partner_id=...">Things to do in Sydney</a>
</getyourguide-city>
```

&nbsp;

## API

## \<getyourguide-city\>

**Attributes**

- partner-id `required`
- city-id `required`
- lang
  - Define the language

&nbsp;

## \<getyourguide-activity\>

**Attributes**

- partner-id `required`
- query-type `required`
  - Value can be `search` | `location` | `tours`
- query `required`
  - For `query-type` `tours` concatenate with a comma (,)
- exclude
  - Concatenate with a comma (,)
- size
  - Number of items to display; defaults to **3**
- lang
  - Define the language

&nbsp;

## Links

[GetYourGuide Partner](https://partner.getyourguide.com/)

&nbsp;

## License

ISC
