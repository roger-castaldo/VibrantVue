# Dropzone

Used to supply a Drop Zone for a draggable item to be dropped within
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| is_valid_child | ()=>unknown || (data:any)=>true | A callback designed to indicate of a particular item being dragged into this drop zone can be dropped here|
| tag | string || 'div' | The html tag to render this drop zone as|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| itemAdded|any|Emitted when a valid item is dropped into this zone.  <br/>Supplies both the copy_data as well as a position to indicate the quadrant it was dropped in.|
| itemEntered|[DropZoneQuadrants](../enums.md#DropZoneQuadrants)|Emitted when a valid item enters into this zone.  <br/>Supplies a position to indicate the quadrant it entered in.|
| itemExited|[DropZoneQuadrants](../enums.md#DropZoneQuadrants)|Emitted when a valid item exits from this zone.  <br/>Supplies a position to indicate the quadrant it exited from.|
| itemMoved|[DropZoneQuadrants](../enums.md#DropZoneQuadrants)|Emitted when a valid item moves within the zone<br/>Supplies a position to indicate the quadrant it moved into.|
## Slots

| Name    | Description |
| ------- | ------- |
| default|The area contained within the drop zone to be used however is seen fit|
