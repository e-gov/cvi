## General description

Feature | Description
- | -
Sass component | `cvi-screenreader-text`
Corresponding Javascript component | `ScreenreaderTextComponent`
Design system module | -
Permitted parent/ancestors | any
Permitted Sass components as children | text

## When to use

Use to provide some label to an accessibility device while hiding it visually. This will help to avoid a WCAG violation such as "Buttons must have discernible text". This is an alternative technique to using `aria-label` attribute.

## How to use

Add directly to HTML using `.cvi-screenreader-text` class with any element that contains the text. Or `@include` mixin `@cvi-screenreader-text` in your Sass code.
