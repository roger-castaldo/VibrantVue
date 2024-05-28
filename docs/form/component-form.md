# ComponentForm

Used to create a form with a given set of elements
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| translate | TranslateMethod ||  | The translate call method used to translate a given value (field title, element name, etc) into a desired language|
| elements | [FormInputType](../types.md#FormInputType)\[\] ||  | The elements of the form|
| disabled | boolean || false | Indicates if the form is disabled|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the value of a form element changes|
| buttonClicked|name:string|Emitted when a button within the form is clicked|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValues||Returns the values of the given form elements as an object where the property name is the name of the form element and the property value is <br/>that elements value|
| setValues|values:any|Called to set the values on the form elements using an object where the property name is the name of the form element|
| isValid||Called to see if the form is valid.  Returns a boolean value that is true if all required fields have a value.|
| hideField|name:string\|string[]|Called to hide 1 or more fields in the form|
| showField|name:string\|string[]|Called to show 1 or more hidden fields in the form|
| disableField|name:string\|string[]|Called to disable 1 or more fields in the form|
| enableField|name:string\|string[]|Called to enable 1 or more disabled fields in the form|
