# Sortable

Used to supply a Sortable list that can be dragged and dropped to change the order
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| highlighted | boolean || false | Inidicates if this list should use the highlighted styling|
| outlined | boolean || false | Indicates if this list should use the outlined styling|
| compact | boolean || false | Inidicates if this list should be compact|
| type | [ColorTypes](../enums.md#ColorTypes) |white, black, light, dark, primary, link, info, success, warning, danger| ColorTypes.primary | The color type to use for the list|
| items | any\[\] ||  | The items that are contained within the sortable list|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| sorted|any\[\]|Emitted when the sorting changes.  Supplies the items based on their current sort.|
## Slots

| Name    | Description |
| ------- | ------- |
| item|Used to render a given item in the sort list|
