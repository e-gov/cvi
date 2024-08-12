"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[5584],{"./libs/ui/src/lib/notification/notification.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Error:()=>Error,HtmlSection:()=>HtmlSection,Neutral:()=>Neutral,Success:()=>Success,Warning:()=>Warning,WithBoldTextAndLink:()=>WithBoldTextAndLink,WithCompactSize:()=>WithCompactSize,WithCompactSizeAndCustomIcon:()=>WithCompactSizeAndCustomIcon,WithCompactSizeAndIcon:()=>WithCompactSizeAndIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>notification_component_stories});const notification_component_stories={title:"Angular/Notification",component:__webpack_require__("./libs/ui/src/lib/notification/notification.component.ts").g,parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSelector | `cvi-ng-notification`\nComponent name | `NotificationComponent`\nDesign system module | -\nPermitted parent/ancestors | any\nPermitted children | -\n\n## Where to use\n\nA notification component.\n"}}},args:{severity:"info",size:"regular",showIcon:!0,showCloseButton:!0,title:"Notification title",content:"Header and close buttons are not displayed if notification size is compact. Header and close buttons are not displayed if notification size is compact. Header and close buttons are not displayed if notification size is compact."}},Default={render:args=>({props:args,template:'\n      <cvi-ng-notification [severity]="severity"\n                           [size]="size"\n                           [showIcon]="showIcon"\n                           [showCloseButton]="showCloseButton"\n                           [title]="title"\n                           [iconName]="iconName"\n      >\n        {{content}}\n      </cvi-ng-notification>\n    '})},HtmlSection={render:args=>({props:args,template:'\n      <cvi-ng-notification [severity]="severity"\n                           [size]="size"\n                           [showIcon]="showIcon"\n                           [showCloseButton]="showCloseButton"\n                           [title]="title"\n                           [iconName]="iconName"\n      >\n      <cvi-ng-html-section html="{{content}}"></cvi-ng-html-section>\n      </cvi-ng-notification>\n    '})},Success={...Default,args:{severity:"success"}},Warning={...Default,args:{severity:"warning"}},Error={...Default,args:{severity:"error"}},Neutral={...Default,args:{severity:"neutral"}},WithCompactSize={...Default,args:{severity:"neutral",size:"compact"}},WithCompactSizeAndIcon={...Default,args:{severity:"info",size:"compact"}},WithCompactSizeAndCustomIcon={...Default,args:{severity:"neutral",size:"compact",iconName:"check_circle_outline"}},WithBoldTextAndLink={...HtmlSection,args:{severity:"neutral",size:"compact",content:'<b>Bold text</b> and link <a href="https://www.jenkins.io/" target="_blank" class="external-link">Click here</a>'}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: NotificationComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <cvi-ng-notification [severity]="severity"\n                           [size]="size"\n                           [showIcon]="showIcon"\n                           [showCloseButton]="showCloseButton"\n                           [title]="title"\n                           [iconName]="iconName"\n      >\n        {{content}}\n      </cvi-ng-notification>\n    `\n  })\n}',...Default.parameters?.docs?.source}}},HtmlSection.parameters={...HtmlSection.parameters,docs:{...HtmlSection.parameters?.docs,source:{originalSource:'{\n  render: (args: NotificationComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <cvi-ng-notification [severity]="severity"\n                           [size]="size"\n                           [showIcon]="showIcon"\n                           [showCloseButton]="showCloseButton"\n                           [title]="title"\n                           [iconName]="iconName"\n      >\n      <cvi-ng-html-section html="{{content}}"></cvi-ng-html-section>\n      </cvi-ng-notification>\n    `\n  })\n}',...HtmlSection.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    severity: 'success'\n  }\n}",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    severity: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    severity: 'error'\n  }\n}",...Error.parameters?.docs?.source}}},Neutral.parameters={...Neutral.parameters,docs:{...Neutral.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    severity: 'neutral'\n  }\n}",...Neutral.parameters?.docs?.source}}},WithCompactSize.parameters={...WithCompactSize.parameters,docs:{...WithCompactSize.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    severity: 'neutral',\n    size: 'compact'\n  }\n}",...WithCompactSize.parameters?.docs?.source}}},WithCompactSizeAndIcon.parameters={...WithCompactSizeAndIcon.parameters,docs:{...WithCompactSizeAndIcon.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    severity: 'info',\n    size: 'compact'\n  }\n}",...WithCompactSizeAndIcon.parameters?.docs?.source}}},WithCompactSizeAndCustomIcon.parameters={...WithCompactSizeAndCustomIcon.parameters,docs:{...WithCompactSizeAndCustomIcon.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    severity: 'neutral',\n    size: 'compact',\n    iconName: 'check_circle_outline'\n  }\n}",...WithCompactSizeAndCustomIcon.parameters?.docs?.source}}},WithBoldTextAndLink.parameters={...WithBoldTextAndLink.parameters,docs:{...WithBoldTextAndLink.parameters?.docs,source:{originalSource:"{\n  ...HtmlSection,\n  args: {\n    severity: 'neutral',\n    size: 'compact',\n    content: '<b>Bold text</b> and link <a href=\"https://www.jenkins.io/\" target=\"_blank\" class=\"external-link\">Click here</a>'\n  }\n}",...WithBoldTextAndLink.parameters?.docs?.source}}};const __namedExportsOrder=["Default","HtmlSection","Success","Warning","Error","Neutral","WithCompactSize","WithCompactSizeAndIcon","WithCompactSizeAndCustomIcon","WithBoldTextAndLink"]}}]);