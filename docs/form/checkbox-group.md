# CheckboxGroup

A list of checkboxes that are related in some way and therefore grouped together
[Bulma Docs](https://bulma.io/documentation/form/checkbox/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| name | string ||  | The name of the form element|
| disabled | boolean ||  | Indicates if it is currently disabled|
| translate | TranslateMethod ||  | The translate call method used to translate a given value (field title, element name, etc) into a desired language|
| values | [ListItemValue](../types.md#ListItemValue)\[\]\|Promise\<[ListItemValue](../types.md#ListItemValue)\[\]\>\|TSParenthesizedType\|TSParenthesizedType\|null ||  | The available values to create the list of checkboxes from|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when a checkbox is either checked or unchecked|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:any[]\|null|Sets the current value|
