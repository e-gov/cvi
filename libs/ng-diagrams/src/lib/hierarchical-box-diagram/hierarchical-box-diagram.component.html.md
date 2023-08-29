## General Description

| Feature  | Description                               |
|----------|-------------------------------------------|
| Angular Component | `HierarchicalBoxDiagramComponent`    |
| Corresponding Typescript Class | `HierarchicalBoxDiagramComponent` |
| Permitted Parent/Ancestors | Any                            |
| Permitted Angular Components as Children | None          |

## Where to Use

This component is designed to display a diagram that illustrates hierarchical relationships between different elements. It's useful in scenarios like visualizing workflows, decision trees, or file system structures.

## How to Use

### In Angular Template

Add the `cvi-ng-hierarchical-box-diagram` tag to your HTML template:

```html
<cvi-ng-hierarchical-box-diagram [boxes]="yourBoxArray"></cvi-ng-hierarchical-box-diagram>
```

### In TypeScript

Define a `boxes` array within your Angular component's TypeScript file. Then bind it to the `[boxes]` input attribute of the `cvi-ng-hierarchical-box-diagram` component.

```typescript
boxes = [
{
id: '1',
href: 'https://example.com/1',
label: '<p style="color:#D73E3E">Health concern</p>',
targets: ['2', '7'],
// ...additional style properties
},
// ...other boxes
];
```

### Box Properties

Each object in the `boxes` array must include:

id: string;
label: string;
color: string;
borderStyle: 'none' | 'dotted' | 'solid';
borderColor?: string;
targets?: string[];
href?: string;

- `id`: A unique identifier for each box.
- `label`: The label to display inside the box.
- `color`: A color for the box fill. Valid values are all hex and color codes.

- Each object in the boxes array may define:
- `targets`: An array of `id`s representing target boxes that this box connects to. Optional.
- `href`: The URL to which the box links. Since the label can be html then the user can make specific parts of the label as links and not use this option if the goal is to have embedded links. Optional.
- `borderColor`: A color for the border, default is the same as the box color. Valid values are all hex and color codes. Optional.
- `borderStyle`: A style for the border, default is none. Allowed values 'none', 'dotted', 'solid'. Optional.

#### Example

```typescript
{
id: '1',
color: '#F0F0F2'
href: 'https://example.com/1',
label: '<p style="color:#D73E3E">Health concern</p>',
targets: ['2', '7'],
borderStyle: 'solid'
borderColor: '#D73E3E'
},
{
id: '2',
color: '#F0F0F2'
href: 'https://example.com/2',
label: '<p style="color:#D73E3E">Health concern 2</p>',
targets: [],
borderStyle: 'solid'
borderColor: '#D73E3E'
},
{
id: '7',
color: '#F0F0F2'
href: 'https://example.com/7',
label: '<p style="color:#D73E3E">Health concern 7</p>',
targets: [],
borderStyle: 'solid'
borderColor: '#D73E3E'
}
```

This creates a single box with a solid red border, linking to `https://example.com/1`, and labeled as "Health concern.".
The first box is connected to two other boxes with id's 2 and 7.
---

Feel free to modify, extend, or customize your `boxes` array as needed for your specific use-case.
