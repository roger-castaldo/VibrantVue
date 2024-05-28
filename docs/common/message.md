# Message

Used to display a Message component on the screen
[Bulma Docs](https://bulma.io/documentation/components/message/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| type | [ColorTypes](../enums.md#ColorTypes)\|null |white, black, light, dark, primary, link, info, success, warning, danger| ColorTypes.primary | The color type of the message|
| message | string\|null || null | The message content|
| has_delete | boolean || false | Indicates if it has a delete button|
| title | string\|null || null | The title for the message container|
| size | [Sizes](../enums.md#Sizes)\|null |small, normal, medium, large| Sizes.normal | The size of the message container|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| close||Emitted when the delete (close) button is clicked|
## Slots

| Name    | Description |
| ------- | ------- |
| default|Content of the message if the message property is not enough|
