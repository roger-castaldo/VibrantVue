# Grid

Used to create a Grid on the screen.\
The grid can support pagination, filtering, etc all layed out in a table that can be defined\
and implemented with minimal parts such as defining the tbody or a loop for the elements
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| zero_page_index | boolean ||  | Set to true if the first page is 0|
| current_page | MaybeRef\<number\> ||  | The current page number|
| total_pages | MaybeRef\<number\> ||  | The total number of pages available|
| button_type | [ColorTypes](../enums.md#ColorTypes) |white, black, light, dark, primary, link, info, success, warning, danger|  | Set the color of the buttons|
| rounded | boolean || false | Use rounded buttons|
| size | [Sizes](../enums.md#Sizes) |small, normal, medium, large| Sizes.small | The size of the pagination buttons|
| has_previous | boolean || undefined | Indicates if there are previous items in the paging so Previous/Older should be enabled|
| has_more | boolean || undefined | Indicates if there are more items in the paging so Next/Newer should be enabled|
| use_next | boolean || true | Indicates if it should use Next/Previous instead of Newer/Older|
| narrow | boolean ||  | Indicates if the table should be made narrow (minimal padding)|
| full_width | boolean ||  | Indicates if the width of the table should be the max allowed and not based on the content|
| fixed_header | boolean ||  | Indicates if the table header should be fixed|
| scrollable | boolean ||  | Indicates of the table is scrollable|
| columns | [GridColumn](../types.md#GridColumn)\[\]\[\] ||  | The columns to define the grid with|
| data | any\[\]\|null ||  | The data belonging to the grid|
| empty_message | string ||  | A custom empty data message if desired|
| column_rows | string\[\]\[\] ||  | Allows modifying how the columns are layed out within the grid by supplying the column ids.<br/>Otherwise it simply goes in the order defined, left to right.|
| has_filter | boolean ||  | Indicates if a Filter should be placed in the header|
| filter_min_length | number ||  | Indicates the minimum length of the filter value to trigger a filter event on if desired other than Enter|
| current_sort | [GridSort](../types.md#GridSort) ||  | Defines how the data is currently sorted|
| is_loading | MaybeRef\<boolean\> ||  | Defines if the data is currently loading|
| getRowColor | ()=>The color for the table body row if desired ||  | Called to get a color for a given table body row|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| moveForward||Emitted when the Forward button is clicked on the Pagination|
| moveBack||Emitted when the Back button is clicked on the Pagination|
| goToPage|number|Emitted when a Specific Page button is clicked on the Pagiation|
| cellClicked|[CellData](../types.md#CellData)|Emitted when a table cell is clicked on|
| sort|[GridSort](../types.md#GridSort)|Emitted when a header that is sortable is clicked on to invoke a sort|
| filter|string\|null|Emitted when the Filter item emits a request to filter|
## Slots

| Name    | Description |
| ------- | ------- |
| `head-${col.id}`|A slot automatically created for each column.  Available to make custom header content for a given column|
| `body-${col.id}`|A slot automatically created for each column.  Available to make custom table cell content for a given column.  Supplied with rowIndex,data,row.|
| tfoot_head|appears prior to where the pagination footer would appear in the tfoot|
| tfoot_bottom|appears after where the pagination footer would appear in the tfoot|
