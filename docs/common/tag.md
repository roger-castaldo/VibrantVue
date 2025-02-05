# Tag

Used to supply a tag component
[Bulma Docs](https://bulma.io/documentation/elements/tag/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| type | [ColorTypes](../enums.md#ColorTypes) |white, black, light, dark, primary, link, info, success, warning, danger| ColorTypes.primary | The color of the tag|
| light | boolean || false | Inidicates to use the light version of the specified color|
| rounded | boolean || false | Inidicates if the tag should be rounded|
| size | [Sizes](../enums.md#Sizes) |small, normal, medium, large| Sizes.normal | The size of the tag to use|
| is_delete | boolean || false | Inidicates if this tag is a delete tag|
| text | string ||  | The string content of the tag|
## Slots

| Name    | Description |
| ------- | ------- |
| default|used when something more than text is desired|
