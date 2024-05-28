# PageNotification

Used to supply a page level notification that will appear on top of everything
[Based On This Bulma Component](https://bulma.io/documentation/elements/notification/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| visible | boolean || false | Inidicates whether or not to show|
| type | [NoticeTypes](../enums.md#NoticeTypes) |info, success, warning, danger| NoticeTypes.info | Set the color of the notification|
| message | string ||  | The message content of the notification|
| header | string ||  | The title for the notification|
| block_user | boolean ||  | Indicates if the user needs to be blocked from doing anything while fvisible|
| has_close | boolean ||  | Inidicates if there is a close button|
| is_light | boolean ||  | Indicates the use of the light version of the color specified|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| close||Emitted when the close button is clicked|
