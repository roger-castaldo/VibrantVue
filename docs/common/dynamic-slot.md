# DynamicSlot

This is used to dynamically load multiple components as a set of dynamic items
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| props | any ||  | The props to pass to all the loaded child components|
| url | string ||  | The url to load the components from|
| filter | string ||  | Used to filter out some of the loaded components by name|
| sortMethod | ()=>unknown ||  | The method used to sort the components|
