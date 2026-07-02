# Number

A number input
[Bulma Docs](https://bulma.io/documentation/form/input/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| inputId | string ||  | definied internal during form construction to ensure all labels and inputs maintain unique ids and support proper ids for accessibility|
| is_loading | Ref\|boolean ||  | defined internally used to pass along the is_loading flag for skeleton purposes|
| name | string ||  | The name of the form element|
| disabled | boolean || false | Indicates if it is currently disabled|
| min | number ||  | The minimum value|
| max | number ||  | The maximum value|
| step | number ||  | The step value|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the value has changed|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:number\|string\|null|Sets the current value|
