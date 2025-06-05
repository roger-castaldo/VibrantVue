# Button

A generic form button
[Bulma Docs](https://bulma.io/documentation/elements/button/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| name | string ||  | The name of the form element|
| disabled | boolean ||  | Indicates if it is currently disabled|
| translate | TranslateMethod ||  | The translate call method used to translate a given value (field title, element name, etc) into a desired language|
| label | string ||  | The label for the button|
| sstyle | [ColorTypes](../enums.md#ColorTypes) |white, black, light, dark, primary, link, info, success, warning, danger|  | The color style to use|
| icon | string ||  | An icon if one is desired|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| buttonClicked|name:string|Emitted when the button is clicked|
