# Panel

A Panel component to use
[Bulma Docs](https://bulma.io/documentation/components/panel/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| type | [ColorTypes](../enums.md#ColorTypes) |white, black, light, dark, primary, link, info, success, warning, danger|  | The color of the panel|
| block_names | string\[\] ||  | Panel blocks to supply via slot names, if not specified the minimal slot will be default|
| full_width | boolean ||  | Indicates if the width of the panel should be based on the content instead of a built in maximum|
| full_height | boolean ||  | Indicates if the height of the panel should be based on the content instead of a built in maximum|
| hidden_sections | string\[\] ||  | The names of the panel blocks to hide|
## Slots

| Name    | Description |
| ------- | ------- |
| header|The header for the panel|
| tabs|The tabs container for the panel|
| name|A slot named after the slots provided inside the block names.  If none are supplied default is the minimum.|
