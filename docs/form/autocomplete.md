# Autocomplete

This is an autocomplete style form input that can allow for 1 or more items using either a callback or a list of data to filter through.\
Only supply a callbackurl or values do not supply both
[Tags Field](https://github.com/crabvk/bulma-tagsfield)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| inputId | string ||  | |
| name | string ||  | The name of the form element|
| disabled | boolean ||  | Indicates if it is currently disabled|
| translate | TranslateMethod ||  | The translate call method used to translate a given value (field title, element name, etc) into a desired language|
| title | string ||  | The title for the autocomplete box|
| limit | number\|null ||  | Indicates the maximum number of items that can be selected|
| callbackurl | string ||  | A url for making a query callback to when a character is entered to obtain a list of possible answers|
| values | AutoCompleteItem\[\] ||  | A list of values that can be selected from|
| fetch | ()=>unknown ||  | If a custom fetch method is used, supply it here to be called instead of the standard fetch|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|data:ValueChangedEvent|Emitted when a new item is selected or an item is removed|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:AutoCompleteItem\|AutoCompleteItem[]\|string[]\|null|Sets the current value|
