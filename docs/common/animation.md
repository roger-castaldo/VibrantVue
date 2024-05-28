# Animation

When supplying properties, the combinations should either be incoming and outgoing if seperate types are desired.\
Otherwise supply inout and it will use that for both enter an exit.\
If the desire is to repeat, specify repeating and do not specify the previous ones.\
If the speed for either enter and exit is desired to be the same, specify speed.\
Otherwise specify speedin or speedout or both.  These will not apply to repeating, speed will apply to repeating.
[Animate.css library](https://animate.style/)
## Props

| Name    | Type | Values | Default | Description |
| -------- | ------- | -------- | ------- | ------- |
| incoming | [AnimationTypes](../enums.md#AnimationTypes) |bounce, flash, pulse, rubberBand, shakeX, shakeY, headShake, swing, tada, wobble, jello, heartBeat, backOutDown, backOutLeft, backOutRight, backOutUp, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOut, boundOutDown, bounce[...](../enums.md#AnimationTypes)|  | The incoming animation to use for an item entering|
| outgoing | [AnimationTypes](../enums.md#AnimationTypes) |bounce, flash, pulse, rubberBand, shakeX, shakeY, headShake, swing, tada, wobble, jello, heartBeat, backOutDown, backOutLeft, backOutRight, backOutUp, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOut, boundOutDown, bounce[...](../enums.md#AnimationTypes)|  | The outgoing animation to use for an item exiting|
| inout | [AnimationTypes](../enums.md#AnimationTypes) |bounce, flash, pulse, rubberBand, shakeX, shakeY, headShake, swing, tada, wobble, jello, heartBeat, backOutDown, backOutLeft, backOutRight, backOutUp, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOut, boundOutDown, bounce[...](../enums.md#AnimationTypes)|  | The animation to use for an item entering and exiting|
| speed | [AnimationSpeeds](../enums.md#AnimationSpeeds) |slower, slow, fast, faster| AnimationSpeeds.slow | The speed of the animation|
| speedIn | [AnimationSpeeds](../enums.md#AnimationSpeeds) |slower, slow, fast, faster|  | The speed of the animation for an item entering|
| speedOut | [AnimationSpeeds](../enums.md#AnimationSpeeds) |slower, slow, fast, faster|  | The speed of the animation for an item exiting|
| repeating | [AnimationTypes](../enums.md#AnimationTypes) |bounce, flash, pulse, rubberBand, shakeX, shakeY, headShake, swing, tada, wobble, jello, heartBeat, backOutDown, backOutLeft, backOutRight, backOutUp, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOut, boundOutDown, bounce[...](../enums.md#AnimationTypes)|  | The repeating animation to use for an item|
## Slots

| Name    | Description |
| ------- | ------- |
| default|Content to be animated|
