"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[7380],{"./libs/ui/src/lib/reorderable-list/reorderable-list/reorderable-list.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ReorderableListMultipleFormItems:()=>ReorderableListMultipleFormItems,ReorderableListMultipleTracksAndFormItems:()=>ReorderableListMultipleTracksAndFormItems,ReorderableListSingleFormItem:()=>ReorderableListSingleFormItem,__namedExportsOrder:()=>__namedExportsOrder,default:()=>reorderable_list_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),reorderable_list_component=__webpack_require__("./libs/ui/src/lib/reorderable-list/reorderable-list/reorderable-list.component.ts");var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");class ReorderableListExampleBase{constructor(){this.items=[]}addNewItem(){this.items=[...this.items,{index:this.items.length}]}isNotFirstItem(item){return 0!==this.items.indexOf(item)}isNotLastItem(item){return this.items.indexOf(item)!==this.items.length-1}swapSteps(change){const itemsTemp=this.items[change.index1];this.items[change.index1]=this.items[change.index2],this.items[change.index2]=itemsTemp}removeStep(item){this.items.splice(this.getIndex(item),1),this.items.forEach(((stepConfig,index)=>stepConfig.index=index))}getIndex(item){return this.items.indexOf(item)}getOrderNr(item){return this.getIndex(item)+1}getStepId(item,i){return"step-"+this.getOrderNr(item)+"-form-item"+i}}let ReorderableListExampleComponent=class ReorderableListExampleComponent extends ReorderableListExampleBase{ngOnInit(){this.items=[{index:0,value:"Me as well"},{index:1,value:"And so am I"},{index:2,value:"I am a reorderable item"}]}};ReorderableListExampleComponent=(0,tslib_es6.UN)([(0,core.Component)({selector:"cvi-ng-reorderable-list-example",template:'<cvi-ng-reorderable-list [items]="items">\n  <ng-template let-item>\n    <cvi-ng-reorderable-list-item\n      (removeStepEvent)="removeStep(item)"\n      (swapStepsEvent)="swapSteps($event)"\n      [dataAttribute]="\'reorderable-list-item-\' + getOrderNr(item)"\n      [index]="getIndex(item)"\n      [setAsNextStepButtonVisible]="isNotLastItem(item)"\n      [setAsPreviousStepButtonVisible]="isNotFirstItem(item)"\n    >\n      {{ item.value }}\n    </cvi-ng-reorderable-list-item>\n  </ng-template>\n</cvi-ng-reorderable-list>\n\n<div style="padding: 16px">\n  <pre>Items:</pre>\n  <pre>{{ items | json }}</pre>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],ReorderableListExampleComponent);let ReorderableListSingleFormItemComponent=class ReorderableListSingleFormItemComponent extends ReorderableListExampleBase{ngOnInit(){this.items=[{index:0,title:"Submission of application"},{index:1,title:"Confirmation of time and place"},{index:2,title:"Getting married"},{index:3,title:"Application for ID card and passport"},{index:4,title:"Receiving the ID card and passport"}]}};ReorderableListSingleFormItemComponent=(0,tslib_es6.UN)([(0,core.Component)({selector:"cvi-ng-reorderable-list-single-form-item-example",template:'<cvi-ng-track horizontalAlignment="right">\n  <cvi-ng-button (click)="addNewItem()" [appearance]="\'text\'">\n    <cvi-ng-labeled-icon\n      [verticalAlignment]="\'center\'"\n      [iconPosition]="\'before\'"\n      [name]="\'add\'"\n    >\n      Add item\n    </cvi-ng-labeled-icon>\n  </cvi-ng-button>\n</cvi-ng-track>\n\n<cvi-ng-reorderable-list [items]="items">\n  <ng-template let-item>\n    <cvi-ng-reorderable-list-item\n      (removeStepEvent)="removeStep(item)"\n      (swapStepsEvent)="swapSteps($event)"\n      [dataAttribute]="\'reorderable-list-item-\' + getOrderNr(item)"\n      [index]="getIndex(item)"\n      [setAsNextStepButtonVisible]="isNotLastItem(item)"\n      [setAsPreviousStepButtonVisible]="isNotFirstItem(item)">\n      <cvi-ng-form-item\n        [htmlId]="\'step-\' + getOrderNr(item) + \'-form-item\'"\n        [label]="\'Step name\'"\n        class="cvi-reorderable-list__form-item"\n      >\n        <cvi-ng-input\n          [(ngModel)]="item.title"\n          [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'"\n          [htmlId]="\'step-\' + getOrderNr(item) + \'-form-item\'"\n        ></cvi-ng-input>\n      </cvi-ng-form-item>\n    </cvi-ng-reorderable-list-item>\n  </ng-template>\n</cvi-ng-reorderable-list>\n\n<div style="padding: 16px">\n  <pre>Items:</pre>\n  <pre>{{ items | json }}</pre>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],ReorderableListSingleFormItemComponent);let ReorderableListMultipleFormItemsComponent=class ReorderableListMultipleFormItemsComponent extends ReorderableListExampleBase{ngOnInit(){this.items=[{index:0,field1:"Some value",field2:"Another value",field3:"And another one",field4:"And yet another one",field5:"The final one, I swear"},{index:1,field1:"Sorry, here is another item",field2:"With another value",field3:"And another",field4:"Second to last value",field5:"THE last one :)"}]}};ReorderableListMultipleFormItemsComponent=(0,tslib_es6.UN)([(0,core.Component)({selector:"cvi-ng-reorderable-list-multiple-form-items-example",template:'<cvi-ng-track horizontalAlignment="right">\n  <cvi-ng-button (click)="addNewItem()" [appearance]="\'text\'">\n    <cvi-ng-labeled-icon\n      [verticalAlignment]="\'center\'"\n      [iconPosition]="\'before\'"\n      [name]="\'add\'"\n    >\n      Add item\n    </cvi-ng-labeled-icon>\n  </cvi-ng-button>\n</cvi-ng-track>\n\n<cvi-ng-reorderable-list [items]="items">\n  <ng-template let-item>\n    <cvi-ng-reorderable-list-item\n      (removeStepEvent)="removeStep(item)"\n      (swapStepsEvent)="swapSteps($event)"\n      [dataAttribute]="\'reorderable-list-item-\' + getOrderNr(item)"\n      [index]="getIndex(item)"\n      [setAsNextStepButtonVisible]="isNotLastItem(item)"\n      [setAsPreviousStepButtonVisible]="isNotFirstItem(item)"\n    >\n      <cvi-ng-track [gap]="4" layout="grid" [gridRows]="2">\n        <cvi-ng-form-item [htmlId]="getStepId(item, 1)" [label]="\'Field 1\'">\n          <cvi-ng-input [(ngModel)]="item.field1" [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'" [htmlId]="getStepId(item, 1)">\n          </cvi-ng-input>\n        </cvi-ng-form-item>\n        <cvi-ng-form-item [htmlId]="getStepId(item, 2)" [label]="\'Field 2\'">\n          <cvi-ng-input [(ngModel)]="item.field2" [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'" [htmlId]="getStepId(item, 2)">\n          </cvi-ng-input>\n        </cvi-ng-form-item>\n        <cvi-ng-form-item [htmlId]="getStepId(item, 3)" [label]="\'Field 3\'">\n          <cvi-ng-input [(ngModel)]="item.field3" [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'" [htmlId]="getStepId(item, 3)">\n          </cvi-ng-input>\n        </cvi-ng-form-item>\n        <cvi-ng-form-item [htmlId]="getStepId(item, 4)" [label]="\'Field 4\'">\n          <cvi-ng-input [(ngModel)]="item.field4" [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'" [htmlId]="getStepId(item, 4)">\n          </cvi-ng-input>\n        </cvi-ng-form-item>\n        <cvi-ng-form-item [htmlId]="getStepId(item, 5)" [label]="\'Field 5\'">\n          <cvi-ng-input [(ngModel)]="item.field5" [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'" [htmlId]="getStepId(item, 5)">\n          </cvi-ng-input>\n        </cvi-ng-form-item>\n      </cvi-ng-track>\n    </cvi-ng-reorderable-list-item>\n  </ng-template>\n</cvi-ng-reorderable-list>\n\n<div style="padding: 16px">\n  <pre>Items:</pre>\n  <pre>{{ items | json }}</pre>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],ReorderableListMultipleFormItemsComponent);let ReorderableListMultipleTracksAndFormItemsComponent=class ReorderableListMultipleTracksAndFormItemsComponent extends ReorderableListExampleBase{ngOnInit(){this.items=[{index:0,track1Field1:"A value in the first track",track1Field2:"Something important",track1Field3:"1234567890",track2Field1:"Now this is the second track",track2Field2:"Qwerty",singleField:"Here you can write a lot ... or as long as a lot is less that 100 characters"}]}};ReorderableListMultipleTracksAndFormItemsComponent=(0,tslib_es6.UN)([(0,core.Component)({selector:"cvi-ng-reorderable-list-multiple-tracks-and-form-items-example",template:'<cvi-ng-track horizontalAlignment="right">\n  <cvi-ng-button (click)="addNewItem()" [appearance]="\'text\'">\n    <cvi-ng-labeled-icon\n      [verticalAlignment]="\'center\'"\n      [iconPosition]="\'before\'"\n      [name]="\'add\'"\n    >\n      Add item\n    </cvi-ng-labeled-icon>\n  </cvi-ng-button>\n</cvi-ng-track>\n\n<cvi-ng-reorderable-list [items]="items">\n  <ng-template let-item>\n    <cvi-ng-reorderable-list-item\n      (removeStepEvent)="removeStep(item)"\n      (swapStepsEvent)="swapSteps($event)"\n      [dataAttribute]="\'reorderable-list-item-\' + getOrderNr(item)"\n      [index]="getIndex(item)"\n      [setAsNextStepButtonVisible]="isNotLastItem(item)"\n      [setAsPreviousStepButtonVisible]="isNotFirstItem(item)"\n    >\n      \x3c!-- Additional track for gaps between containing elements --\x3e\n      <cvi-ng-track [gap]="8" flexDirection="vertical">\n        \x3c!-- 1st track--\x3e\n        <cvi-ng-track [gap]="4"\n                        [gridRows]="1"\n                        layout="grid">\n          <cvi-ng-form-item [htmlId]="\'track-1-field-1-step-\' + getOrderNr(item) + \'-form-item\'"\n                              [label]="\'Track 1 form item 1 label\'">\n            <cvi-ng-input [(ngModel)]="item.track1Field1"\n                            [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'"\n                            [htmlId]="\'track-1-field-1-step-\' + getOrderNr(item) + \'-form-item\'">\n            </cvi-ng-input>\n          </cvi-ng-form-item>\n          <cvi-ng-form-item [htmlId]="\'track-1-field-2-step-\' + getOrderNr(item) + \'-form-item\'"\n                              [label]="\'Track 1 form item 2 label\'">\n            <cvi-ng-input [(ngModel)]="item.track1Field2"\n                            [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'"\n                            [htmlId]="\'track-1-field-2-step-\' + getOrderNr(item) + \'-form-item\'">\n            </cvi-ng-input>\n          </cvi-ng-form-item>\n          <cvi-ng-form-item [htmlId]="\'track-1-field-3-step-\' + getOrderNr(item) + \'-form-item\'"\n                              [label]="\'Track 1 form item 3 label\'">\n            <cvi-ng-input [(ngModel)]="item.track1Field3"\n                            [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'"\n                            [htmlId]="\'track-1-field-3-step-\' + getOrderNr(item) + \'-form-item\'">\n            </cvi-ng-input>\n          </cvi-ng-form-item>\n        </cvi-ng-track>\n\n        \x3c!-- 2nd track --\x3e\n        <cvi-ng-track [gap]="4"\n                        [gridRows]="1"\n                        layout="grid">\n          <cvi-ng-form-item [htmlId]="\'track-2-field-1-step-\' + getOrderNr(item) + \'-form-item\'"\n                              [label]="\'Track 2 form item 1 label\'">\n            <cvi-ng-input [(ngModel)]="item.track2Field1"\n                            [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'"\n                            [htmlId]="\'track-2-field-1-step-\' + getOrderNr(item) + \'-form-item\'">\n            </cvi-ng-input>\n          </cvi-ng-form-item>\n          <cvi-ng-form-item [htmlId]="\'track-2-field-2-step-\' + getOrderNr(item) + \'-form-item\'"\n                              [label]="\'Track 2 form item 2 label\'">\n            <cvi-ng-input [(ngModel)]="item.track2Field2"\n                            [dataAttribute]="\'step-\' + getOrderNr(item) + \'-name\'"\n                            [htmlId]="\'track-2-field-2-step-\' + getOrderNr(item) + \'-form-item\'">\n            </cvi-ng-input>\n          </cvi-ng-form-item>\n        </cvi-ng-track>\n\n        <cvi-ng-form-item [htmlId]="\'single-field-step-\' + getOrderNr(item) + \'-form-item\'"\n                            [label]="\'Single form item without a track label\'">\n          <cvi-ng-textarea [(ngModel)]="item.singleField"\n                             [htmlId]="\'single-field-step-\' + getOrderNr(item) + \'-form-item\'"\n                             maxChars="100"\n                             ngDefaultControl cviNgCharacterCounter>\n          </cvi-ng-textarea>\n        </cvi-ng-form-item>\n\n      </cvi-ng-track>\n    </cvi-ng-reorderable-list-item>\n  </ng-template>\n</cvi-ng-reorderable-list>\n\n<div style="padding: 16px">\n  <pre>Items:</pre>\n  <pre>{{ items | json }}</pre>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],ReorderableListMultipleTracksAndFormItemsComponent);var src=__webpack_require__("./libs/ui/src/index.ts"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");const components=[ReorderableListExampleComponent,ReorderableListSingleFormItemComponent,ReorderableListMultipleFormItemsComponent,ReorderableListMultipleTracksAndFormItemsComponent];let ReorderableListExamplesModule=class ReorderableListExamplesModule{};ReorderableListExamplesModule=(0,tslib_es6.UN)([(0,core.NgModule)({declarations:[...components],exports:[...components],providers:[],imports:[src.es,fesm2022_forms.y,common.CommonModule]})],ReorderableListExamplesModule);const renderComponent=component=>(0,dist.componentWrapperDecorator)(component,(({args})=>args)),reorderable_list_component_stories={title:"Angular/Reorderable list",component:reorderable_list_component.a,parameters:{layout:"padded",docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSelector | `cvi-ng-reorderable-list`\nComponent name | `ReorderableListComponent`\nDesign system module | -\nContent | yes\nPermitted parent/ancestors | any\nPermitted children | `cvi-ng-reorderable-list-item`\n\n## Where to use\n\nUsed for steps configuration.\n\nIt works with any provided object type. Make sure the template bindings match with the provided object type keys.\n\nHere are some examples: \n"}}},decorators:[(0,dist.moduleMetadata)({imports:[ReorderableListExamplesModule]})]},Default={decorators:[renderComponent(ReorderableListExampleComponent)]},ReorderableListSingleFormItem={decorators:[renderComponent(ReorderableListSingleFormItemComponent)],name:"Single form item"},ReorderableListMultipleFormItems={decorators:[renderComponent(ReorderableListMultipleFormItemsComponent)],name:"A track with multiple form items"},ReorderableListMultipleTracksAndFormItems={decorators:[renderComponent(ReorderableListMultipleTracksAndFormItemsComponent)],name:"Multiple tracks with multiple form items, and a standalone form item",parameters:{chromatic:{disableSnapshot:!0}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [renderComponent(ReorderableListExampleComponent)]\n}",...Default.parameters?.docs?.source}}},ReorderableListSingleFormItem.parameters={...ReorderableListSingleFormItem.parameters,docs:{...ReorderableListSingleFormItem.parameters?.docs,source:{originalSource:"{\n  decorators: [renderComponent(ReorderableListSingleFormItemComponent)],\n  name: 'Single form item'\n}",...ReorderableListSingleFormItem.parameters?.docs?.source}}},ReorderableListMultipleFormItems.parameters={...ReorderableListMultipleFormItems.parameters,docs:{...ReorderableListMultipleFormItems.parameters?.docs,source:{originalSource:"{\n  decorators: [renderComponent(ReorderableListMultipleFormItemsComponent)],\n  name: 'A track with multiple form items'\n}",...ReorderableListMultipleFormItems.parameters?.docs?.source}}},ReorderableListMultipleTracksAndFormItems.parameters={...ReorderableListMultipleTracksAndFormItems.parameters,docs:{...ReorderableListMultipleTracksAndFormItems.parameters?.docs,source:{originalSource:"{\n  decorators: [renderComponent(ReorderableListMultipleTracksAndFormItemsComponent)],\n  name: 'Multiple tracks with multiple form items, and a standalone form item',\n  parameters: {\n    // Disabling Chromatic because cvi-ng-textarea triggers a visual change on every build\n    chromatic: {\n      disableSnapshot: true\n    }\n  }\n}",...ReorderableListMultipleTracksAndFormItems.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ReorderableListSingleFormItem","ReorderableListMultipleFormItems","ReorderableListMultipleTracksAndFormItems"]}}]);