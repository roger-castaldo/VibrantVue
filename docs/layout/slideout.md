# Slideout

A Slideout component to use, similar to a modal card, slides out from the right
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| show | boolean ||  | Indicates if the slideout should be shown|
| has_close | boolean ||  | Indicates if there should be a close button|
| full_width | boolean ||  | Indicates that the width of this slideout should be the maximum allowed and not based on the content|
| type | [ColorTypes](../enums.md#ColorTypes) |white, black, light, dark, primary, link, info, success, warning, danger|  | The color type to use for the slideout|
| not_animated | boolean ||  | Indicates if the animation of the slideout when appears should be disabled|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| close||Emitted when the close button is clicked|
## Slots

| Name    | Description |
| ------- | ------- |
| header|The header of the slideout|
| content|The content of the slideout|
| default|The default content if no slot is specified|
| footer|The footer of the slideout|
