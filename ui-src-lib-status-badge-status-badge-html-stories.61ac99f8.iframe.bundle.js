"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[9540],{"./libs/ui/src/lib/status-badge/status-badge.html.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>status_badge_html_stories});const status_badge_html_stories={title:"HTML/Status badge",parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSass component | `cvi-status-badge`\nCorresponding Javascript component | `StatusBadgeComponent`\nDesign system module | -\nPermitted parent/ancestors | any\nPermitted Sass components as children | text\n\n## Where to use\n\nAdds a colored status badge with some text.\n\n## How to use\n\nPass `--color`, `--background-color`, and optionally `--border-color` CSS variables to the Sass component. (See example colors in `status-badge.ts`.)\n\nAdd directly to HTML using `.cvi-status-badge*` classes or `@include` mixin `@cvi-status-badge` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.\n"}},options:{selectedPanel:"storybook/html/panel"},layout:"centered"},argTypes:{content:{name:"Content",table:{category:"Playground"}}},args:{content:"Waiting"}},Default={render:args=>({props:args,template:'\n      <span class="cvi-status-badge" style="--color: var(--cvi-color-sapphire-blue-10); --background-color: var(--cvi-color-sapphire-blue-0)"><div>{{ content }}</div></span>\n    '})},WithIcon={render:args=>({props:args,template:'\n      <span class="cvi-status-badge" style="--color: var(--cvi-color-sapphire-blue-10); --background-color: var(--cvi-color-sapphire-blue-0);">\n        <div>\n          {{ content }}\n          <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class="cvi-status-badge__badge-icon" height="16px">\n            <path d="M6.333 3.666h1.334V5H6.334V3.666Zm0 2.667h1.334v4H6.334v-4Zm.667-6A6.67 6.67 0 0 0 .333 7 6.669 6.669 0 0 0 7 13.666 6.669 6.669 0 0 0 13.667 7 6.669 6.669 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.666 5.34 5.34 0 0 1 12.334 7 5.34 5.34 0 0 1 7 12.333Z"></path>\n          </svg>\n        </div>\n      </span>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: unknown) => ({\n    props: args,\n    /* template */\n    template: `\n      <span class="cvi-status-badge" style="--color: var(--cvi-color-sapphire-blue-10); --background-color: var(--cvi-color-sapphire-blue-0)"><div>{{ content }}</div></span>\n    `\n  })\n}',...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: (args: unknown) => ({\n    props: args,\n    /* template */\n    template: `\n      <span class="cvi-status-badge" style="--color: var(--cvi-color-sapphire-blue-10); --background-color: var(--cvi-color-sapphire-blue-0);">\n        <div>\n          {{ content }}\n          <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class="cvi-status-badge__badge-icon" height="16px">\n            <path d="M6.333 3.666h1.334V5H6.334V3.666Zm0 2.667h1.334v4H6.334v-4Zm.667-6A6.67 6.67 0 0 0 .333 7 6.669 6.669 0 0 0 7 13.666 6.669 6.669 0 0 0 13.667 7 6.669 6.669 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.666 5.34 5.34 0 0 1 12.334 7 5.34 5.34 0 0 1 7 12.333Z"></path>\n          </svg>\n        </div>\n      </span>\n    `\n  })\n}',...WithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithIcon"]}}]);