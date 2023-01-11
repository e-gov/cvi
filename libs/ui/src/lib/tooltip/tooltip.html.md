## General description

Feature | Description
- | -
  Sass component | `veera-tooltip`
  Corresponding Javascript component | `TooltipComponent`
  Design system module | -
  Permitted parent/ancestors | -
  Permitted Sass components as children of accordion items | -

## Where to use



## How to use

Render the tooltip in HTML using `.veera-tooltip*` classes or `@include` mixin `@veera-tooltip` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.

The logic enabling the tooltip to appear should be implemented separately (see the Angular component as an example). You must provide calculate positions of both content block and arrow separately, for the arrow to reposition itself depending on reference element position.
