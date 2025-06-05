# Number

A number input
[Bulma Docs](https://bulma.io/documentation/form/input/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| disabled | boolean || false | Indicates if it is currently disabled|
| name | string ||  | The name of the form element|
| inputId | string ||  | |
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
