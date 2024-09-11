"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[7336],{"./node_modules/rxjs/dist/esm5/internal/operators/delay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>delay});var scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),concat=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),take=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),noop=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");var map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");var mergeMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");function delayWhen(delayDurationSelector,subscriptionDelay){return subscriptionDelay?function(source){return(0,concat.W)(subscriptionDelay.pipe((0,take.U)(1),function ignoreElements(){return(0,lift.i)((function(source,subscriber){source.subscribe((0,OperatorSubscriber.e)(subscriber,noop.K))}))}()),source.pipe(delayWhen(delayDurationSelector)))}:(0,mergeMap.O)((function(value,index){return(0,innerFrom.Uv)(delayDurationSelector(value,index)).pipe((0,take.U)(1),function mapTo(value){return(0,map.k)((function(){return value}))}(value))}))}var timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function delay(due,scheduler){void 0===scheduler&&(scheduler=scheduler_async.M);var duration=(0,timer.k)(due,scheduler);return delayWhen((function(){return duration}))}},"./libs/ui/src/lib/accordion/accordion.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Mobile:()=>Mobile,WithCustomHeader:()=>WithCustomHeader,WithHTMLInTitle:()=>WithHTMLInTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>accordion_component_stories});var from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),concatMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),delay=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/delay.js");const accordion_component_stories={title:"Angular/Accordion",parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSelector | `cvi-ng-accordion`\nComponent name | `AccordionComponent`\nDesign system module | -\nContent | yes\nPermitted parent/ancestors | any\nPermitted children | `cvi-ng-accordion-item`\n\n## Where to use\n\nUtilise when there is a need to display a list of questions with answers displayed in a compact way.\n\nCustom titles and custom headers can be used via `cviNgAccordionTitle` and `cviNgAccordionHeader` `ng-template` directives.\n"}}},args:{singleOpen:!0,content$:(0,from.Q)([[{title:"I am the title of the first observable array element",content:"Content is irrelevant"},{title:"I am the title of the second observable array element",content:"This content is also irrelevant"}]]).pipe((0,concatMap.m)((item=>(0,of.of)(item).pipe((0,delay.o)(500)))))}},Default={render:args=>({props:args,template:'\n      <cvi-ng-accordion [singleOpen]="singleOpen">\n        <cvi-ng-accordion-item title="Super simple accordion">\n          <ng-template cviNgAccordionContent>\n            <p>Some content here. Yes! In your face, Gandhi! I\'ll get my kit! And I\'d do it again! And perhaps a third time! But that would be it. What are you hacking off? Is it my torso?! \'It is!\' My precious torso! OK, if everyone\'s finished being stupid.</p>\n          </ng-template>\n        </cvi-ng-accordion-item>\n        <cvi-ng-accordion-item title="Another item with details" details="Viimati muudetud 23.12.2023 | Teksti koostas Justiitsministeerium">\n          <ng-template cviNgAccordionContent>\n            Qua qua\n          </ng-template>\n        </cvi-ng-accordion-item>\n        <cvi-ng-accordion-item title="Yet another item, but this time disabled with a very long text" [disabled]="true">\n          <ng-template cviNgAccordionContent>\n            Howdy!\n          </ng-template>\n        </cvi-ng-accordion-item>\n        <cvi-ng-accordion-item title="And until then, I can never die? Noooooo! I can explain. It\'s very valuable. Oh, all right, I am. You, minion. Lift my arm. AFTER HIM! You can crush me but you can\'t crush my spirit! I\'ve been there. My folks were always on me to groom myself and wear underpants. What am I, the pope? A true inspiration for the children.">\n          <ng-template cviNgAccordionContent>\n            One helluva content\n          </ng-template>\n        </cvi-ng-accordion-item>\n        <cvi-ng-accordion-item\n          *ngFor="let elem of content$ | async"\n          title="{{elem.title}}">\n          <ng-template cviNgAccordionContent>\n            <p>{{elem.content}}</p>\n          </ng-template>\n        </cvi-ng-accordion-item>\n      </cvi-ng-accordion>\n    '})},Mobile={...Default,parameters:{layout:"fullscreen",viewport:{defaultViewport:"iphone12mini"}}},WithHTMLInTitle={render:args=>({props:args,template:'\n      <cvi-ng-accordion [singleOpen]="singleOpen">\n        <cvi-ng-accordion-item>\n          <ng-template cviNgAccordionTitle>\n            <h1>Custom title with custom HTML and a flag</h1>\n            <svg viewBox="0 471.001 11.999 8.999" width="11.999" height="8.999">\n              <g fill-rule="evenodd" stroke-width="1pt" style="" transform="matrix(0.018748, 0, 0, 0.018748, 0, 471.001068)">\n                <rect width="640" height="477.9" rx="0" ry="0"></rect>\n                <rect width="640" height="159.3" y="320.7" fill="#fff" rx="0" ry="0"></rect>\n                <path fill="#1791ff" d="M0 0h640v159.3H0z"></path>\n              </g>\n            </svg>\n          </ng-template>\n          <ng-template cviNgAccordionContent>\n            <p>Some content here. Yes! In your face, Gandhi! I\'ll get my kit! And I\'d do it again! And perhaps a third time! But that would be it. What are you hacking off? Is it my torso?! \'It is!\' My precious torso! OK, if everyone\'s finished being stupid.</p>\n          </ng-template>\n        </cvi-ng-accordion-item>\n      </cvi-ng-accordion>\n    '})},WithCustomHeader={render:args=>({props:args,template:'\n      <cvi-ng-accordion [singleOpen]="singleOpen">\n        <cvi-ng-accordion-item>\n          <ng-template cviNgAccordionHeader let-toggle="toggle">\n            <h1>Custom header with custom HTML and a button</h1>\n            <button (click)="toggle()">I am a custom button, click me to toggle this item!</button>\n          </ng-template>\n          <ng-template cviNgAccordionContent>\n            <p>Some content here. Yes! In your face, Gandhi! I\'ll get my kit! And I\'d do it again! And perhaps a third time! But that would be it. What are you hacking off? Is it my torso?! \'It is!\' My precious torso! OK, if everyone\'s finished being stupid.</p>\n          </ng-template>\n        </cvi-ng-accordion-item>\n      </cvi-ng-accordion>\n    '})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: AccordionComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <cvi-ng-accordion [singleOpen]="singleOpen">\n        <cvi-ng-accordion-item title="Super simple accordion">\n          <ng-template cviNgAccordionContent>\n            <p>Some content here. Yes! In your face, Gandhi! I\'ll get my kit! And I\'d do it again! And perhaps a third time! But that would be it. What are you hacking off? Is it my torso?! \'It is!\' My precious torso! OK, if everyone\'s finished being stupid.</p>\n          </ng-template>\n        </cvi-ng-accordion-item>\n        <cvi-ng-accordion-item title="Another item with details" details="Viimati muudetud 23.12.2023 | Teksti koostas Justiitsministeerium">\n          <ng-template cviNgAccordionContent>\n            Qua qua\n          </ng-template>\n        </cvi-ng-accordion-item>\n        <cvi-ng-accordion-item title="Yet another item, but this time disabled with a very long text" [disabled]="true">\n          <ng-template cviNgAccordionContent>\n            Howdy!\n          </ng-template>\n        </cvi-ng-accordion-item>\n        <cvi-ng-accordion-item title="And until then, I can never die? Noooooo! I can explain. It\'s very valuable. Oh, all right, I am. You, minion. Lift my arm. AFTER HIM! You can crush me but you can\'t crush my spirit! I\'ve been there. My folks were always on me to groom myself and wear underpants. What am I, the pope? A true inspiration for the children.">\n          <ng-template cviNgAccordionContent>\n            One helluva content\n          </ng-template>\n        </cvi-ng-accordion-item>\n        <cvi-ng-accordion-item\n          *ngFor="let elem of content$ | async"\n          title="{{elem.title}}">\n          <ng-template cviNgAccordionContent>\n            <p>{{elem.content}}</p>\n          </ng-template>\n        </cvi-ng-accordion-item>\n      </cvi-ng-accordion>\n    `\n  })\n}',...Default.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  parameters: {\n    layout: 'fullscreen',\n    viewport: {\n      defaultViewport: 'iphone12mini'\n    }\n  }\n}",...Mobile.parameters?.docs?.source}}},WithHTMLInTitle.parameters={...WithHTMLInTitle.parameters,docs:{...WithHTMLInTitle.parameters?.docs,source:{originalSource:'{\n  render: (args: AccordionComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <cvi-ng-accordion [singleOpen]="singleOpen">\n        <cvi-ng-accordion-item>\n          <ng-template cviNgAccordionTitle>\n            <h1>Custom title with custom HTML and a flag</h1>\n            <svg viewBox="0 471.001 11.999 8.999" width="11.999" height="8.999">\n              <g fill-rule="evenodd" stroke-width="1pt" style="" transform="matrix(0.018748, 0, 0, 0.018748, 0, 471.001068)">\n                <rect width="640" height="477.9" rx="0" ry="0"></rect>\n                <rect width="640" height="159.3" y="320.7" fill="#fff" rx="0" ry="0"></rect>\n                <path fill="#1791ff" d="M0 0h640v159.3H0z"></path>\n              </g>\n            </svg>\n          </ng-template>\n          <ng-template cviNgAccordionContent>\n            <p>Some content here. Yes! In your face, Gandhi! I\'ll get my kit! And I\'d do it again! And perhaps a third time! But that would be it. What are you hacking off? Is it my torso?! \'It is!\' My precious torso! OK, if everyone\'s finished being stupid.</p>\n          </ng-template>\n        </cvi-ng-accordion-item>\n      </cvi-ng-accordion>\n    `\n  })\n}',...WithHTMLInTitle.parameters?.docs?.source}}},WithCustomHeader.parameters={...WithCustomHeader.parameters,docs:{...WithCustomHeader.parameters?.docs,source:{originalSource:'{\n  render: (args: AccordionComponent) => ({\n    props: args,\n    /* template */\n    template: `\n      <cvi-ng-accordion [singleOpen]="singleOpen">\n        <cvi-ng-accordion-item>\n          <ng-template cviNgAccordionHeader let-toggle="toggle">\n            <h1>Custom header with custom HTML and a button</h1>\n            <button (click)="toggle()">I am a custom button, click me to toggle this item!</button>\n          </ng-template>\n          <ng-template cviNgAccordionContent>\n            <p>Some content here. Yes! In your face, Gandhi! I\'ll get my kit! And I\'d do it again! And perhaps a third time! But that would be it. What are you hacking off? Is it my torso?! \'It is!\' My precious torso! OK, if everyone\'s finished being stupid.</p>\n          </ng-template>\n        </cvi-ng-accordion-item>\n      </cvi-ng-accordion>\n    `\n  })\n}',...WithCustomHeader.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Mobile","WithHTMLInTitle","WithCustomHeader"]}}]);