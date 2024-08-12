"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[2904],{"./libs/ui/src/lib/select/select.html.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>select_html_stories});const select_html_stories={title:"HTML/Form/Select",parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSass component | `cvi-select`\nCorresponding Javascript component | `SelectComponent`\nPermitted parent/ancestors | `cvi-form-item`\nPermitted Sass components as children | -\n\n## Where to use\n\nStyled custom select. Use inside of `cvi-form-item`.\n\n## How to use\n\nAdd directly to HTML using `.cvi-select*` classes or `@include` mixin `@cvi-select` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.\n"}},options:{selectedPanel:"storybook/html/panel"}},argTypes:{containerWidth:{name:"Container width",table:{category:"Playground"},control:{type:"number"}}},args:{placeholder:"Otsi elementi või lisa uss 🐍",containerWidth:220}},Default={render:args=>({props:args,template:'\n      <div style="width: {{ containerWidth }}px">\n        <div class="cvi-form-item cvi-form-item--label-position-top">\n          <label for="some-input-id" id="some-label-id" class="cvi-form-item__label">Some label</label>\n          <div>\n            <div class="cvi-select">\n              <div class="cvi-select__container">\n                <div class="cvi-select__value-container">\n                  <div class="cvi-select__placeholder">{{ placeholder }}</div>\n                </div>\n                <div class="cvi-select__input-container">\n                  <input\n                    type="text"\n                    role="combobox"\n                    autocomplete="off"\n                    aria-autocomplete="both"\n                    aria-haspopup="listbox"\n                    aria-activedescendant="listbox-item-id-2"\n                    aria-controls="some-list-id"\n                    aria-owns="some-list-id"\n                    aria-expanded="true"\n                    class="cvi-select__input"\n                    id="some-input-id"\n                  />\n                </div>\n                <span class="cvi-select__icon-wrapper">\n                  <svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg" class="cvi-select__icon-svg" height="24px">\n                    <path d="M5.366 7.485.264 2.384a.897.897 0 0 1 0-1.272l.848-.848a.897.897 0 0 1 1.272 0L6 3.881 9.616.264a.897.897 0 0 1 1.272 0l.848.848a.896.896 0 0 1 0 1.272L6.633 7.485a.892.892 0 0 1-1.268 0Z"></path>\n                  </svg>\n                </span>\n              </div>\n              <div class="cvi-dropdown-popup">\n                <div class="cvi-dropdown-popup__inner">\n                  <ul role="listbox" aria-labelledby="some-label-id" id="some-list-id">\n                    <li role="option" tabindex="0" aria-selected="false" class="cvi-dropdown-popup__dropdown-item" id="listbox-item-id-0">\n                      <span class="cvi-dropdown-popup__item-label">Item 1 that is not that short but actually quite long</span>\n                    </li>\n                    <li role="option" tabindex="0" aria-selected="true" class="cvi-dropdown-popup__dropdown-item is-current" id="listbox-item-id-1">\n                      <span class="cvi-dropdown-popup__item-label">Current item 2</span>\n                    </li>\n                    <li role="option" tabindex="0" aria-selected="false" class="cvi-dropdown-popup__dropdown-item is-focused" id="listbox-item-id-2">\n                      <span class="cvi-dropdown-popup__item-label">Item selected from keyboard</span>\n                    </li>\n                    <li role="option" tabindex="0" aria-selected="false" class="cvi-dropdown-popup__dropdown-item" id="listbox-item-id-3">\n                      <span class="cvi-dropdown-popup__item-label">Item 4</span>\n                    </li>\n                    <li role="option" tabindex="0" aria-selected="false" class="cvi-dropdown-popup__dropdown-item" id="listbox-item-id-4">\n                      <span class="cvi-dropdown-popup__item-label">Item 5</span>\n                    </li>\n                    <li role="option" tabindex="0" aria-selected="false" class="cvi-dropdown-popup__dropdown-item" id="listbox-item-id-5">\n                      <span class="cvi-select__item-label">Item 6 with a very long text spanning many lines</span>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: unknown) => ({\n    props: args,\n    /* template */\n    template: `\n      <div style="width: {{ containerWidth }}px">\n        <div class="cvi-form-item cvi-form-item--label-position-top">\n          <label for="some-input-id" id="some-label-id" class="cvi-form-item__label">Some label</label>\n          <div>\n            <div class="cvi-select">\n              <div class="cvi-select__container">\n                <div class="cvi-select__value-container">\n                  <div class="cvi-select__placeholder">{{ placeholder }}</div>\n                </div>\n                <div class="cvi-select__input-container">\n                  <input\n                    type="text"\n                    role="combobox"\n                    autocomplete="off"\n                    aria-autocomplete="both"\n                    aria-haspopup="listbox"\n                    aria-activedescendant="listbox-item-id-2"\n                    aria-controls="some-list-id"\n                    aria-owns="some-list-id"\n                    aria-expanded="true"\n                    class="cvi-select__input"\n                    id="some-input-id"\n                  />\n                </div>\n                <span class="cvi-select__icon-wrapper">\n                  <svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg" class="cvi-select__icon-svg" height="24px">\n                    <path d="M5.366 7.485.264 2.384a.897.897 0 0 1 0-1.272l.848-.848a.897.897 0 0 1 1.272 0L6 3.881 9.616.264a.897.897 0 0 1 1.272 0l.848.848a.896.896 0 0 1 0 1.272L6.633 7.485a.892.892 0 0 1-1.268 0Z"></path>\n                  </svg>\n                </span>\n              </div>\n              <div class="cvi-dropdown-popup">\n                <div class="cvi-dropdown-popup__inner">\n                  <ul role="listbox" aria-labelledby="some-label-id" id="some-list-id">\n                    <li role="option" tabindex="0" aria-selected="false" class="cvi-dropdown-popup__dropdown-item" id="listbox-item-id-0">\n                      <span class="cvi-dropdown-popup__item-label">Item 1 that is not that short but actually quite long</span>\n                    </li>\n                    <li role="option" tabindex="0" aria-selected="true" class="cvi-dropdown-popup__dropdown-item is-current" id="listbox-item-id-1">\n                      <span class="cvi-dropdown-popup__item-label">Current item 2</span>\n                    </li>\n                    <li role="option" tabindex="0" aria-selected="false" class="cvi-dropdown-popup__dropdown-item is-focused" id="listbox-item-id-2">\n                      <span class="cvi-dropdown-popup__item-label">Item selected from keyboard</span>\n                    </li>\n                    <li role="option" tabindex="0" aria-selected="false" class="cvi-dropdown-popup__dropdown-item" id="listbox-item-id-3">\n                      <span class="cvi-dropdown-popup__item-label">Item 4</span>\n                    </li>\n                    <li role="option" tabindex="0" aria-selected="false" class="cvi-dropdown-popup__dropdown-item" id="listbox-item-id-4">\n                      <span class="cvi-dropdown-popup__item-label">Item 5</span>\n                    </li>\n                    <li role="option" tabindex="0" aria-selected="false" class="cvi-dropdown-popup__dropdown-item" id="listbox-item-id-5">\n                      <span class="cvi-select__item-label">Item 6 with a very long text spanning many lines</span>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    `\n  })\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);