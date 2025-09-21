# Textarea

A text area input for the form
[Bulma Docs](https://bulma.io/documentation/form/textarea/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| inputId | string ||  | definied internal during form construction to ensure all labels and inputs maintain unique ids and support proper ids for accessibility|
| name | string ||  | The name of the form element|
| disabled | boolean ||  | Indicates if it is currently disabled|
| maxlength | number ||  | |
| rows | number ||  | |
| cols | number ||  | |
| supportsTab | boolean ||  | |
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the value of the textarea changes|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:string\|null|Sets the current value|
