# DraggableItem

Used to create a draggable item that can be used with a drop zone for drag and drop interfaces
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| copy_data | any\|null || null | The data transfer when this item is dragged|
| disabled | boolean || false | Indicates if dragging is currently disabled|
| tag | string || 'div' | The tag to use for wrapping this dragging item|
| handle_search | string\|null ||  | A querySelector search specify the dragging handle|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| started||Emitted when the dragging of this item has started|
| stopped||Emitted when the dragging of this item has stopped|
## Slots

| Name    | Description |
| ------- | ------- |
| default|The content of the draggable item|
