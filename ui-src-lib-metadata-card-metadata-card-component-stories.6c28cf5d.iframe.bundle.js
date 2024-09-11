"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[1604],{"./libs/ui/src/lib/metadata-card/metadata-card.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Mobile:()=>Mobile,WithCustomStyle:()=>WithCustomStyle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>metadata_card_component_stories});const metadata_card_component_stories={title:"Angular/Metadata Card",component:__webpack_require__("./libs/ui/src/lib/metadata-card/metadata-card.component.ts").a,parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSelector | `cvi-ng-metadata-card`\nComponent name | `MetadataCardComponent`\nDesign system module | -\nContent | no\nPermitted parent/ancestors | any\nPermitted children | -\n\n## Where to use\n\nUse if you need to display metadata information in a card-like format with coloured left border.\n\n## How to use\n\nPass `--cvi-metadata-card-left-border-color` CSS variable to the Sass component. (See example colors in `metadata-card.ts`.)\n"}}},argTypes:{severity:{name:"Severity style",control:{type:"select"}}},args:{severity:"info"}},Default={render:args=>({props:{...args,html:'<div class="cvi-html-section__content-elements"><cvi-web-track gap="4" layout="flex" flex-direction="vertical"><a href="https://www.siseministeerium.ee/maakonnakeskuse-kohalikud-omavalitsused-rahvastiku-toimingute-valdkonnas" target="_blank" class="external-link" rel="noopener noreferrer">Maakonnakeskuse kohalikud omavalitsused</a><a href="https://www.notar.ee/et/notarid/nimekiri" target="_blank" class="external-link" rel="noopener noreferrer">Notarid</a><a href="https://www.siseministeerium.ee/abielu-solmimise-oigust-omavad-vaimulikud" target="_blank" class="external-link" rel="noopener noreferrer">Abielu sõlmimise õigust omavad vaimulikud</a></cvi-web-track></div></div>'},template:'\n    <cvi-ng-track [gap]="4" [flexIsMultiline]="true" horizontalAlignment="left">\n      <div style="width: 300px">\n        <cvi-ng-metadata-card [severity]="severity">\n          <cvi-ng-labeled-item label="Item 1">How do you do?</cvi-ng-labeled-item>\n          <cvi-ng-labeled-item\n            label="Item 2, so long it does not fit ever even one line. needs breaking into next line in order to fit">\n            Hello!\n          </cvi-ng-labeled-item>\n          <cvi-ng-labeled-item label="Item 3">Some text</cvi-ng-labeled-item>\n        </cvi-ng-metadata-card>\n      </div>\n      <div>\n        <cvi-ng-metadata-card [severity]="severity">\n          <cvi-ng-html-section html="{{html}}">\n          </cvi-ng-html-section>\n        </cvi-ng-metadata-card>\n      </div>\n    </cvi-ng-track>\n    '})},WithCustomStyle={render:args=>({props:args,template:'\n      <cvi-ng-metadata-card style="--cvi-metadata-card-left-border-color: var(--cvi-color-sea-green-10)">\n        <cvi-ng-labeled-item label="Item 1">How do you do?</cvi-ng-labeled-item>\n        <cvi-ng-labeled-item label="Item 2">Hello!</cvi-ng-labeled-item>\n        <cvi-ng-labeled-item label="Item 3">Some text</cvi-ng-labeled-item>\n      </cvi-ng-metadata-card>\n    '})},Mobile={...Default,parameters:{viewport:{defaultViewport:"iphone12mini"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: MetadataCardComponent) => ({\n    props: {\n      ...args,\n      html: \'<div class="cvi-html-section__content-elements"><cvi-web-track gap="4" layout="flex" flex-direction="vertical"><a href="https://www.siseministeerium.ee/maakonnakeskuse-kohalikud-omavalitsused-rahvastiku-toimingute-valdkonnas" target="_blank" class="external-link" rel="noopener noreferrer">Maakonnakeskuse kohalikud omavalitsused</a><a href="https://www.notar.ee/et/notarid/nimekiri" target="_blank" class="external-link" rel="noopener noreferrer">Notarid</a><a href="https://www.siseministeerium.ee/abielu-solmimise-oigust-omavad-vaimulikud" target="_blank" class="external-link" rel="noopener noreferrer">Abielu sõlmimise õigust omavad vaimulikud</a></cvi-web-track></div></div>\'\n    },\n    template: `\n    <cvi-ng-track [gap]="4" [flexIsMultiline]="true" horizontalAlignment="left">\n      <div style="width: 300px">\n        <cvi-ng-metadata-card [severity]="severity">\n          <cvi-ng-labeled-item label="Item 1">How do you do?</cvi-ng-labeled-item>\n          <cvi-ng-labeled-item\n            label="Item 2, so long it does not fit ever even one line. needs breaking into next line in order to fit">\n            Hello!\n          </cvi-ng-labeled-item>\n          <cvi-ng-labeled-item label="Item 3">Some text</cvi-ng-labeled-item>\n        </cvi-ng-metadata-card>\n      </div>\n      <div>\n        <cvi-ng-metadata-card [severity]="severity">\n          <cvi-ng-html-section html="{{html}}">\n          </cvi-ng-html-section>\n        </cvi-ng-metadata-card>\n      </div>\n    </cvi-ng-track>\n    `\n  })\n}',...Default.parameters?.docs?.source}}},WithCustomStyle.parameters={...WithCustomStyle.parameters,docs:{...WithCustomStyle.parameters?.docs,source:{originalSource:'{\n  render: (args: MetadataCardComponent) => ({\n    props: args,\n    template: `\n      <cvi-ng-metadata-card style="--cvi-metadata-card-left-border-color: var(--cvi-color-sea-green-10)">\n        <cvi-ng-labeled-item label="Item 1">How do you do?</cvi-ng-labeled-item>\n        <cvi-ng-labeled-item label="Item 2">Hello!</cvi-ng-labeled-item>\n        <cvi-ng-labeled-item label="Item 3">Some text</cvi-ng-labeled-item>\n      </cvi-ng-metadata-card>\n    `\n  })\n}',...WithCustomStyle.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  parameters: {\n    viewport: {\n      defaultViewport: 'iphone12mini'\n    }\n  }\n}",...Mobile.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithCustomStyle","Mobile"]}}]);