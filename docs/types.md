# Types

## [MenuItem](#MenuItem)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|title|MaybeRef\<string\>\|string|The title to use in the menu item|
|active?|boolean|Inidicates if this menu item is active|
|icon?|string|The icon to use for the menu item|
|href?|string|The url of the menu item|
|onClick?|()=\>void|The click call back to call when this menu item is clicked|


## [ParentMenuItem](#ParentMenuItem)

### Inherits

- [MenuItem](#MenuItem)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|childItems?|MenuItem\[\]|The child items of this menu item|


## [WizardStep](#WizardStep)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|name|string|The name of the Wizard Step, this is used as the slot name|
|title|MaybeRef\<string\>\|string|The title to display for this Step|
|icon?|string|The icon to use in the step title|
|description?|string|A description of the step|
|type?|NoticeTypes|The color styling to use for this step|
|is_valid?|boolean|Indicates if this step is currently valid|


## [DropDownItem](#DropDownItem)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|title|MaybeRef\<string\>\|string|The title (content) for the drop down item|
|active?|boolean|Indicates if it is currently active|
|icon?|string|The icon to display with it|
|href?|string|The url of the drop down item|
|onClick?|()=\>void|The click call back to call when this drop down item is clicked|


## [DropDownBlock](#DropDownBlock)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|children|(string\|DropDownItem)\[\]|The collection of Drop Down items to block together|


## [AutoCompleteEntry](#AutoCompleteEntry)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|method|string|The method for the auto complete entry|
|description|string|The description to display when suggesting it|


## [GridColumn](#GridColumn)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|id|string|The unique ID to use for the column|
|propertyName?|string|The name of the property from the data object for the column|
|title?|MaybeRef\<string\>|The title to put in the table header for this column|
|headerColspan?|number|The column span to apply to the table header cell|
|headerRowspan?|number|The row span to apply to the table header cell|
|headerClass?|MaybeRef\<string\>\|MaybeRef\<string\[\]\>|Additional classes to apply the table header cell|
|dataColspan?|number|The column span to apply to the table body cell|
|dataRowspan?|number|The row  span to apply to the table body cell|
|cellClass?|MaybeRef\<string\>\|MaybeRef\<string\[\]\>|The class to apply to the table body cell|
|headerOnly?|boolean|Indicates if this column only exists in the header|
|canSort?|boolean|Indicates if this column can be sorted|
|getCellColor?|(rowIndex:number,row:any,data:any\|undefined)=\>ColorTypes\|null\|undefined|Called to get a color for a given table body cell|


## [CellData](#CellData)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|rowIndex|number|The index in the data of the grid|
|data|any|The data value obtained from the propertyName for this column|
|row|any|The data object in the data for the grid and the given index|


## [GridSort](#GridSort)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|column|string|The column to sort the grid by|
|ascending|boolean|Indicates if the sort order should be ascending|


## [ValueChangedEvent](#ValueChangedEvent)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|name|string|Name of the form element that changed|
|value|any|The new value|


## [ListItemValue](#ListItemValue)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|value|any|The value for this list item that will be used when selected|
|label|string|What to display on the screen|
|selected?|boolean|Indicates if the item is currently selected|


## [SelectListItemValue](#SelectListItemValue)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|value|any|The value for this list item that will be used when selected|
|label|string|What to display on the screen|
|selected?|boolean|Indicates if the item is currently selected|
|values?|SelectListItemValue\[\]|Child items if this item is a group|


## [FormInputType](#FormInputType)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|type|string|The type of input in the form|
|name?|string|The name of the input (used in getting/setting values, etc)|
|subtype?|string|The subtype (sometimes required in the case of something like text)|
|label?|string|The label for the item if needed|
|required?|boolean|Indicates if the field is required|
|style?|ColorTypes|Set a specific color for it|
|className?|string|Additional classes if needed|
|icon?|string|Icon to use for it|
|value?|any|Value for it|
|disabled?|boolean|Indicates if it is disabled|
|form_columns?|number|Number of columns that are taken up from 1 - 12|
|Translate?|(value:string)=\>string|Custom translate function if desired from defaults|


## [Column](#Column)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|size?|ColumnSizes|The size of the column|
|offset?|ColumnOffsetSizes|The offset to use for the column|
|border?|BorderTypes\[\]|The border(s) to apply to the column|
|name?|string|The name of the column, if not supplied, the slot will be names #col-$index|
|class?|string|Additional classes to apply to the column if needed|


## [ListItem](#ListItem)

### Properties

| Name | Type | Description |
| ------- | ------- | ------- |
|type?|ColorTypes|The color of the list item|
|outlined?|boolean|Indicates if the list item is styled by outline|
|highlighted?|boolean|Indicates if the list item is styled by highlight|
|icon?|string|Add on Icon to the list item|
|name?|string|The name to use for identifying the slot|
|onClick?|()=\>void|The click call back to call when the icon is clicked|


