# Text

A text input for the form
[Bulma Docs](https://bulma.io/documentation/form/input/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| disabled | boolean ||  | Indicates if it is currently disabled|
| name | string ||  | The name of the form element|
| subtype | string ||  | The subtype to use for a text input, such as password, text, etc.|
| maxlength | number ||  | The maxLength to apply to the text box|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the value of the text box changes|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:any\|null|Sets the current value|
