# Date

A date input used in a form
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| disabled | boolean || false | Indicates if it is currently disabled|
| name | string ||  | The name of the form element|
| inputId | string ||  | |
| label | string ||  | Label to use|
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
