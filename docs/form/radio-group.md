# RadioGroup

A radio group\
#link https://bulma.io/documentation/form/radio/
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| disabled | boolean ||  | Indicates if it is currently disabled|
| name | string ||  | The name of the form element|
| is_loading | Ref\|boolean ||  | defined internally used to pass along the is_loading flag for skeleton purposes|
| inputId | string ||  | definied internal during form construction to ensure all labels and inputs maintain unique ids and support proper ids for accessibility|
| translate | TranslateMethod ||  | The translate call method used to translate a given value (field title, element name, etc) into a desired language|
| values | [ListItemValue](../types.md#ListItemValue)\[\]\|Promise\<[ListItemValue](../types.md#ListItemValue)\[\]\>\|TSParenthesizedType\|TSParenthesizedType\|null ||  | The values to build the radio group from|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the value has changed|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:any\|null|Sets the current value|
