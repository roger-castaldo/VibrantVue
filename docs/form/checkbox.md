# Checkbox

A checkbox used in a form
[Bulma Docs](https://bulma.io/documentation/form/checkbox/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| inputId | string ||  | |
| name | string ||  | The name of the form element|
| disabled | boolean || false | Indicates if it is currently disabled|
| translate | TranslateMethod ||  | The translate call method used to translate a given value (field title, element name, etc) into a desired language|
| label | string ||  | The label for the checkbox|
| required | boolean || false | Indicates if the checkbox is required|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the checkbox is either checked or unchecked|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:boolean|Sets the current value|
