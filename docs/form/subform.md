# Subform

Used to create form within a form (a way of collecting child inputs that maybe have a specific use)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| disabled | boolean || false | Indicates if it is currently disabled|
| name | string ||  | The name of the form element|
| fields | [FormInputType](../types.md#FormInputType)\[\] ||  | The form components for this subform|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the value of a form element changes|
| buttonClicked|name:string|Emitted when a button within the sub form is clicked|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| setValue|value:any|Called to set the value of 1 or more copmonents inside this sub form|
| getValue||Called to get the value of this of all the components inside this subform.  <br/>Returns an object where each propertyName is the name of the field and it's value is the value.|
| isValid||Called to see if this sub form is valid.  It returns the result of true if all the components return true from their isValid calls|
