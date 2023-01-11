## General description

Feature | Description
- | -
Sass component | `veera-track`
Corresponding Javascript component | `TrackComponent`
Design system module | -
Permitted parent/ancestors | any
Permitted Sass components as children | -

## When to use

Use with multiple children to provide a flex- or grid-like layout and ensure equal gaps between them. CSS variables can be used to customise the layout. In your Javascript component you can assign the CSS variables to conveniently named props.

## How to use

Add directly to HTML using `.veera-track*` classes or `@include` mixin `@veera-track` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.
