---
"gyg-wc": minor
---

**BREAKING CHANGE**

Rewritten codebase

- Added `<gyg-widget>`
- Added `gyg-wc/types` TS typing
- Dropped `<getyourguide-activity>`
- Dropped `<getyourguide-city>`
- Dropped `propsToAttrs` utility function
- Updated `examples`

`<gyg-widget>` replaces `<getyourguide-activity>` and `<getyourguide-city>`

```diff
- <getyourguide-activity ...>
+ <gyg-widget widget="activities" ...>
```

```diff
- <getyourguide-city ...>
+ <gyg-widget widget="city" ...>
```
