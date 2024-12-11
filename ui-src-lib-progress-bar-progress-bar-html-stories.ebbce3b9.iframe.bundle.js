"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[4708],{"./libs/ui/src/lib/progress-bar/progress-bar.html.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Mobile:()=>Mobile,__namedExportsOrder:()=>__namedExportsOrder,default:()=>progress_bar_html_stories});const progress_bar_html_stories={title:"HTML/Progress bar",parameters:{docs:{description:{component:"## General description\n\n| Feature                               | Description       |\n|---------------------------------------|-------------------|\n| Sass component                        | `cvi-progress-bar`      |\n| Corresponding Javascript component    | `ProgressBarComponent` |\n| Permitted parent/ancestors            | -               |\n| Permitted Sass components as children | -              |\n\n## Where to use\n\nUse if you need to visualise a progress. The component renders as a circle on mobile and as a horizontal bar on desktop.\n\n## How to use\n\nPass a `--progress` CSS variable with a percent value, `--circle-stroke-width` with a number (unitless) value, and `--circle-radius` with a number (unitless) to the Sass component.\n\nAdd directly to HTML using `.cvi-progress-bar*` classes or `@include` mixin `@cvi-progress-bar` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.\n"}},options:{selectedPanel:"storybook/html/panel"},layout:"padded"},argTypes:{content:{name:"Content",table:{category:"Playground"}}}},Default={render:args=>({props:args,template:'\n      <div class="cvi-progress-bar" style="--progress: 67%; --circle-stroke-width: 16; --circle-radius: 90;">\n        <div class="cvi-progress-bar__label-wrapper">\n          <span class="cvi-progress-bar__label">Lõpetatud tegevused: </span\n          ><span class="cvi-progress-bar__numeric-content"> 2/3 </span>\n        </div>\n        <div class="cvi-progress-bar__horizontal-bar"></div>\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          class="cvi-progress-bar__circular-bar"\n          width="180"\n          height="180"\n          viewBox="0 0 180 180">\n          <circle\n            class="cvi-progress-bar__circular-bar-background"\n            cx="90"\n            cy="90"\n            r="82"></circle>\n          <circle\n            class="cvi-progress-bar__circular-bar-progress"\n            cx="90"\n            cy="90"\n            r="82"\n            style="stroke-dasharray: 565.487, 565.487; stroke-dashoffset: 186.611;"></circle></svg\n      ></div>\n    '})},Mobile={...Default,parameters:{viewport:{defaultViewport:"iphone12mini"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: any) => ({\n    props: args,\n    template: `\n      <div class="cvi-progress-bar" style="--progress: 67%; --circle-stroke-width: 16; --circle-radius: 90;">\n        <div class="cvi-progress-bar__label-wrapper">\n          <span class="cvi-progress-bar__label">Lõpetatud tegevused: </span\n          ><span class="cvi-progress-bar__numeric-content"> 2/3 </span>\n        </div>\n        <div class="cvi-progress-bar__horizontal-bar"></div>\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          class="cvi-progress-bar__circular-bar"\n          width="180"\n          height="180"\n          viewBox="0 0 180 180">\n          <circle\n            class="cvi-progress-bar__circular-bar-background"\n            cx="90"\n            cy="90"\n            r="82"></circle>\n          <circle\n            class="cvi-progress-bar__circular-bar-progress"\n            cx="90"\n            cy="90"\n            r="82"\n            style="stroke-dasharray: 565.487, 565.487; stroke-dashoffset: 186.611;"></circle></svg\n      ></div>\n    `\n  })\n}',...Default.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  parameters: {\n    viewport: {\n      defaultViewport: 'iphone12mini'\n    }\n  }\n}",...Mobile.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Mobile"]}}]);