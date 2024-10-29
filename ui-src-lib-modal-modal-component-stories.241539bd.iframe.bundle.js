"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[8099],{"./libs/ui/src/lib/modal/modal.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Mobile:()=>Mobile,WithModalInsideModal:()=>WithModalInsideModal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Angular/Modal/Modal",component:__webpack_require__("./libs/ui/src/lib/modal/modal.component.ts").m,args:{closeable:!0}},Default={render:args=>({props:args,template:'\n      <ng-template #modal let-testModalTitle="title">\n        <h1>{{ testModalTitle }}</h1>\n        <p dataAttribute="test-content">Modal content</p>\n      </ng-template>\n      <cvi-ng-button [cviNgModal]="modal" modalTitle="Some title" [closeable]="closeable" dataAttribute="test-button">Open modal</cvi-ng-button>\n    '})},Mobile={...Default,parameters:{viewport:{defaultViewport:"iphone12mini"}}},WithModalInsideModal={render:args=>({props:args,template:'\n      <ng-template #modal1>\n        <p>Modal 1 content</p>\n        <ng-template #modal2 let-testModalTitle="title">\n          <h1>{{ testModalTitle }}</h1>\n          <p>Modal 2 content</p>\n        </ng-template>\n        <cvi-ng-button [cviNgModal]="modal2" modalTitle="Some title for the inner modal">Open modal 2 inside modal 1</cvi-ng-button>\n      </ng-template>\n      <cvi-ng-button [cviNgModal]="modal1">Open modal</cvi-ng-button>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: ModalComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <ng-template #modal let-testModalTitle="title">\n        <h1>{{ testModalTitle }}</h1>\n        <p dataAttribute="test-content">Modal content</p>\n      </ng-template>\n      <cvi-ng-button [cviNgModal]="modal" modalTitle="Some title" [closeable]="closeable" dataAttribute="test-button">Open modal</cvi-ng-button>\n    `\n  })\n}',...Default.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  parameters: {\n    viewport: {\n      defaultViewport: 'iphone12mini'\n    }\n  }\n}",...Mobile.parameters?.docs?.source}}},WithModalInsideModal.parameters={...WithModalInsideModal.parameters,docs:{...WithModalInsideModal.parameters?.docs,source:{originalSource:'{\n  render: (args: ModalComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <ng-template #modal1>\n        <p>Modal 1 content</p>\n        <ng-template #modal2 let-testModalTitle="title">\n          <h1>{{ testModalTitle }}</h1>\n          <p>Modal 2 content</p>\n        </ng-template>\n        <cvi-ng-button [cviNgModal]="modal2" modalTitle="Some title for the inner modal">Open modal 2 inside modal 1</cvi-ng-button>\n      </ng-template>\n      <cvi-ng-button [cviNgModal]="modal1">Open modal</cvi-ng-button>\n    `\n  })\n}',...WithModalInsideModal.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Mobile","WithModalInsideModal"]}}]);