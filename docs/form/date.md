# Date

A date input used in a form
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| inputId | string ||  | definied internal during form construction to ensure all labels and inputs maintain unique ids and support proper ids for accessibility|
| name | string ||  | The name of the form element|
| disabled | boolean || false | Indicates if it is currently disabled|
| includeTime | boolean ||  | Indicates if this is for a date and time or just a date|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the value has changed|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:Date\|null|Sets the current value|
