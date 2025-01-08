# Promised

Used to supply a Promise component that expects a Promise to be supplied and will render accordingly
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| promise | MaybeRef\<Promise\<unknown\|null\>\|unknown\|null\> ||  | The Promise that this component is build around|
## Slots

| Name    | Description |
| ------- | ------- |
| pending|used to display something while promise is Pending, defaults to a small progress bar|
| rejected|used to display something when a promise is Rejected, defaults to a Notification with the error|
| default|used to display whatever content should be rendered through a resolved promise, passing the data in from the promise|
