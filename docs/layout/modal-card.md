# ModalCard

A Modal Card component to use
[Bulma Docs](https://bulma.io/documentation/components/modal/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| show | boolean ||  | Indicates if the modal card should be shown|
| has_close | boolean ||  | Indicates if a close icon should exist on the card|
| max_width | boolean ||  | Indicates if the modal card should be set to the maximum allowed width|
| max_height | boolean ||  | Indicates if the modal card should be set to the maximum allowed height|
| full_width | boolean ||  | Indicates if the width of the card should be based on the content or a built in maximum|
| full_height | boolean ||  | Indicates if the height of the card should be based on the content or a build in maximum|
| icon | string ||  | Set an icon to overlay within the header|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| close||Emitted when the close button is clicked|
## Slots

| Name    | Description |
| ------- | ------- |
| header|The header of the modal card|
| content|The body of the modal card|
| footer|The footer of the modal card|
