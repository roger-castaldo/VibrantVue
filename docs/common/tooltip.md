# Tooltip

Used to allow for a mouse over tooltip to appear on a given object
[Bulma Docs](https://github.com/CreativeBulma/bulma-tooltip/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| text | string ||  | The content of the tool tip|
| is | any ||  | The element that this component is (div,a...etc)|
| has_arrow | boolean || false | Indicates if the tool tip will have an arrow|
| position | [ToolTipPositions](../enums.md#ToolTipPositions) |left, right, bottom, top| ToolTipPositions.left | Specifies the position that the tool tip will appear|
| multiline | boolean || false | Indicates if the content of the tooltip has multiple lines|
| type | [NoticeTypes](../enums.md#NoticeTypes) |info, success, warning, danger|  | Set the color type of the tool tip|
| always_active | boolean || false | Inidicates if the tool tip should always display|
| text_align | [ToolTipTextAlignments](../enums.md#ToolTipTextAlignments) |left, centered, right| ToolTipTextAlignments.left | Set the alignment of the text in the tool tip|
## Slots

| Name    | Description |
| ------- | ------- |
| default|the content to hold within the tool tipped item|
