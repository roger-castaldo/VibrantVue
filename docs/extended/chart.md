# Chart

Used to create a ChartJS chart
[Chart JS](https://www.chartjs.org/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| labels | string\[\] ||  | The labels to use|
| datasets | unknown\[\] ||  | The data sets to supply|
| type | [ChartTypes](../enums.md#ChartTypes) |area, bar, bubble, doughnut, pie, line, polarArea, radar, scatter|  | The type of chart to render|
| title | string ||  | The title for the chart|
| show_refresh | boolean ||  | Inidicates if a Refresh button should be supplied|
| width | number ||  | The width for the chart|
| height | number ||  | The height for the chart|
| legend_position | [ChartLegendPositions](../enums.md#ChartLegendPositions) |top, left, bottom, right, chartArea| ChartLegendPositions.right | The position of the chart legend|
| scales | unknown\[\] ||  | The scales to supply to the chart|
| tooltips | unknown ||  | The tooltips to supply to the chart|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| legendItemClick|unknown|Emitted when a legend item is clicked.  Supplies both the chart object and the legend item clicked|
