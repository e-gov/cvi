## General description

| Feature                    | Description        |
|----------------------------|--------------------|
| Selector                   | `cvi-ng-input`     |
| Component name             | `InputComponent`   |
| Content                    | no                 |
| Permitted parent/ancestors | `cvi-ng-form-item` |
| Permitted children         | -                  |

## Where to use

Displays a form input. Use with `FormItem` component.

Can be used with character counter directive `cviNgCharacterCounter`. If set, character counter uses binded `[maxChars]` property for defining maximum value, otherwise it takes the maximum value from `maxlength` attribute of the native HTML element. If neither is set, character counter is not displayed. Sets the `maxlength` value accordingly.
