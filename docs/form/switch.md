# Switch

A checkbox used in a form but styled as a switch
[Bulma Docs](https://wikiki.github.io/form/switch/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| inputId | string ||  | |
| name | string ||  | The name of the form element|
| disabled | boolean ||  | Indicates if it is currently disabled|
| translate | TranslateMethod ||  | The translate call method used to translate a given value (field title, element name, etc) into a desired language|
| label | string ||  | The label for the switch|
| required | boolean ||  | Indicates if this is required|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the switch is either checked or unchecked|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:boolean|Sets the current value|
