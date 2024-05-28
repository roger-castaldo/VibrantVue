# Notification

Used to supply a notification component
[Bulma Docs](https://bulma.io/documentation/elements/notification/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| type | [NoticeTypes](../enums.md#NoticeTypes)\|null |info, success, warning, danger| NoticeTypes.info | The color type to use|
| message | MaybeRef\<string\>\|string\|null || null | The content of the notifcation|
| light | boolean || false | Inidicates to use the light version of the given color|
## Slots

| Name    | Description |
| ------- | ------- |
| default|Content of the notification if the message property is not enough|
