# Modal

A Mocal component to use
[Bulma Docs](https://bulma.io/documentation/components/modal/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| display | boolean || true | Indicates if the modal should be shown|
| has_close | boolean || false | Indicates if there should be a close button|
| z_index | number || 99 | Set the z-index if something beyond the default is desired|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| close||Emitted when the close button is clicked|
## Slots

| Name    | Description |
| ------- | ------- |
| default|The content to display within the modal|
