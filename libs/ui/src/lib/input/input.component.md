## General description

Feature | Description
- | -
Selector | `veera-ng-input`
Component name | `InputComponent`
Design system module | [Form elements](https://veera.eesti.ee/3d136290e/p/71721d-vormi-elemendid/b/476623)
Content | no
Permitted parent/ancestors | `veera-ng-form-item`
Permitted children | -

## Where to use

Displays a form input. Use with `FormItem` component.

Can be used with character counter directive `veeraNgCharacterCounter`. If set, character counter uses binded `[maxChars]` property for defining maximum value, otherwise it takes the maximum value from `maxlength` attribute of the native HTML element. If neither is set, character counter is not displayed. Sets the `maxlength` value accordingly.