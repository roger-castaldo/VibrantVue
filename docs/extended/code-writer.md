# CodeWriter

Used to create a Code Writer interface based on acejs
[Ace Editor](https://ace.c9.io/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| language | string ||  | What code language to use|
| autocompletes | [AutoCompleteEntry](../types.md#AutoCompleteEntry)\[\] ||  | Provided auto complete entries to supply|
| readonly | boolean || false | Inidicates if the code writer is readonly|
| value | string || '' | The value of the code writer content|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| valueChanged|string|Emitted when the content of the code has changed.  Provides the new content value.|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| getValue||Gets the current value|
| setValue|value:string\|null|Sets the current value|
