## General description

| Feature                               | Description       |
|---------------------------------------|-------------------|
| Sass component                        | `cvi-circle`      |
| Corresponding Javascript component    | `CircleComponent` |
| Permitted parent/ancestors            | any               |
| Permitted Sass components as children | text              |

## Where to use

To display a themed circle with icon or given content.

## How to use

Pass `--border-color`, `--color`, `--background-color` and `--progress-background-color` CSS variables to the Sass
component. (See example values in `circle.ts`)

Add directly to HTML using `.cvi-circle*` classes or `@include` mixin `@cvi-circle` in your Sass code. When including
the mixin, you can change the base class with `$base` parameter.
