## General description

Feature | Description
- | -
Selector | `veera-ng-table-of-contents-wrapper`
Component name | `TableOfContentsWrapperComponent`
Design system module | -
Content | yes
Permitted parent/ancestors | any
Permitted children | any and `veera-ng-table-of-contents`

## Where to use

Adds a table of contents sidebar to textual page content.

## How to use

1. Add `veera-ng-table-of-contents-wrapper` to a page-wide slot in a view;
2. As its content, add a div with multiple blocks (eg same `div`s) of textual content with `veeraNgToCSection="section-id"` attribute each. You can also add the directive to headings themselves instead. `section-id` must be a unique alphanumeric string in kebab case;
3. To the same `veera-ng-table-of-contents-wrapper` also add `veera-ng-table-of-contents` with a number of `veera-ng-table-of-contents-item` equal to the number of content blocks. Each item should have its `href` prop set to the `section-id` prepended by `#`.
