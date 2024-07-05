# StepWizard

Used to supply Step Wizard control\
All steps are 0 based index
[Bulma Docs](https://aramvisser.github.io/bulma-steps/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| steps | [WizardStep](../types.md#WizardStep)\[\] ||  | The steps for the wizard|
| use_previous_next | boolean || true | Inidicates if the actions should be defaulted to Previous/Next/Done|
| size | [Sizes](../enums.md#Sizes) |small, normal, medium, large| Sizes.normal | The size of the steps indicators to use|
| starting_index | number ||  | The starting step index|
| orientation | [StepWizardOrientations](../enums.md#StepWizardOrientations) |default, verticalRight, verticalLeft| StepWizardOrientations.default | The orientation style for the wizard|
## Events

| Name    | Params | Description |
| ------- | ------- | ------- |
| done||Emitted when the wizard is completed (last step succeeded and done clicked)|
| changedStep|number|Emitted when the step is changed to a given index|
## Slots

| Name    | Description |
| ------- | ------- |
| step.name|a slot created for each step named with the step's name|
| actions|a slot created for the actions (as a default) when use_previous_next is false|
| `actions-${step.name}`|a slot created for each of the actions of each step when use_previous_next is false|
## Expose

| Name    | Params | Description |
| ------- | ------- | ------- |
| moveToStep|index:the step index to move to|Used to move to a given step in the wizard|
