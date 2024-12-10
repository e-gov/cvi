## General description

| Feature                               | Description       |
|---------------------------------------|-------------------|
| Sass component                        | `cvi-progress-bar`      |
| Corresponding Javascript component    | `ProgressBarComponent` |
| Permitted parent/ancestors            | -               |
| Permitted Sass components as children | -              |

## Where to use

Use if you need to visualise a progress. The component renders as a circle on mobile and as a horizontal bar on desktop.

## How to use

Pass a `--progress` CSS variable with a percent value, `--circle-stroke-width` with a number (unitless) value, and `--circle-radius` with a number (unitless) to the Sass component.

Add directly to HTML using `.cvi-progress-bar*` classes or `@include` mixin `@cvi-progress-bar` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.
