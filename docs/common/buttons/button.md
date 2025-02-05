# Button

This is a stylized and customizable button
[Bulma Docs](https://bulma.io/documentation/elements/button/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| is_rounded | boolean ||  | Inidicates if it is rounded|
| hide_desktop | boolean ||  | Inidicates if it is hidden when on desktop|
| hide_tablet | boolean ||  | Inidicates if it is hidden when on table|
| hide_mobile | boolean ||  | Inidicates if it is hidden when on mobile|
| size | [Sizes](../enums.md#Sizes) |small, normal, medium, large| Sizes.normal | The size of the button|
| disabled | boolean ||  | Indicates if the button is disabled|
| icon | string\|null ||  | The icon to use in the button|
| type | [ColorTypes](../enums.md#ColorTypes) |white, black, light, dark, primary, link, info, success, warning, danger| ColorTypes.primary | The color to use on the button|
| title | string\|null ||  | The string content of the button (title)|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| click||Emit a click even when the button is clicked|
