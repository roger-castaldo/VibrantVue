# Textarea

A text area input for the form
[Bulma Docs](https://bulma.io/documentation/form/textarea/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| disabled | boolean ||  | Indicates if it is currently disabled|
| name | string ||  | The name of the form element|
| inputId | string ||  | |
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
