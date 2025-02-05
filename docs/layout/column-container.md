# ColumnContainer

A Column Container component to use to build a set of columns
[Bulma Docs](https://bulma.io/documentation/columns/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| modifiers | [ColumnContainerModifiers](../enums.md#ColumnContainerModifiers)\[\] ||  | Any modifiers to apply to the given columns|
| columns | [Column](../types.md#Column)\[\] ||  | The columns to be defined inside this container|
## Slots

| Name    | Description |
| ------- | ------- |
| col.name|the slot for the content of the given column whose name is either the name property or col-{index}|
