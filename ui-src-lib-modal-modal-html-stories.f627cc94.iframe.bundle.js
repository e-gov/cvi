"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[5128],{"./libs/ui/src/lib/modal/modal.html.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_html_stories});const modal_html_stories={title:"HTML/Modal",parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSass component | `cvi-modal`\nCorresponding Javascript component | `ModalComponent`\nDesign system module | -\nPermitted parent/ancestors | any\nPermitted Sass components as children of accordion items | any\n\n## Where to use\n\nUtilise where there is a need to show modal with backdrop\n\n## How to use\n\nAdd directly to HTML using `.cvi-modal*` classes or `@include` mixin `@cvi-modal` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.\n"}},options:{selectedPanel:"storybook/html/panel"}}},Default={render:args=>({props:args,template:'\n      <div class="cvi-modal">\n        <div class="cvi-modal__dialog" role="dialog" aria-label="Hi!">\n          <button class="cvi-modal__close" aria-label="Close">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14px">\n              <path d="M14,1.4L12.6,0L7,5.6L1.4,0L0,1.4L5.6,7L0,12.6L1.4,14L7,8.4l5.6,5.6l1.4-1.4L8.4,7L14,1.4z"/>\n            </svg>\n          </button>\n          <h2 class="cvi-modal__title">Hi!</h2>\n          <div class="cvi-modal__content">\n            <p>I\'m modal</p>\n          </div>\n          <div class="cvi-modal__footer">\n            <div class="cvi-track cvi-track--direction-vertical-reversed-on-mobile cvi-track--layout-flex" style="--gap:2; --horizontal-alignment: flex-end;">\n              <div class="cvi-button cvi-button--appearance-secondary cvi-button--size-m">\n                <button type="button" class="cvi-button__button">Cancel</button>\n              </div>\n              <div class="cvi-button cvi-button--appearance-primary cvi-button--size-m">\n                <button type="button" class="cvi-button__button">Confirm</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="cvi-modal__backdrop"></div>\n      </div>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: unknown) => ({\n    props: args,\n    /* template */\n    template: `\n      <div class="cvi-modal">\n        <div class="cvi-modal__dialog" role="dialog" aria-label="Hi!">\n          <button class="cvi-modal__close" aria-label="Close">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14px">\n              <path d="M14,1.4L12.6,0L7,5.6L1.4,0L0,1.4L5.6,7L0,12.6L1.4,14L7,8.4l5.6,5.6l1.4-1.4L8.4,7L14,1.4z"/>\n            </svg>\n          </button>\n          <h2 class="cvi-modal__title">Hi!</h2>\n          <div class="cvi-modal__content">\n            <p>I\'m modal</p>\n          </div>\n          <div class="cvi-modal__footer">\n            <div class="cvi-track cvi-track--direction-vertical-reversed-on-mobile cvi-track--layout-flex" style="--gap:2; --horizontal-alignment: flex-end;">\n              <div class="cvi-button cvi-button--appearance-secondary cvi-button--size-m">\n                <button type="button" class="cvi-button__button">Cancel</button>\n              </div>\n              <div class="cvi-button cvi-button--appearance-primary cvi-button--size-m">\n                <button type="button" class="cvi-button__button">Confirm</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="cvi-modal__backdrop"></div>\n      </div>\n    `\n  })\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);