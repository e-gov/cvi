## General description

Feature | Description
- | -
Sass component | `veera-status-badge`
Corresponding Javascript component | `StatusBadgeComponent`
Design system module | -
Permitted parent/ancestors | any
Permitted Sass components as children | text

## Where to use

Adds a colored status badge with some text.

## How to use

Pass `--color`, `--background-color`, and optionally `--border-color` CSS variables to the Sass component. (See example colors in `status-badge.ts`.)

Add directly to HTML using `.veera-status-badge*` classes or `@include` mixin `@veera-status-badge` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.
