"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[4204],{"./libs/ui/src/lib/html-section/html-section.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,InContactsBlock:()=>InContactsBlock,List:()=>List,NestedList:()=>NestedList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>html_section_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const html_section_component_stories={title:"Angular/Html section",component:__webpack_require__("./libs/ui/src/lib/html-section/html-section.component.ts").e,parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- Selector | `cvi-ng-html-section`\n- Component name | `HtmlSectionComponent`\n- Design system module | -\n- Content | no\n- Permitted parent/ancestors | any\n- Permitted children | no\n\n## Where to use\n\nUse if you need to display HTML longform article-like content with rich styling.\n\nHTML sanitizer is configured to check custom elements (Web Components), thus sanitizer's allowed attributes are also configured using custom elements' mapped attributes.\n\nFor example, if you need to use `cvi-ng-track` component in the `html` input value, use corresponding custom element `cvi-web-track` and dash-separated lowercase attribute names `flex-direction=\"vertical\"` instead of usual property binding.\n"}}},args:{html:'\n      <h3 class="cvi-html-section__title">Politsei- ja Piirivalveameti kontaktid</h3>\n      <div class="cvi-html-section__content">\n        <div class="cvi-html-section__content-elements">\n          <p>Antud teenust haldab PPA ja abi saamiseks palun pöörduge nende poole</p>\n          <p>Telefonikõnedele vastatakse E-R 9-17 ning kõnesid teenindatakse eesti, vene ja inglise keeles</p>\n        </div>\n        <div class="cvi-html-section__content-elements">\n          <cvi-web-track gap="4" layout="flex" flex-direction="vertical">\n            <cvi-web-labeled-icon name="call"><a href="tel:+3726123000">+372 612 3000</a></cvi-web-labeled-icon>\n            <cvi-web-labeled-icon name="email"><a href="mailto:ppa@politsei.ee">ppa@politsei.ee</a></cvi-web-labeled-icon>\n            <cvi-web-labeled-icon name="screen_share"><a href="https://politsei.ee" target="_blank">politsei.ee</a></cvi-web-labeled-icon>\n            <cvi-web-labeled-icon name="location">Pärnu mnt 139, 15060 Tallinn</cvi-web-labeled-icon>\n          </cvi-web-track>\n        </div>\n      </div>\n    '}},Default={},InContactsBlock={render:args=>({props:args,styles:[".container {\n        width: 400px;\n        background-color: var(--cvi-color-black-coral-2);\n        padding: 20px;\n      }"]}),decorators:[(0,dist.componentWrapperDecorator)((story=>`\n        <div class="container">\n          ${story}\n        </div>\n      `))],args:{html:'\n      <h3 class="cvi-html-section__title">Kontaktid</h3>\n      <div class="cvi-html-section__content">\n        <div class="cvi-html-section__content-elements">\n          <p>Võta ühendust perekonnaseisuasutusega, kus soovid abielu sõlmida</p>\n        </div>\n        <div class="cvi-html-section__content-elements">\n          <cvi-web-track gap="4" layout="flex" flex-direction="vertical">\n            <cvi-web-labeled-icon name="screen_share"><a href="#" class="external-link">Maakonnakeskuste kohalikud omavalitsused</a></cvi-web-labeled-icon>\n            <cvi-web-labeled-icon name="screen_share"><a href="#">Notarid</a></cvi-web-labeled-icon>\n            <cvi-web-labeled-icon name="screen_share"><a href="#">Abielu sõlmimise õigust omavad vaimulikud</a></cvi-web-labeled-icon>\n          </cvi-web-track>\n        </div>\n      </div>\n    '}},List={...Default,args:{html:'\n      <p>Ordered <b>list</b></p>\n      <ol>\n        <li>Item 1</li>\n        <li>Item 2</li>\n      </ol>\n      <br>\n      <p>Unordered <i>list</i></p>\n      <ul>\n        <li><a href="#" target="_blank" class="external-link">Item 1</a></li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n      </ul>\n    '}},NestedList={...Default,args:{html:"\n      <p>Ordered nested list</p>\n      <ol>\n        <li>Heading one:\n            <ul>\n                <li>Step one</li>\n                <li>Step two</li>\n                <li>Step three</li>\n            </ul>\n        </li>\n        <li>Heading two:\n            <ul>\n                <li>Step one</li>\n                <li>Step two</li>\n                <li>Step three</li>\n            </ul>\n      </li>\n      </ol>\n    "}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},InContactsBlock.parameters={...InContactsBlock.parameters,docs:{...InContactsBlock.parameters?.docs,source:{originalSource:'{\n  render: (args: HtmlSectionComponent) => ({\n    props: args,\n    styles: [`.container {\n        width: 400px;\n        background-color: var(--cvi-color-black-coral-2);\n        padding: 20px;\n      }`]\n  }),\n  decorators: [componentWrapperDecorator(story => {\n    return `\n        <div class="container">\n          ${story}\n        </div>\n      `;\n  })],\n  args: {\n    html: `\n      <h3 class="cvi-html-section__title">Kontaktid</h3>\n      <div class="cvi-html-section__content">\n        <div class="cvi-html-section__content-elements">\n          <p>Võta ühendust perekonnaseisuasutusega, kus soovid abielu sõlmida</p>\n        </div>\n        <div class="cvi-html-section__content-elements">\n          <cvi-web-track gap="4" layout="flex" flex-direction="vertical">\n            <cvi-web-labeled-icon name="screen_share"><a href="#" class="external-link">Maakonnakeskuste kohalikud omavalitsused</a></cvi-web-labeled-icon>\n            <cvi-web-labeled-icon name="screen_share"><a href="#">Notarid</a></cvi-web-labeled-icon>\n            <cvi-web-labeled-icon name="screen_share"><a href="#">Abielu sõlmimise õigust omavad vaimulikud</a></cvi-web-labeled-icon>\n          </cvi-web-track>\n        </div>\n      </div>\n    `\n  }\n}',...InContactsBlock.parameters?.docs?.source}}},List.parameters={...List.parameters,docs:{...List.parameters?.docs,source:{originalSource:'{\n  ...Default,\n  args: {\n    html: `\n      <p>Ordered <b>list</b></p>\n      <ol>\n        <li>Item 1</li>\n        <li>Item 2</li>\n      </ol>\n      <br>\n      <p>Unordered <i>list</i></p>\n      <ul>\n        <li><a href="#" target="_blank" class="external-link">Item 1</a></li>\n        <li>Item 2</li>\n        <li>Item 3</li>\n      </ul>\n    `\n  }\n}',...List.parameters?.docs?.source}}},NestedList.parameters={...NestedList.parameters,docs:{...NestedList.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    html: `\n      <p>Ordered nested list</p>\n      <ol>\n        <li>Heading one:\n            <ul>\n                <li>Step one</li>\n                <li>Step two</li>\n                <li>Step three</li>\n            </ul>\n        </li>\n        <li>Heading two:\n            <ul>\n                <li>Step one</li>\n                <li>Step two</li>\n                <li>Step three</li>\n            </ul>\n      </li>\n      </ol>\n    `\n  }\n}",...NestedList.parameters?.docs?.source}}};const __namedExportsOrder=["Default","InContactsBlock","List","NestedList"]}}]);