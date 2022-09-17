## General description

Feature | Description
- | -
Sass component | `veera-labeled-icon`
Corresponding Javascript component | `LabeledIconComponent`
Design system module | -
Permitted parent/ancestors | any
Permitted Sass components as children of accordion items | any

## Where to use

Use where there is a need to display an SVG icon with a mandatory label. Otherwise use `veera-icon`.

## How to use

Add directly to HTML using `.veera-labeled-icon*` classes or `@include` mixin `@veera-labeled-icon` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.
