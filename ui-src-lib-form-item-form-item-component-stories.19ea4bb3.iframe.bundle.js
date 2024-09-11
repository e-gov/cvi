"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[9964],{"./libs/ui/src/lib/form-item/form-item.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithInlineFormElements:()=>WithInlineFormElements,WithTextarea:()=>WithTextarea,__namedExportsOrder:()=>__namedExportsOrder,default:()=>form_item_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");var form_item_component=__webpack_require__("./libs/ui/src/lib/form-item/form-item.component.ts");const wrapperDecorators=[(0,dist.componentWrapperDecorator)(form_item_component.y,(({args})=>args))],form_item_component_stories={title:"Angular/Form/Form item",component:form_item_component.y,parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSelector | `cvi-ng-form-item`\nComponent name | `FormItemComponent`\nContent | yes\nPermitted parent/ancestors | any\nPermitted children | `cvi-ng-input`\n\n## Where to use\n\nUse as a field wrapper for form elements.\n"}}},argTypes:{displayMessage:{name:"Show form message?",table:{category:"Playground"}},title:{name:"Form message title",if:{arg:"displayMessage",eq:!0},table:{category:"Playground"}},message:{name:"Form message text",if:{arg:"displayMessage",eq:!0},table:{category:"Playground"}},severityLevel:{name:"Form message severity level",if:{arg:"displayMessage",eq:!0},options:["warning","error"],control:{type:"inline-radio"},table:{category:"Playground"}}},args:{htmlId:"fksd4kfds",label:"Example label",placeholder:"Placeholder text...",displayMessage:!1,message:"Error",severityLevel:"warning",title:"Warning message",labelPosition:"top"}},Default={render:args=>({props:args,template:'\n      <cvi-ng-input [placeholder]="placeholder" [htmlId]="htmlId"></cvi-ng-input>\n    '}),decorators:wrapperDecorators},WithTextarea={render:args=>({props:args,template:'\n      <cvi-ng-textarea [placeholder]="placeholder" [htmlId]="htmlId"></cvi-ng-textarea>\n    '}),decorators:wrapperDecorators,parameters:{chromatic:{disableSnapshot:!0}}},WithInlineFormElements={render:args=>({props:{...args,items:["City of Sierra Nevada 1","City of Bilbao 2","valik 3 (cy test)","Rest queen discovery stood far everything keep aside merely girl two making inch hard example remove steel right silent trunk central refused other 4","City of London 5","Option 6 with enough text to feed a saltwater crocodile","Option 7 with enough text to feed a prehistoric jaguar"]},template:'\n      <cvi-ng-storybook-note>\n        The goal of this story is to verify that height of inline form components is the same.\n      </cvi-ng-storybook-note>\n      <cvi-ng-track [gap]="4">\n        <cvi-ng-form-item [labelPosition]="labelPosition"\n                          [isLabelHidden]="isLabelHidden"\n                          [required]="required"\n                          [label]="label"\n                          [labelId]="labelId"\n                          [htmlId]="htmlId">\n          <cvi-ng-input [placeholder]="placeholder"\n                        [htmlId]="htmlId"\n                        cviNgFormMessage\n                        [displayMessage]="displayMessage"\n                        [severityLevel]="severityLevel"\n                        [message]="message"\n                        [title]="title">\n          </cvi-ng-input>\n        </cvi-ng-form-item>\n        <cvi-ng-form-item label="Datepicker"\n                          htmlId="datepicker-id">\n          <cvi-ng-datepicker placeholder="Pick a date"\n                            htmlId="datepicker-id"\n                            cviNgFormMessage\n                            [severityLevel]="severityLevel"\n                            [displayMessage] ="displayMessage"\n                            [message]="message"\n                            [title]="title">\n          </cvi-ng-datepicker>\n        </cvi-ng-form-item>\n        <cvi-ng-form-item label="Select"\n                          labelId="select-label-id"\n                          htmlId="select-id"\n                          [ngStyle]="{\'width.px\': 220}">\n          <cvi-ng-select [items]="items"\n                        labelId="select-label-id"\n                        htmlId="select-id"\n                        cviNgFormMessage\n                        [severityLevel]="severityLevel"\n                        [displayMessage] ="displayMessage"\n                        [message]="message"\n                        [title]="title">\n          </cvi-ng-select>\n        </cvi-ng-form-item>\n      </cvi-ng-track>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: FormItemComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <cvi-ng-input [placeholder]="placeholder" [htmlId]="htmlId"></cvi-ng-input>\n    `\n  }),\n  decorators: wrapperDecorators\n}',...Default.parameters?.docs?.source}}},WithTextarea.parameters={...WithTextarea.parameters,docs:{...WithTextarea.parameters?.docs,source:{originalSource:'{\n  render: (args: FormItemComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <cvi-ng-textarea [placeholder]="placeholder" [htmlId]="htmlId"></cvi-ng-textarea>\n    `\n  }),\n  decorators: wrapperDecorators,\n  parameters: {\n    chromatic: {\n      disableSnapshot: true\n    }\n  }\n}',...WithTextarea.parameters?.docs?.source}}},WithInlineFormElements.parameters={...WithInlineFormElements.parameters,docs:{...WithInlineFormElements.parameters?.docs,source:{originalSource:'{\n  render: (args: FormItemComponent) => ({\n    props: {\n      ...args,\n      items: [\'City of Sierra Nevada 1\', \'City of Bilbao 2\', \'valik 3 (cy test)\', \'Rest queen discovery stood far everything keep aside merely girl two making inch hard example remove steel right silent trunk central refused other 4\', \'City of London 5\', \'Option 6 with enough text to feed a saltwater crocodile\', \'Option 7 with enough text to feed a prehistoric jaguar\']\n    },\n    /* template */\n    template: `\n      <cvi-ng-storybook-note>\n        The goal of this story is to verify that height of inline form components is the same.\n      </cvi-ng-storybook-note>\n      <cvi-ng-track [gap]="4">\n        <cvi-ng-form-item [labelPosition]="labelPosition"\n                          [isLabelHidden]="isLabelHidden"\n                          [required]="required"\n                          [label]="label"\n                          [labelId]="labelId"\n                          [htmlId]="htmlId">\n          <cvi-ng-input [placeholder]="placeholder"\n                        [htmlId]="htmlId"\n                        cviNgFormMessage\n                        [displayMessage]="displayMessage"\n                        [severityLevel]="severityLevel"\n                        [message]="message"\n                        [title]="title">\n          </cvi-ng-input>\n        </cvi-ng-form-item>\n        <cvi-ng-form-item label="Datepicker"\n                          htmlId="datepicker-id">\n          <cvi-ng-datepicker placeholder="Pick a date"\n                            htmlId="datepicker-id"\n                            cviNgFormMessage\n                            [severityLevel]="severityLevel"\n                            [displayMessage] ="displayMessage"\n                            [message]="message"\n                            [title]="title">\n          </cvi-ng-datepicker>\n        </cvi-ng-form-item>\n        <cvi-ng-form-item label="Select"\n                          labelId="select-label-id"\n                          htmlId="select-id"\n                          [ngStyle]="{\'width.px\': 220}">\n          <cvi-ng-select [items]="items"\n                        labelId="select-label-id"\n                        htmlId="select-id"\n                        cviNgFormMessage\n                        [severityLevel]="severityLevel"\n                        [displayMessage] ="displayMessage"\n                        [message]="message"\n                        [title]="title">\n          </cvi-ng-select>\n        </cvi-ng-form-item>\n      </cvi-ng-track>\n    `\n  })\n}',...WithInlineFormElements.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithTextarea","WithInlineFormElements"]}}]);