"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[2072],{"./node_modules/rxjs/dist/esm5/internal/operators/delay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>delay});var scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),concat=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),take=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),noop=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");var map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");var mergeMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");function delayWhen(delayDurationSelector,subscriptionDelay){return subscriptionDelay?function(source){return(0,concat.W)(subscriptionDelay.pipe((0,take.U)(1),function ignoreElements(){return(0,lift.i)((function(source,subscriber){source.subscribe((0,OperatorSubscriber.e)(subscriber,noop.K))}))}()),source.pipe(delayWhen(delayDurationSelector)))}:(0,mergeMap.O)((function(value,index){return(0,innerFrom.Uv)(delayDurationSelector(value,index)).pipe((0,take.U)(1),function mapTo(value){return(0,map.k)((function(){return value}))}(value))}))}var timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function delay(due,scheduler){void 0===scheduler&&(scheduler=scheduler_async.M);var duration=(0,timer.k)(due,scheduler);return delayWhen((function(){return duration}))}},"./libs/ui/src/lib/table-responsive/table-responsive.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Mobile:()=>Mobile,Tablet:()=>Tablet,WithCustomHeader:()=>WithCustomHeader,WithCustomHeaderAndBody:()=>WithCustomHeaderAndBody,WithCustomHeaderAndBodyMobile:()=>WithCustomHeaderAndBodyMobile,WithObservables:()=>WithObservables,WithTranslations:()=>WithTranslations,__namedExportsOrder:()=>__namedExportsOrder,default:()=>table_responsive_component_stories});var from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),concatMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),delay=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/delay.js");const statuses=[{severity:"info",label:"Lõppenud"},{severity:"error",label:"Katkenud"}],getStatusBadgeLabelBySeverity=severity=>statuses.find((st=>st.severity===severity))?.label||"info",table_responsive_component_stories={title:"Angular/Responsive table",parameters:{docs:{description:{component:"## General description\n\n| Feature                    | Description                |\n|----------------------------|----------------------------|\n| Selector                   | `cvi-ng-table-responsive`  |\n| Component name             | `TableResponsiveComponent` |\n| Permitted parent/ancestors | any                        |\n| Permitted children         | -                          |\n\n## Where to use\n\nWhen you need a simple table to present an inconsiderable amount of data. The table will be visualised as mobile-friendly cards on small viewports.\n"}}},args:{headerLabels:["First column","Another second column","Third column","Fourth one and that is it!"],data:[{event:"Abielu sõlmimine",statusSeverity:"info",lastChanged:"2021-07-20",statusLabel:"Lõppenud"},{event:"Lapse saamine",statusSeverity:"error",lastChanged:"2018-07-17",statusLabel:"Katkenud"}]}},Default={render:args=>({props:args,template:'\n      <cvi-ng-table-responsive [data]="data" [headerLabels]="headerLabels"></cvi-ng-table-responsive>\n    '})},Mobile={...Default,parameters:{viewport:{defaultViewport:"iphone12mini"}}},Tablet={...Default,parameters:{viewport:{defaultViewport:"ipad"}}},WithCustomHeader={render:args=>({props:args,template:'\n      <cvi-ng-table-responsive [data]="data" [headerLabels]="headerLabels">\n        <ng-template #headerTemplate let-label let-colIdx="colIdx">\n          <ng-container *ngIf="colIdx < 2">{{ label }}</ng-container>\n          <ng-container *ngIf="colIdx === 2">\n            {{ label }}\n            <cvi-ng-icon name="warning_amber" [height]="12"></cvi-ng-icon>\n          </ng-container>\n          <cvi-ng-button *ngIf="colIdx === 3" size="s" appearance="text">Click</cvi-ng-button>\n        </ng-template>\n      </cvi-ng-table-responsive>\n    '})},WithCustomHeaderAndBody={render:args=>({props:{...args,headerLabels:["Lõppkuupäev","Sündmus","Staatus","Pealkiri"],data:[{event:"Abielu sõlmimine",statusSeverity:"info",lastChanged:"2021-07-20",statusLabel:"Lõppenud"},{event:"Abielu sõlmimine",statusSeverity:"error",lastChanged:"2018-07-17",statusLabel:"Katkenud"}],getStatusBadgeLabelBySeverity},styles:[":host {\n        --cvi-button--text-decoration: none;\n      }"],template:'\n      <cvi-ng-table-responsive [data]="data" [headerLabels]="headerLabels">\n\n        <ng-template #headerTemplate let-label let-colIdx="colIdx">\n          <ng-container *ngIf="colIdx !== 3">{{ label }}</ng-container>\n          <cvi-ng-screenreader-text [label]="label" *ngIf="colIdx === 3"></cvi-ng-screenreader-text>\n        </ng-template>\n\n        <ng-template #bodyTemplate let-row let-colIdx="colIdx">\n          <ng-container *ngIf="colIdx === 0">{{ row.lastChanged | date: \'dd.MM.YYYY\' }}</ng-container>\n          <ng-container *ngIf="colIdx === 1">{{ row.event }}</ng-container>\n          <cvi-ng-status-badge *ngIf="colIdx === 2" [severity]="row.statusSeverity" [label]="getStatusBadgeLabelBySeverity(row.statusSeverity)" [withTooltip]="true" [tooltipText]="row.statusLabel" [hasBackground]="false"></cvi-ng-status-badge>\n          <ng-container *ngIf="colIdx === 3">\n            <cvi-ng-button appearance="text">\n              <cvi-ng-track horizontalAlignment="center" verticalAlignment="center" [gap]="3">\n                <cvi-ng-labeled-icon [gap]="3" iconPosition="after" name="arrow_b_right" [iconHeight]="14">Vaata</cvi-ng-labeled-icon>\n              </cvi-ng-track>\n            </cvi-ng-button>\n          </ng-container>\n        </ng-template>\n      </cvi-ng-table-responsive>\n    '})},WithCustomHeaderAndBodyMobile={...WithCustomHeaderAndBody,name:"With Custom Header And Body (Mobile)",parameters:{viewport:{defaultViewport:"iphone12mini"}}},WithTranslations={render:args=>({props:{...args,data:[{who:"Monkey",what:"see-do"},{who:"Bear",what:"drink-drank-drunk"}]},template:'\n      <cvi-ng-table-responsive [data]="data" [headerLabels]="\'common.tableResponsive.headerLabels\' | translate"></cvi-ng-table-responsive>\n    '}),parameters:{layout:"fullscreen",backgrounds:{default:"Gray"},viewport:{defaultViewport:"iphone12mini"}}},WithObservables={render:args=>({props:{...args,data:[{who:"Monkey",what:"see-do"},{who:"Bear",what:"drink-drank-drunk"}],headerLabels$:(0,from.Q)([["Lunes","Viernes"]]).pipe((0,concatMap.m)((item=>(0,of.of)(item).pipe((0,delay.o)(1e3)))))},template:'\n      <cvi-ng-table-responsive [data]="data" [headerLabels]="headerLabels$ | async"></cvi-ng-table-responsive>\n    '}),parameters:{chromatic:{delay:1300},layout:"fullscreen",backgrounds:{default:"Gray"},viewport:{defaultViewport:"iphone12mini"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: TableResponsiveComponent) => ({\n    props: args,\n    template: `\n      <cvi-ng-table-responsive [data]="data" [headerLabels]="headerLabels"></cvi-ng-table-responsive>\n    `\n  })\n}',...Default.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  parameters: {\n    viewport: {\n      defaultViewport: 'iphone12mini'\n    }\n  }\n}",...Mobile.parameters?.docs?.source}}},Tablet.parameters={...Tablet.parameters,docs:{...Tablet.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  parameters: {\n    viewport: {\n      defaultViewport: 'ipad'\n    }\n  }\n}",...Tablet.parameters?.docs?.source}}},WithCustomHeader.parameters={...WithCustomHeader.parameters,docs:{...WithCustomHeader.parameters?.docs,source:{originalSource:'{\n  render: (args: TableResponsiveComponent) => ({\n    props: args,\n    template: `\n      <cvi-ng-table-responsive [data]="data" [headerLabels]="headerLabels">\n        <ng-template #headerTemplate let-label let-colIdx="colIdx">\n          <ng-container *ngIf="colIdx < 2">{{ label }}</ng-container>\n          <ng-container *ngIf="colIdx === 2">\n            {{ label }}\n            <cvi-ng-icon name="warning_amber" [height]="12"></cvi-ng-icon>\n          </ng-container>\n          <cvi-ng-button *ngIf="colIdx === 3" size="s" appearance="text">Click</cvi-ng-button>\n        </ng-template>\n      </cvi-ng-table-responsive>\n    `\n  })\n}',...WithCustomHeader.parameters?.docs?.source}}},WithCustomHeaderAndBody.parameters={...WithCustomHeaderAndBody.parameters,docs:{...WithCustomHeaderAndBody.parameters?.docs,source:{originalSource:'{\n  render: (args: TableResponsiveComponent) => ({\n    props: {\n      ...args,\n      headerLabels: [\'Lõppkuupäev\', \'Sündmus\', \'Staatus\', \'Pealkiri\'],\n      data: [{\n        event: \'Abielu sõlmimine\',\n        statusSeverity: \'info\',\n        lastChanged: \'2021-07-20\',\n        statusLabel: \'Lõppenud\'\n      }, {\n        event: \'Abielu sõlmimine\',\n        statusSeverity: \'error\',\n        lastChanged: \'2018-07-17\',\n        statusLabel: \'Katkenud\'\n      }],\n      getStatusBadgeLabelBySeverity\n    },\n    styles: [`:host {\n        --cvi-button--text-decoration: none;\n      }`],\n    /* template */\n    template: `\n      <cvi-ng-table-responsive [data]="data" [headerLabels]="headerLabels">\n\n        <ng-template #headerTemplate let-label let-colIdx="colIdx">\n          <ng-container *ngIf="colIdx !== 3">{{ label }}</ng-container>\n          <cvi-ng-screenreader-text [label]="label" *ngIf="colIdx === 3"></cvi-ng-screenreader-text>\n        </ng-template>\n\n        <ng-template #bodyTemplate let-row let-colIdx="colIdx">\n          <ng-container *ngIf="colIdx === 0">{{ row.lastChanged | date: \'dd.MM.YYYY\' }}</ng-container>\n          <ng-container *ngIf="colIdx === 1">{{ row.event }}</ng-container>\n          <cvi-ng-status-badge *ngIf="colIdx === 2" [severity]="row.statusSeverity" [label]="getStatusBadgeLabelBySeverity(row.statusSeverity)" [withTooltip]="true" [tooltipText]="row.statusLabel" [hasBackground]="false"></cvi-ng-status-badge>\n          <ng-container *ngIf="colIdx === 3">\n            <cvi-ng-button appearance="text">\n              <cvi-ng-track horizontalAlignment="center" verticalAlignment="center" [gap]="3">\n                <cvi-ng-labeled-icon [gap]="3" iconPosition="after" name="arrow_b_right" [iconHeight]="14">Vaata</cvi-ng-labeled-icon>\n              </cvi-ng-track>\n            </cvi-ng-button>\n          </ng-container>\n        </ng-template>\n      </cvi-ng-table-responsive>\n    `\n  })\n}',...WithCustomHeaderAndBody.parameters?.docs?.source}}},WithCustomHeaderAndBodyMobile.parameters={...WithCustomHeaderAndBodyMobile.parameters,docs:{...WithCustomHeaderAndBodyMobile.parameters?.docs,source:{originalSource:"{\n  ...WithCustomHeaderAndBody,\n  name: 'With Custom Header And Body (Mobile)',\n  parameters: {\n    viewport: {\n      defaultViewport: 'iphone12mini'\n    }\n  }\n}",...WithCustomHeaderAndBodyMobile.parameters?.docs?.source}}},WithTranslations.parameters={...WithTranslations.parameters,docs:{...WithTranslations.parameters?.docs,source:{originalSource:"{\n  render: (args: TableResponsiveComponent) => ({\n    props: {\n      ...args,\n      data: [{\n        who: 'Monkey',\n        what: 'see-do'\n      }, {\n        who: 'Bear',\n        what: 'drink-drank-drunk'\n      }]\n    },\n    /* template */\n    template: `\n      <cvi-ng-table-responsive [data]=\"data\" [headerLabels]=\"'common.tableResponsive.headerLabels' | translate\"></cvi-ng-table-responsive>\n    `\n  }),\n  parameters: {\n    layout: 'fullscreen',\n    backgrounds: {\n      default: 'Gray'\n    },\n    viewport: {\n      defaultViewport: 'iphone12mini'\n    }\n  }\n}",...WithTranslations.parameters?.docs?.source}}},WithObservables.parameters={...WithObservables.parameters,docs:{...WithObservables.parameters?.docs,source:{originalSource:"{\n  render: (args: TableResponsiveComponent) => ({\n    props: {\n      ...args,\n      data: [{\n        who: 'Monkey',\n        what: 'see-do'\n      }, {\n        who: 'Bear',\n        what: 'drink-drank-drunk'\n      }],\n      headerLabels$: from([['Lunes', 'Viernes']]).pipe(concatMap(item => of(item).pipe(delay(withObservableTitlesDelay))))\n    },\n    /* template */\n    template: `\n      <cvi-ng-table-responsive [data]=\"data\" [headerLabels]=\"headerLabels$ | async\"></cvi-ng-table-responsive>\n    `\n  }),\n  parameters: {\n    chromatic: {\n      delay: withObservableTitlesDelay + 300\n    },\n    layout: 'fullscreen',\n    backgrounds: {\n      default: 'Gray'\n    },\n    viewport: {\n      defaultViewport: 'iphone12mini'\n    }\n  }\n}",...WithObservables.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Mobile","Tablet","WithCustomHeader","WithCustomHeaderAndBody","WithCustomHeaderAndBodyMobile","WithTranslations","WithObservables"]}}]);