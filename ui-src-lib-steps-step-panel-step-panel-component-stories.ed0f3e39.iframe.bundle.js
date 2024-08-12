"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[4628],{"./libs/ui/src/lib/steps/step-panel/step-panel.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>step_panel_component_stories});const step_panel_component_stories={title:"Angular/Steps/Step panel",component:__webpack_require__("./libs/ui/src/lib/steps/step-panel/step-panel.component.ts").G,parameters:{layout:"padded",docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSelector | `cvi-ng-step-panel`\nComponent name | `StepPanelComponent`\nDesign system module | -\nContent | yes\nPermitted parent/ancestors | `cvi-ng-step`\nPermitted children | any\n\n## Where to use\n\nIs responsible for rendering tab content panel in `cvi-ng-steps`. This is your primary option when displaying some content in the steps component.\n"}}},argTypes:{content:{name:"Content",table:{category:"Playground"}}},args:{title:"First step",content:"First step content."}},Default={render:args=>({props:args,template:'\n      <cvi-ng-steps title="Abiellumine" [currentStepIndex]="0">\n        <cvi-ng-step>\n          <cvi-ng-step-panel [title]="title" cviNgStorybookCurrentComponent>\n            {{ content }}\n          </cvi-ng-step-panel>\n        </cvi-ng-step>\n        <cvi-ng-step title="Another step">\n          <cvi-ng-step-panel title="Another step title" cviNgStorybookCurrentComponent>\n            Some content\n          </cvi-ng-step-panel>\n        </cvi-ng-step>\n      </cvi-ng-steps>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: StepPanelComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <cvi-ng-steps title="Abiellumine" [currentStepIndex]="0">\n        <cvi-ng-step>\n          <cvi-ng-step-panel [title]="title" cviNgStorybookCurrentComponent>\n            {{ content }}\n          </cvi-ng-step-panel>\n        </cvi-ng-step>\n        <cvi-ng-step title="Another step">\n          <cvi-ng-step-panel title="Another step title" cviNgStorybookCurrentComponent>\n            Some content\n          </cvi-ng-step-panel>\n        </cvi-ng-step>\n      </cvi-ng-steps>\n    `\n  })\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);