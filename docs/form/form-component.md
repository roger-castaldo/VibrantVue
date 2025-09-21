# FormComponent

A wrapper for all for input elements
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| translate | TranslateMethod ||  | The translate call method used to translate a given value (field title, element name, etc) into a desired language|
| input | [FormInputType](../types.md#FormInputType) ||  | The type of input this form component represents|
| disabled | boolean || false | Indicates if this is disabled|
| hidden |  || false | |
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when the value of this form component changes|
| buttonClicked|name:string|Emitted when a button within this form component is clicked|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| setValue|value:any|Called to set the value for this given form component|
| fieldName||Property that returns the name of this given component|
| type||Property that returns the type of form component this is|
| altFieldName||Property that returns the alternative field name for this component|
| getValue||Called to get the value of this component.<br/>If this is a basic component, it returns that value.<br/>If this is a subform it will return an object where the propertyName are the names of the fields in the subform.|
| isValid||Called to see if this component is valid.<br/>If this is a basic component, it ensures it has a value if required.<br/>If this is a subform it returns the result from the subform isValid call.|
| setValues|values:any\|null|Called to set the values of a subform component, this will throw an error if this component is not a subform.|
