"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[6388],{"./libs/ui/src/lib/toast/toast.html.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>toast_html_stories});const toast_html_stories={title:"HTML/Toast",parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSass component | `cvi-toast-container`, `cvi-toast`\nCorresponding Javascript service | `ToastService`\nPermitted parent/ancestors | `body` for `cvi-toast-container`\nPermitted Sass components as children | -\n\n## Where to use\n\nUse as toasts - transient notifications appearing in a screen corner.\n\n## How to use\n\nAdd a div with class `cvi-toast-container` to DOM at page load and append a `cvi-toast` into it to show a toast.\n"}},options:{selectedPanel:"storybook/html/panel"}},argTypes:{title:{name:"Title",table:{category:"Playground"},control:{type:"text"}},content:{name:"Content",table:{category:"Playground"},control:{type:"text"}}},args:{title:"Toast title",content:"Message"}},Default={render:args=>({props:args,template:'\n      <div class="cvi-toast-container">\n        <div class="cvi-toast cvi-toast--appearance-error" role="alert" aria-live="assertive" aria-atomic="true">\n          <h1 class="cvi-toast__title">\n            <span class="cvi-toast__icon-wrapper">\n              <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class="cvi-toast__icon" height="24px">\n                <path d="M6.333 3.666h1.334V5H6.334V3.666Zm0 2.667h1.334v4H6.334v-4Zm.667-6A6.67 6.67 0 0 0 .333 7 6.669 6.669 0 0 0 7 13.666 6.669 6.669 0 0 0 13.667 7 6.669 6.669 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.666 5.34 5.34 0 0 1 12.334 7 5.34 5.34 0 0 1 7 12.333Z"></path>\n              </svg>\n            </span>\n            <span class="cvi-toast__title-text">{{ title }}</span>\n            <button aria-label="Close" class="cvi-toast__close-button">\n              <span class="cvi-toast__close-button-inner">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="cvi-toast__close-button-icon" height="24px">\n                  <path d="M14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7 14 1.4z"></path>\n                </svg>\n              </span>\n            </button>\n          </h1>\n          <div class="cvi-toast__message">{{ content }}</div>\n          <div class="cvi-toast__progress-bar" style="width: 9.4816%;"></div>\n        </div>\n      </div>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: unknown) => ({\n    props: args,\n    /* template */\n    template: `\n      <div class="cvi-toast-container">\n        <div class="cvi-toast cvi-toast--appearance-error" role="alert" aria-live="assertive" aria-atomic="true">\n          <h1 class="cvi-toast__title">\n            <span class="cvi-toast__icon-wrapper">\n              <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class="cvi-toast__icon" height="24px">\n                <path d="M6.333 3.666h1.334V5H6.334V3.666Zm0 2.667h1.334v4H6.334v-4Zm.667-6A6.67 6.67 0 0 0 .333 7 6.669 6.669 0 0 0 7 13.666 6.669 6.669 0 0 0 13.667 7 6.669 6.669 0 0 0 7 .333Zm0 12A5.34 5.34 0 0 1 1.667 7 5.34 5.34 0 0 1 7 1.666 5.34 5.34 0 0 1 12.334 7 5.34 5.34 0 0 1 7 12.333Z"></path>\n              </svg>\n            </span>\n            <span class="cvi-toast__title-text">{{ title }}</span>\n            <button aria-label="Close" class="cvi-toast__close-button">\n              <span class="cvi-toast__close-button-inner">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="cvi-toast__close-button-icon" height="24px">\n                  <path d="M14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7 14 1.4z"></path>\n                </svg>\n              </span>\n            </button>\n          </h1>\n          <div class="cvi-toast__message">{{ content }}</div>\n          <div class="cvi-toast__progress-bar" style="width: 9.4816%;"></div>\n        </div>\n      </div>\n    `\n  })\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);