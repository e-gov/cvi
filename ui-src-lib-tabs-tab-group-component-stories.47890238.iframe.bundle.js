"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[5296],{"./libs/ui/src/lib/tabs/tab-group.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Mobile:()=>Mobile,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tab_group_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),ui_module=__webpack_require__("./libs/ui/src/lib/ui.module.ts"),storybook_icons=__webpack_require__("./libs/ui/src/lib/icons/storybook-icons.ts");const tab_group_component_stories={title:"Angular/Tabs/Tab group",parameters:{docs:{description:{component:"## General description\n\n| Feature                    | Description         |\n|----------------------------|---------------------|\n| Selector                   | `cvi-ng-tab-group`  |\n| Component name             | `TabGroupComponent` |\n| Content                    | yes                 |\n| Permitted parent/ancestors | any                 |\n| Permitted children         | `cvi-ng-tab`        |\n\n## Where to use\n\nDisplays tabs in an old design. Add tabs with `cvi-ng-tab` component.\n"}}},decorators:[(0,dist.moduleMetadata)({imports:[ui_module.e,fesm2022_forms.sl]})],argTypes:{content:{name:"Content",table:{category:"Playground"},control:{type:"text"}},activeTabChange:{action:"Tab switched!"}},args:{content:"First tab content with some more text that might overflow"}},Default={render:args=>({props:{...args,form:new fesm2022_forms.WC({text:new fesm2022_forms.Ku("Some text")}),formMinRows:5,formHtmlId:"fk123sd4kfds",formLabel:"Label"},template:'\n      <cvi-ng-tab-group (activeTabChange)="activeTabChange($event)">\n        <cvi-ng-tab title="Tab 1">{{ content }}</cvi-ng-tab>\n        <cvi-ng-tab title="Tab 2, with a form">\n          <div [formGroup]="form">\n            Textarea, input and the character counter directive should work properly inside tabs.\n            <cvi-ng-form-item [label]="formLabel" [htmlId]="formHtmlId">\n              <cvi-ng-textarea formControlName="text" cviNgCharacterCounter [maxChars]="30" [minRows]="formMinRows" [htmlId]="formHtmlId"></cvi-ng-textarea>\n            </cvi-ng-form-item>\n          </div>\n        </cvi-ng-tab>\n        <cvi-ng-tab title="Tab 3 with lots and lots of random text">Third tab content. File not found. I was having the most wonderful dream. Except you were there, and you were there, and you were there! And when we woke up, we had these bodies. I could if you hadn\'t turned on the light and shut off my stereo.</cvi-ng-tab>\n      </cvi-ng-tab-group>\n    '})},Mobile={...Default,viewport:{defaultViewport:"iphone12mini"}},WithIcon=(args=>({props:args,template:'\n    <cvi-ng-tab-group>\n      <cvi-ng-tab\n        title="Tab 1"\n        [iconName]="iconName"\n        [svgClass]="\'svg-class\'"\n        [iconPosition]="iconPosition"\n        [iconHeight]="iconHeight"\n        [gap]="gap"\n        >{{ content }}</cvi-ng-tab\n      >\n      <cvi-ng-tab title="Tab 2 with lots and lots of random text"\n        >Third tab content. File not found. I was having the most wonderful dream.\n        Except you were there, and you were there, and you were there! And when we\n        woke up, we had these bodies. I could if you hadn\'t turned on the light and\n        shut off my stereo.</cvi-ng-tab\n      >\n    </cvi-ng-tab-group>\n  ',styles:["\n      ::ng-deep .svg-class {\n        fill: red;\n      }\n    "]})).bind({});WithIcon.args={iconName:"input_error",iconHeight:15,iconPosition:"before",gap:2},WithIcon.argTypes={iconName:{name:"Icon name",options:storybook_icons.W,control:{type:"select"}},gap:{name:"Gap",control:{type:"range",min:0,max:20,step:1}},svgClass:{control:!1},iconPosition:{name:"Icon position",options:["before","after"],control:{type:"select"}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: DefaultTemplate\n}",...Default.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  viewport: {\n    defaultViewport: 'iphone12mini'\n  }\n}",...Mobile.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'(args: TabComponent) => ({\n  props: args,\n  /* template */\n  template: `\n    <cvi-ng-tab-group>\n      <cvi-ng-tab\n        title="Tab 1"\n        [iconName]="iconName"\n        [svgClass]="\'svg-class\'"\n        [iconPosition]="iconPosition"\n        [iconHeight]="iconHeight"\n        [gap]="gap"\n        >{{ content }}</cvi-ng-tab\n      >\n      <cvi-ng-tab title="Tab 2 with lots and lots of random text"\n        >Third tab content. File not found. I was having the most wonderful dream.\n        Except you were there, and you were there, and you were there! And when we\n        woke up, we had these bodies. I could if you hadn\'t turned on the light and\n        shut off my stereo.</cvi-ng-tab\n      >\n    </cvi-ng-tab-group>\n  `,\n  styles: [\n  // you don\'t need to use ::ng-deep in your app\n  `\n      ::ng-deep .svg-class {\n        fill: red;\n      }\n    `]\n})',...WithIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Mobile","WithIcon"]}}]);