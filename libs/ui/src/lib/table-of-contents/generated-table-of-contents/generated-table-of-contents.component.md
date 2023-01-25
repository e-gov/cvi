## General description

Feature | Description
- | -
Selector | `cvi-ng-generated-table-of-contents`
Component name | `GeneratedTableOfContentsComponent`
Design system module | -
Content | yes
Permitted parent/ancestors | any
Permitted children | any

## Where to use

Automatically generates a table of contents sidebar to textual page content that represents raw HTML wrapped into an external component.

Don't use this if you have full control over template. Use `cvi-ng-table-of-contents-wrapper` along with `cvi-ng-table-of-contents` and `cvi-ng-table-of-contents-item` directly instead.

## How to use

1. Add `cvi-ng-generated-table-of-contents` to a page-wide slot in a view;
2. as its content, add a number of divs or a component with raw HTML that contains some headings (`h1`, `h2`, or `h3`);
3. a table of contents will automatically be created and the headings will appear there.
