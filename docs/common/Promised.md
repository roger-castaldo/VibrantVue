# Promised

Used to supply a Promise component that expects a Promise to be supplied and will render accordingly
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| promise | Promise\<unknown\|null\>\|unknown\|null\|undefined ||  | The Promise that this component is build around|
| pending_delay | number\|string || 200 | The Pending delay to use prior to displaying pending|
## Slots

| Name    | Description |
| ------- | ------- |
| pending|used to display something while promise is Pending, defaults to a small progress bar|
| rejected|used to display something when a promise is Rejected, defaults to a Notification with the error|
| default|used to display whatever content should be rendered through a resolved promise, passing the data in from the promise|
