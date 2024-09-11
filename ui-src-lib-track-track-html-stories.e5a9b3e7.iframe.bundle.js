"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[4152],{"./libs/ui/src/lib/track/track.html.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Mobile:()=>Mobile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>track_html_stories});const categoryFlex={table:{category:"Props (flex only)"}},track_html_stories={title:"HTML/Track",parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSass component | `cvi-track`\nCorresponding Javascript component | `TrackComponent`\nDesign system module | -\nPermitted parent/ancestors | any\nPermitted Sass components as children | -\n\n## When to use\n\nUse with multiple children to provide a flex- or grid-like layout and ensure equal gaps between them. CSS variables can be used to customise the layout. In your Javascript component you can assign the CSS variables to conveniently named props.\n\n## How to use\n\nAdd directly to HTML using `.cvi-track*` classes or `@include` mixin `@cvi-track` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.\n"}},options:{selectedPanel:"storybook/html/panel"},layout:"padded"},argTypes:{gap:{name:"Gap",control:{type:"range",min:0,max:20,step:1}},horizontalAlignment:{name:"Horizontal alignment",options:["normal","flex-start","center","flex-end","space-between"],control:{type:"inline-radio"},if:{arg:"flexDirection",eq:"horizontal"}},verticalAlignment:{name:"Vertical alignment",options:["normal","flex-start","center","flex-end"],control:{type:"inline-radio"},if:{arg:"flexDirection",eq:"horizontal"}},flexDirection:{name:"Direction",options:["horizontal","vertical","vertical-on-mobile","vertical-reversed-on-mobile"],control:{type:"inline-radio"},...categoryFlex},layout:{name:"Layout method",options:["flex","grid"],control:{type:"inline-radio"}},flexIsMultiline:{name:"Is multiline",options:["nowrap","wrap"],control:{type:"inline-radio"},...categoryFlex},flexColumnsEqual:{name:"Items have equal width",...categoryFlex},gridRows:{name:"Grid rows",control:{type:"number",min:1,max:20,step:1},table:{category:"Props (grid only)"}}},args:{gap:1,layout:"flex",horizontalAlignment:"normal",verticalAlignment:"normal",flexDirection:"horizontal",flexIsMultiline:"nowrap",flexColumnsEqual:!1,gridRows:void 0}},Default={render:args=>({props:args,template:'\n      <div class="cvi-track cvi-track--layout-{{ layout }} cvi-track--direction-{{ flexDirection }}" [ngClass]="{\'cvi-track--items-have-equal-width\': flexColumnsEqual, \'cvi-track--has-rows\': !!gridRows}" style="--gap: {{ gap }}; --horizontal-alignment: {{ horizontalAlignment }}; --vertical-alignment: {{ verticalAlignment }}; --wrap: {{ flexIsMultiline }}; --rows: {{ gridRows }}">\n        <div class="cvi-button cvi-button--appearance-primary">\n          <button type="button" class="cvi-button__button">Button 1</button>\n        </div>\n        <div class="cvi-button cvi-button--appearance-primary">\n          <button type="button" class="cvi-button__button">Button 2</button>\n        </div>\n        <div class="cvi-button cvi-button--appearance-primary">\n          <button type="button" class="cvi-button__button">Button 3 with a longer text that does not fit anywhere</button>\n        </div>\n        <div class="cvi-button cvi-button--appearance-primary">\n          <button type="button" class="cvi-button__button">Button 4</button>\n        </div>\n      </div>\n    '})},Mobile={...Default,parameters:{viewport:{defaultViewport:"iphone12mini"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: unknown) => ({\n    props: args,\n    /* template */\n    template: `\n      <div class="cvi-track cvi-track--layout-{{ layout }} cvi-track--direction-{{ flexDirection }}" [ngClass]="{\'cvi-track--items-have-equal-width\': flexColumnsEqual, \'cvi-track--has-rows\': !!gridRows}" style="--gap: {{ gap }}; --horizontal-alignment: {{ horizontalAlignment }}; --vertical-alignment: {{ verticalAlignment }}; --wrap: {{ flexIsMultiline }}; --rows: {{ gridRows }}">\n        <div class="cvi-button cvi-button--appearance-primary">\n          <button type="button" class="cvi-button__button">Button 1</button>\n        </div>\n        <div class="cvi-button cvi-button--appearance-primary">\n          <button type="button" class="cvi-button__button">Button 2</button>\n        </div>\n        <div class="cvi-button cvi-button--appearance-primary">\n          <button type="button" class="cvi-button__button">Button 3 with a longer text that does not fit anywhere</button>\n        </div>\n        <div class="cvi-button cvi-button--appearance-primary">\n          <button type="button" class="cvi-button__button">Button 4</button>\n        </div>\n      </div>\n    `\n  })\n}',...Default.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  parameters: {\n    viewport: {\n      defaultViewport: 'iphone12mini'\n    }\n  }\n}",...Mobile.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Mobile"]}}]);