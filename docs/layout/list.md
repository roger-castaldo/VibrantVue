# List

A stylized list
[Bulma Docs](https://github.com/chrisrhymes/bulma-block-list)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| highlighted | boolean ||  | Inidicates if this list should use the highlighted styling|
| outlined | boolean ||  | Indicates if this list should use the outlined styling|
| compact | boolean ||  | Inidicates if this list should be compact|
| type | [ColorTypes](../enums.md#ColorTypes) |white, black, light, dark, primary, link, info, success, warning, danger|  | The color type to use for the list|
| numbered | boolean ||  | Indicates if the list should be numbered|
| items | [ListItem](../types.md#ListItem)\[\] ||  | The items to contain within the list.  If not supplied use li elements within.|
## Slots

| Name    | Description |
| ------- | ------- |
| default||
| item.name|A slot for each list item defined.  The name is either the name supplied of item-{index}|
