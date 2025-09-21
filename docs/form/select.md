# Select

A select input
[Bulma Docs](https://bulma.io/documentation/form/select/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| disabled | boolean ||  | Indicates if it is currently disabled|
| name | string ||  | The name of the form element|
| inputId | string ||  | definied internal during form construction to ensure all labels and inputs maintain unique ids and support proper ids for accessibility|
| translate | TranslateMethod ||  | The translate call method used to translate a given value (field title, element name, etc) into a desired language|
| values | [SelectListItemValue](../types.md#SelectListItemValue)\[\]\|Promise\<[SelectListItemValue](../types.md#SelectListItemValue)\[\]\>\|TSParenthesizedType\|TSParenthesizedType ||  | The values to supply for the select box|
| multiple | boolean || false | Indicates if this is multiple select|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the value has changed|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:any\|any[]\|null|Sets the current value|
