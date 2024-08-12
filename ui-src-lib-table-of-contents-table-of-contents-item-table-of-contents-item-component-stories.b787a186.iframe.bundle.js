"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[8920],{"./libs/ui/src/lib/table-of-contents/table-of-contents-item/table-of-contents-item.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>table_of_contents_item_component_stories});const table_of_contents_item_component_stories={title:"Angular/Table of contents/Table of contents item",component:__webpack_require__("./libs/ui/src/lib/table-of-contents/table-of-contents-item/table-of-contents-item.component.ts")._,parameters:{layout:"padded",docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSelector | `cvi-ng-table-of-contents-item`\nComponent name | `TableOfContentsItemComponent`\nDesign system module | -\nContent | no\nPermitted parent/ancestors | `cvi-ng-table-of-contents`\nPermitted children | -\n\n## Where to use\n\nRenders a table of contents navigation link in a `cvi-ng-table-of-contents`.\n\n## How to use\n\nSee `cvi-ng-table-of-contents-wrapper` docs.\n"}},chromatic:{disableSnapshot:!0}},args:{label:"Section One with a very long label that spans many lines"}},Default={render:args=>({props:args,template:'\n      <cvi-ng-table-of-contents-wrapper>\n        <div>\n          <div cviNgToCSection="section-one">\n            <h1>Section One</h1>\n            <div [cviNgStorybookRandomParagraphs]="10"></div>\n          </div>\n\n          <div cviNgToCSection="section-two">\n            <h1>Section Two</h1>\n            <div [cviNgStorybookRandomParagraphs]="10"></div>\n          </div>\n\n          <div cviNgToCSection="section-three">\n            <h1>Section Three</h1>\n            <div [cviNgStorybookRandomParagraphs]="10"></div>\n          </div>\n\n          <div cviNgToCSection="section-four">\n            <h1>Section Four</h1>\n            <div [cviNgStorybookRandomParagraphs]="10"></div>\n          </div>\n\n\n          <div cviNgToCSection="section-five">\n            <h1>Section Five</h1>\n            <div [cviNgStorybookRandomParagraphs]="10"></div>\n          </div>\n        </div>\n\n        <cvi-ng-table-of-contents title="Sisukord">\n          <cvi-ng-table-of-contents-item [label]="label" href="#section-one" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>\n          <cvi-ng-table-of-contents-item label="Section Two" href="#section-two" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>\n          <cvi-ng-table-of-contents-item label="Section Three" href="#section-three" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>\n          <cvi-ng-table-of-contents-item label="Section Four" href="#section-four" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>\n          <cvi-ng-table-of-contents-item label="Section Five" href="#section-five" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>\n        </cvi-ng-table-of-contents>\n      </cvi-ng-table-of-contents-wrapper>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: TableOfContentsItemComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <cvi-ng-table-of-contents-wrapper>\n        <div>\n          <div cviNgToCSection="section-one">\n            <h1>Section One</h1>\n            <div [cviNgStorybookRandomParagraphs]="10"></div>\n          </div>\n\n          <div cviNgToCSection="section-two">\n            <h1>Section Two</h1>\n            <div [cviNgStorybookRandomParagraphs]="10"></div>\n          </div>\n\n          <div cviNgToCSection="section-three">\n            <h1>Section Three</h1>\n            <div [cviNgStorybookRandomParagraphs]="10"></div>\n          </div>\n\n          <div cviNgToCSection="section-four">\n            <h1>Section Four</h1>\n            <div [cviNgStorybookRandomParagraphs]="10"></div>\n          </div>\n\n\n          <div cviNgToCSection="section-five">\n            <h1>Section Five</h1>\n            <div [cviNgStorybookRandomParagraphs]="10"></div>\n          </div>\n        </div>\n\n        <cvi-ng-table-of-contents title="Sisukord">\n          <cvi-ng-table-of-contents-item [label]="label" href="#section-one" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>\n          <cvi-ng-table-of-contents-item label="Section Two" href="#section-two" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>\n          <cvi-ng-table-of-contents-item label="Section Three" href="#section-three" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>\n          <cvi-ng-table-of-contents-item label="Section Four" href="#section-four" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>\n          <cvi-ng-table-of-contents-item label="Section Five" href="#section-five" cviNgStorybookCurrentComponent></cvi-ng-table-of-contents-item>\n        </cvi-ng-table-of-contents>\n      </cvi-ng-table-of-contents-wrapper>\n    `\n  })\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);