# Time

A time input for the form
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| disabled | boolean ||  | Indicates if it is currently disabled|
| name | string ||  | The name of the form element|
| is_loading | Ref\|boolean ||  | defined internally used to pass along the is_loading flag for skeleton purposes|
| inputId | string ||  | definied internal during form construction to ensure all labels and inputs maintain unique ids and support proper ids for accessibility|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the value changes|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:string\|null|Sets the current value|
