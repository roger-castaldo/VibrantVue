# Pagination

Used to supply a pagination control
[Bulma Docs](https://bulma.io/documentation/components/pagination/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| use_next | boolean || true | Indicates if it should use Next/Previous instead of Newer/Older|
| has_more | boolean || undefined | Indicates if there are more items in the paging so Next/Newer should be enabled|
| has_previous | boolean || undefined | Indicates if there are previous items in the paging so Previous/Older should be enabled|
| size | [Sizes](../enums.md#Sizes) |small, normal, medium, large| Sizes.small | The size of the pagination buttons|
| rounded | boolean || false | Use rounded buttons|
| button_type | [ColorTypes](../enums.md#ColorTypes) |white, black, light, dark, primary, link, info, success, warning, danger|  | Set the color of the buttons|
| total_pages | MaybeRef\<number\> ||  | The total number of pages available|
| current_page | MaybeRef\<number\> ||  | The current page number|
| zero_page_index | boolean || true | Set to true if the first page is 0|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| moveForward||Emitted when the Move Forward button is clicked|
| moveBack||Emitted when the Move Back button is clicked|
| goToPage|number|Emitted when a given page number is clicked|
