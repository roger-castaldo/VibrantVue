# RadioGroup

A radio group\
#link https://bulma.io/documentation/form/radio/
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| name | string ||  | The name of the form element|
| disabled | boolean ||  | Indicates if it is currently disabled|
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
