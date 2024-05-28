# MenuEntry

This is used to supply menu entries into the Menu component
[Bulma Docs](https://bulma.io/documentation/components/menu/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| title | MaybeRef\<string\>\|string ||  | The title to use in the menu item|
| active | boolean ||  | Inidicates if this menu item is active|
| icon | string ||  | The icon to use for the menu item|
| href | string ||  | The url of the menu item|
| onClick | ()=>void ||  | The click call back to call when this menu item is clicked|
## Slots

| Name    | Description |
| ------- | ------- |
| default|Content of the menu entry if something beyond a title and icon is desired|
| children|Used to contain all child menu entries, if desired|
