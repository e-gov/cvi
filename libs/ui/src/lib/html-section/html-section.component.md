## General description

Feature | Description
- Selector | `cvi-ng-html-section`
- Component name | `HtmlSectionComponent`
- Design system module | ui
- Content | no
- Permitted parent/ancestors | any
- Permitted children | no

## Where to use

Use if you need to display html content.

Html sanitizer is configured to check custom elements (Web Components), thus sanitizer's allowed attributes are also configured using custom elements' mapped attributes.

For example, if you need to use `cvi-ng-track` component in the `html` input value, use corresponding custom element `cvi-web-track` and dash-separated lowercase attribute names `flex-direction="vertical"` instead of usual property binding.
