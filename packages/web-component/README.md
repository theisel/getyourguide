# Web Component for _GetYourGuide_ Widget

## Getting started

### Installation

```bash
$ npm install gyg-wc
# $ pnpm add gyg-wc
# $ yarn add gyg-wc
```

&nbsp;

## Usage

```html
<script type="module">
  import "gyg-wc";
</script>

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

## Links

[GetYourGuide Partner](https://partner.getyourguide.com/)

&nbsp;

## License

ISC
