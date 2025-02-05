# NavBar

Used to supply a Nav Bar component ment for menu navigation
[Bulma Docs](https://bulma.io/documentation/components/navbar/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| start_items | Promise\<[ParentMenuItem](../types.md#ParentMenuItem)\[\]\>\|[ParentMenuItem](../types.md#ParentMenuItem)\[\] ||  | The menu items to appear at the start of the nav bar (left)|
| end_items | Promise\<[ParentMenuItem](../types.md#ParentMenuItem)\[\]\>\|[ParentMenuItem](../types.md#ParentMenuItem)\[\] ||  | The menu items to appear at the end of the nav bar (right)|
| fixed_position | [FixedNavBarPositions](../enums.md#FixedNavBarPositions)\|null |top, bottom| null | If desired to affix the menu to a given position on the screen|
| ariaLabel | string || 'navigation' | The aria label to use for the nav bar|
| color | [ColorTypes](../enums.md#ColorTypes) |white, black, light, dark, primary, link, info, success, warning, danger|  | The color to use for the nav bar|
## Slots

| Name    | Description |
| ------- | ------- |
| brand|houses a brand identifier if desired|
