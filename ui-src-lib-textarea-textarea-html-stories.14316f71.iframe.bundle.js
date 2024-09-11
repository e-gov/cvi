"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[7923],{"./libs/ui/src/lib/textarea/textarea.html.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCharacterCounter:()=>WithCharacterCounter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>textarea_html_stories});const textarea_html_stories={title:"HTML/Form/Textarea",parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSass component | `components/cvi-textarea`\nCorresponding Javascript component | `TextareaComponent`\nDesign system module | -\nPermitted parent/ancestors | any\nPermitted children | -\n\n## Where to use\n\nA textarea input field.\n"}}},args:{placeholder:"Placeholder...",maxLength:2e3,resizable:!0}},Default={render:args=>({props:args,template:'\n      <span class="cvi-textfield cvi-textfield--type-multiple-lines {{ resizable ? \'\' : \'cvi-textfield--no-resize\' }}">\n        <textarea class="cvi-textfield__text-control" placeholder="{{ placeholder }}" maxLength="{{ maxLength }}"></textarea>\n      </span>\n    '})},WithCharacterCounter={render:args=>({props:args,template:'\n      <span class="cvi-textfield cvi-textfield--type-multiple-lines {{ resizable ? \'\' : \'cvi-textfield--no-resize\' }}">\n        <textarea class="cvi-textfield__text-control" placeholder="{{ placeholder }}" maxLength="{{ maxLength }}"></textarea>\n      </span>\n      <div class="cvi-character-counter">0 / 2000</div>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: unknown) => ({\n    props: args,\n    /* template */\n    template: `\n      <span class="cvi-textfield cvi-textfield--type-multiple-lines {{ resizable ? \'\' : \'cvi-textfield--no-resize\' }}">\n        <textarea class="cvi-textfield__text-control" placeholder="{{ placeholder }}" maxLength="{{ maxLength }}"></textarea>\n      </span>\n    `\n  })\n}',...Default.parameters?.docs?.source}}},WithCharacterCounter.parameters={...WithCharacterCounter.parameters,docs:{...WithCharacterCounter.parameters?.docs,source:{originalSource:'{\n  render: (args: unknown) => ({\n    props: args,\n    /* template */\n    template: `\n      <span class="cvi-textfield cvi-textfield--type-multiple-lines {{ resizable ? \'\' : \'cvi-textfield--no-resize\' }}">\n        <textarea class="cvi-textfield__text-control" placeholder="{{ placeholder }}" maxLength="{{ maxLength }}"></textarea>\n      </span>\n      <div class="cvi-character-counter">0 / 2000</div>\n    `\n  })\n}',...WithCharacterCounter.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithCharacterCounter"]}}]);