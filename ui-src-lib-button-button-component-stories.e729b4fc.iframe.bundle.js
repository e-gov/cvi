"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[2500],{"./libs/ui/src/lib/button/button.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Secondary:()=>Secondary,Small:()=>Small,Text:()=>Text,TextWithoutUnderline:()=>TextWithoutUnderline,WithCustomColor:()=>WithCustomColor,WithCustomIconStyle:()=>WithCustomIconStyle,WithIcon:()=>WithIcon,WithIconBefore:()=>WithIconBefore,WithIconSmall:()=>WithIconSmall,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");var button_component=__webpack_require__("./libs/ui/src/lib/button/button.component.ts"),storybook_icons=__webpack_require__("./libs/ui/src/lib/icons/storybook-icons.ts");const wrapperDecorators=[(0,dist.componentWrapperDecorator)(button_component.k,(({args})=>args))],button_component_stories={title:"Angular/Button",component:button_component.k,parameters:{docs:{description:{component:'## General description\n\nFeature | Description\n- | -\nSelector | `cvi-ng-button`\nComponent name | `ButtonComponent`\nContent | yes\nPermitted parent/ancestors | any\nPermitted children | Phrasing content\n\n## Where to use\n\nDisplays a regular button. You can have it `disabled` or switch its visuals through `appearance` prop.\n\nYou can use `--cvi-button-color` and `--cvi-button-color--hover` CSS variables to customise the background color of the button with `appearance=primary` prop.\n\nYou can also utilise `--cvi-button--text-decoration` to remove the underline when `appearance="text"`.\n'}}},argTypes:{appearance:{control:{type:"inline-radio"}},iconName:{name:"Icon name",options:storybook_icons.W,control:{type:"select"}},content:{name:"Content",table:{category:"Playground"}},onClick:{action:"Button clicked!"}},svgClass:{control:!1},args:{content:"Button label",appearance:"primary"}},Default={render:args=>({props:args,template:"{{ content }}"}),decorators:wrapperDecorators},Secondary={...Default,args:{appearance:"secondary"}},Small={...Default,args:{size:"s"}},Text={...Default,args:{appearance:"text"}},WithIcon={...Default,args:{iconName:"add",iconPosition:"after"}},WithIconSmall={...Default,args:{size:"s",iconName:"add",iconPosition:"after"}},WithIconBefore={...Default,args:{iconName:"add",iconPosition:"before"}},WithCustomColor={render:args=>({props:args,styles:[":host {\n        --cvi-button-color: var(--cvi-color-jasper-10);\n        --cvi-button-color--hover: var(--cvi-color-jasper-12);\n      }"],template:"{{ content }}"}),decorators:wrapperDecorators},TextWithoutUnderline={render:args=>({props:{...args,appearance:"text"},styles:[":host {\n        --cvi-button--text-decoration: none;\n      }"],template:"{{ content }}"}),decorators:[...wrapperDecorators,(0,dist.componentWrapperDecorator)((story=>`\n      <cvi-ng-storybook-note>\n        Apply <code>--cvi-button--text-decoration: none</code> CSS variable on the component host or its ancestor to remove the underline.\n      </cvi-ng-storybook-note>\n      ${story}\n    `))]},WithCustomIconStyle={...Default,render:args=>({props:args,styles:["::ng-deep .svg-class {\n        fill: red;\n      }"],template:"{{ content }}"}),args:{iconName:"add",iconPosition:"after",svgClass:"svg-class"},decorators:wrapperDecorators};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: (args: ButtonComponent) => ({\n    props: args,\n    template: `{{ content }}`\n  }),\n  decorators: wrapperDecorators\n}",...Default.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    appearance: 'secondary'\n  }\n}",...Secondary.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    size: 's'\n  }\n}",...Small.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    appearance: 'text'\n  }\n}",...Text.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    iconName: 'add',\n    iconPosition: 'after'\n  }\n}",...WithIcon.parameters?.docs?.source}}},WithIconSmall.parameters={...WithIconSmall.parameters,docs:{...WithIconSmall.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    size: 's',\n    iconName: 'add',\n    iconPosition: 'after'\n  }\n}",...WithIconSmall.parameters?.docs?.source}}},WithIconBefore.parameters={...WithIconBefore.parameters,docs:{...WithIconBefore.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    iconName: 'add',\n    iconPosition: 'before'\n  }\n}",...WithIconBefore.parameters?.docs?.source}}},WithCustomColor.parameters={...WithCustomColor.parameters,docs:{...WithCustomColor.parameters?.docs,source:{originalSource:"{\n  render: (args: ButtonComponent) => ({\n    props: args,\n    styles: [`:host {\n        --cvi-button-color: var(--cvi-color-jasper-10);\n        --cvi-button-color--hover: var(--cvi-color-jasper-12);\n      }`],\n    template: `{{ content }}`\n  }),\n  decorators: wrapperDecorators\n}",...WithCustomColor.parameters?.docs?.source}}},TextWithoutUnderline.parameters={...TextWithoutUnderline.parameters,docs:{...TextWithoutUnderline.parameters?.docs,source:{originalSource:"{\n  render: (args: ButtonComponent) => ({\n    props: {\n      ...args,\n      appearance: 'text'\n    },\n    styles: [`:host {\n        --cvi-button--text-decoration: none;\n      }`],\n    template: `{{ content }}`\n  }),\n  decorators: [...wrapperDecorators, componentWrapperDecorator(story => {\n    return `\n      <cvi-ng-storybook-note>\n        Apply <code>--cvi-button--text-decoration: none</code> CSS variable on the component host or its ancestor to remove the underline.\n      </cvi-ng-storybook-note>\n      ${story}\n    `;\n  })]\n}",...TextWithoutUnderline.parameters?.docs?.source}}},WithCustomIconStyle.parameters={...WithCustomIconStyle.parameters,docs:{...WithCustomIconStyle.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  render: (args: ButtonComponent) => ({\n    props: args,\n    styles: [`::ng-deep .svg-class {\n        fill: red;\n      }`],\n    template: `{{ content }}`\n  }),\n  args: {\n    iconName: 'add',\n    iconPosition: 'after',\n    svgClass: 'svg-class'\n  },\n  decorators: wrapperDecorators\n}",...WithCustomIconStyle.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Secondary","Small","Text","WithIcon","WithIconSmall","WithIconBefore","WithCustomColor","TextWithoutUnderline","WithCustomIconStyle"]}}]);