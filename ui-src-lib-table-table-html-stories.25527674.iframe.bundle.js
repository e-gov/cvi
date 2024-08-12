"use strict";(self.webpackChunkcvi_components=self.webpackChunkcvi_components||[]).push([[4972],{"./libs/ui/src/lib/table/table.html.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Mobile:()=>Mobile,Tablet:()=>Tablet,__namedExportsOrder:()=>__namedExportsOrder,default:()=>table_html_stories});const table_html_stories={title:"HTML/Table",parameters:{docs:{description:{component:"## General description\n\nFeature | Description\n- | -\nSass component | `cvi-table`\nCorresponding Javascript component | `TableComponent`\nPermitted parent/ancestors | any\nPermitted Sass components as children | any\n\n## Where to use\n\nSimple table. The table becomes scrollable when there is not enough space.\n\n## How to use\n\nAdd directly to HTML using `.cvi-table*` classes or `@include` mixin `@cvi-table` in your Sass code. When including the mixin, you can change the base class with `$base` parameter.\n"}},options:{selectedPanel:"storybook/html/panel"}}},Default={render:args=>({props:args,template:'\n      <div class="cvi-table">\n        <div class="cvi-table__inner">\n          <table class="cvi-table__table">\n            <tr class="cvi-table__header-row">\n              <th class="cvi-table__header-cell"><div class="cvi-table__header-cell-inner">Sündmusteenus</div></th>\n              <th class="cvi-table__header-cell"><div class="cvi-table__header-cell-inner">Staatus</div></th>\n              <th class="cvi-table__header-cell"><div class="cvi-table__header-cell-inner">Email</div></th>\n              <th class="cvi-table__header-cell"><div class="cvi-table__header-cell-inner">Viimati muudetud</div></th>\n              <th class="cvi-table__header-cell">\n                <div class="cvi-table__header-cell-inner">\n                  <span label="Icons" class="cvi-screenreader-text">Icons</span>\n                </div>\n              </th>\n            </tr>\n            <tr class="cvi-table__body-row">\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">Abiellumine</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <span\n                    class="cvi-status-badge"\n                    style="--color: var(--cvi-color-dark-tangerine-15); --background-color: var(--cvi-color-dark-tangerine-1); --border-color: var(--cvi-color-dark-tangerine-10);">\n                    <div>Mustand</div>\n                  </span>\n                </div>\n              </td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">doagwelcometotheteamoftwenty&#64;cochol.eu</div>\n              </td>\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">2021-07-15</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <div\n                    class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex"\n                    style="--gap: 3; --horizontal-alignment: normal;">\n                    <button title="Edit">\n                      <span class="cvi-screenreader-text">Edit</span>\n                      <span>\n                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="undefined" height="18px">\n                          <path\n                            d="M14.63.739a2.443 2.443 0 0 0-3.455 0l-9.684 9.684a.543.543 0 0 0-.14.239L.078 15.259a.543.543 0 0 0 .668.668l4.598-1.273a.542.542 0 0 0 .239-.14l9.684-9.684c.952-.955.952-2.5 0-3.454zM2.674 10.776l7.925-7.926 2.557 2.556-7.926 7.926ZM2.163 11.8l2.042 2.042-2.825.783Zm12.336-7.738-.576.576-2.556-2.556.576-.576c.53-.53 1.39-.53 1.92 0l.636.637c.53.53.53 1.39 0 1.92z"></path>\n                        </svg>\n                      </span>\n                    </button>\n                    <button title="Delete">\n                      <span class="cvi-screenreader-text">Delete</span>\n                      <span>\n                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="undefined" height="18px">\n                          <path\n                            d="M10.523 5.797c-.237 0-.429.168-.429.375v7.082c0 .206.192.374.429.374.236 0 .428-.168.428-.374V6.172c0-.207-.192-.375-.428-.375ZM5.47 5.797c-.237 0-.429.168-.429.375v7.082c0 .206.192.374.428.374.237 0 .428-.168.428-.374V6.172c0-.207-.191-.375-.428-.375Z"></path>\n                          <path\n                            d="M1.786 4.763v9.232c0 .546.229 1.058.628 1.426a2.26 2.26 0 0 0 1.53.579h8.103c.579 0 1.132-.21 1.53-.579.4-.368.628-.88.628-1.426V4.763c.794-.184 1.309-.855 1.202-1.568-.106-.713-.8-1.246-1.622-1.246h-2.192V1.48a1.385 1.385 0 0 0-.495-1.05A1.814 1.814 0 0 0 9.897 0H6.094a1.814 1.814 0 0 0-1.202.43 1.385 1.385 0 0 0-.494 1.05v.469H2.206c-.822 0-1.516.533-1.622 1.246-.107.713.408 1.384 1.202 1.568Zm10.26 10.488H3.945c-.732 0-1.301-.55-1.301-1.256V4.796h10.705v9.2c0 .704-.57 1.255-1.301 1.255ZM5.256 1.48a.678.678 0 0 1 .243-.522.89.89 0 0 1 .596-.21h3.803a.89.89 0 0 1 .596.21.678.678 0 0 1 .243.521v.469H5.255V1.48Zm-3.05 1.217h11.58c.426 0 .771.302.771.674 0 .373-.345.675-.77.675H2.205c-.426 0-.771-.302-.771-.675 0-.372.345-.674.77-.674Z"></path>\n                          <path\n                            d="M7.996 5.797c-.237 0-.429.168-.429.375v7.082c0 .206.192.374.429.374.236 0 .428-.168.428-.374V6.172c0-.207-.192-.375-.428-.375Z"></path>\n                        </svg>\n                      </span>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr class="cvi-table__body-row">\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">Meteoroloogiateenistus</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <span\n                    class="cvi-status-badge"\n                    style="--color: var(--cvi-color-sea-green-11); --background-color: var(--cvi-color-sea-green-0);">\n                    <div>Avaldatud</div>\n                  </span>\n                </div>\n              </td>\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">utpa&#64;pi.ca</div></td>\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">2018-07-17</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <div\n                    class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex"\n                    style="--gap: 3; --horizontal-alignment: normal;">\n                    <button title="Add">\n                      <span class="cvi-screenreader-text">Add</span>\n                      <span>\n                        <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="undefined" height="18px">\n                          <path d="M28 16H16v12h-4V16H0v-4h12V0h4v12h12v4Z"></path>\n                        </svg>\n                      </span>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr class="cvi-table__body-row">\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">Geoloogilise luure teenistus</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <span\n                    class="cvi-status-badge"\n                    style="--color: var(--cvi-color-sapphire-blue-10); --background-color: var(--cvi-color-sapphire-blue-0);">\n                    <div>Avaldamise ootel</div>\n                  </span>\n                </div>\n              </td>\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">boole&#64;dok.ky</div></td>\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">2016-07-05</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <div\n                    class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex"\n                    style="--gap: 3; --horizontal-alignment: normal;">\n                    <button title="Edit">\n                      <span class="cvi-screenreader-text">Edit</span>\n                      <span>\n                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="undefined" height="18px">\n                          <path\n                            d="M14.63.739a2.443 2.443 0 0 0-3.455 0l-9.684 9.684a.543.543 0 0 0-.14.239L.078 15.259a.543.543 0 0 0 .668.668l4.598-1.273a.542.542 0 0 0 .239-.14l9.684-9.684c.952-.955.952-2.5 0-3.454zM2.674 10.776l7.925-7.926 2.557 2.556-7.926 7.926ZM2.163 11.8l2.042 2.042-2.825.783Zm12.336-7.738-.576.576-2.556-2.556.576-.576c.53-.53 1.39-.53 1.92 0l.636.637c.53.53.53 1.39 0 1.92z"></path>\n                        </svg>\n                      </span>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    '})},Mobile={...Default,parameters:{viewport:{defaultViewport:"iphone12mini"}}},Tablet={...Default,parameters:{viewport:{defaultViewport:"ipad"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (args: unknown) => ({\n    props: args,\n    /* template */\n    template: `\n      <div class="cvi-table">\n        <div class="cvi-table__inner">\n          <table class="cvi-table__table">\n            <tr class="cvi-table__header-row">\n              <th class="cvi-table__header-cell"><div class="cvi-table__header-cell-inner">Sündmusteenus</div></th>\n              <th class="cvi-table__header-cell"><div class="cvi-table__header-cell-inner">Staatus</div></th>\n              <th class="cvi-table__header-cell"><div class="cvi-table__header-cell-inner">Email</div></th>\n              <th class="cvi-table__header-cell"><div class="cvi-table__header-cell-inner">Viimati muudetud</div></th>\n              <th class="cvi-table__header-cell">\n                <div class="cvi-table__header-cell-inner">\n                  <span label="Icons" class="cvi-screenreader-text">Icons</span>\n                </div>\n              </th>\n            </tr>\n            <tr class="cvi-table__body-row">\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">Abiellumine</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <span\n                    class="cvi-status-badge"\n                    style="--color: var(--cvi-color-dark-tangerine-15); --background-color: var(--cvi-color-dark-tangerine-1); --border-color: var(--cvi-color-dark-tangerine-10);">\n                    <div>Mustand</div>\n                  </span>\n                </div>\n              </td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">doagwelcometotheteamoftwenty&#64;cochol.eu</div>\n              </td>\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">2021-07-15</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <div\n                    class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex"\n                    style="--gap: 3; --horizontal-alignment: normal;">\n                    <button title="Edit">\n                      <span class="cvi-screenreader-text">Edit</span>\n                      <span>\n                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="undefined" height="18px">\n                          <path\n                            d="M14.63.739a2.443 2.443 0 0 0-3.455 0l-9.684 9.684a.543.543 0 0 0-.14.239L.078 15.259a.543.543 0 0 0 .668.668l4.598-1.273a.542.542 0 0 0 .239-.14l9.684-9.684c.952-.955.952-2.5 0-3.454zM2.674 10.776l7.925-7.926 2.557 2.556-7.926 7.926ZM2.163 11.8l2.042 2.042-2.825.783Zm12.336-7.738-.576.576-2.556-2.556.576-.576c.53-.53 1.39-.53 1.92 0l.636.637c.53.53.53 1.39 0 1.92z"></path>\n                        </svg>\n                      </span>\n                    </button>\n                    <button title="Delete">\n                      <span class="cvi-screenreader-text">Delete</span>\n                      <span>\n                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="undefined" height="18px">\n                          <path\n                            d="M10.523 5.797c-.237 0-.429.168-.429.375v7.082c0 .206.192.374.429.374.236 0 .428-.168.428-.374V6.172c0-.207-.192-.375-.428-.375ZM5.47 5.797c-.237 0-.429.168-.429.375v7.082c0 .206.192.374.428.374.237 0 .428-.168.428-.374V6.172c0-.207-.191-.375-.428-.375Z"></path>\n                          <path\n                            d="M1.786 4.763v9.232c0 .546.229 1.058.628 1.426a2.26 2.26 0 0 0 1.53.579h8.103c.579 0 1.132-.21 1.53-.579.4-.368.628-.88.628-1.426V4.763c.794-.184 1.309-.855 1.202-1.568-.106-.713-.8-1.246-1.622-1.246h-2.192V1.48a1.385 1.385 0 0 0-.495-1.05A1.814 1.814 0 0 0 9.897 0H6.094a1.814 1.814 0 0 0-1.202.43 1.385 1.385 0 0 0-.494 1.05v.469H2.206c-.822 0-1.516.533-1.622 1.246-.107.713.408 1.384 1.202 1.568Zm10.26 10.488H3.945c-.732 0-1.301-.55-1.301-1.256V4.796h10.705v9.2c0 .704-.57 1.255-1.301 1.255ZM5.256 1.48a.678.678 0 0 1 .243-.522.89.89 0 0 1 .596-.21h3.803a.89.89 0 0 1 .596.21.678.678 0 0 1 .243.521v.469H5.255V1.48Zm-3.05 1.217h11.58c.426 0 .771.302.771.674 0 .373-.345.675-.77.675H2.205c-.426 0-.771-.302-.771-.675 0-.372.345-.674.77-.674Z"></path>\n                          <path\n                            d="M7.996 5.797c-.237 0-.429.168-.429.375v7.082c0 .206.192.374.429.374.236 0 .428-.168.428-.374V6.172c0-.207-.192-.375-.428-.375Z"></path>\n                        </svg>\n                      </span>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr class="cvi-table__body-row">\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">Meteoroloogiateenistus</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <span\n                    class="cvi-status-badge"\n                    style="--color: var(--cvi-color-sea-green-11); --background-color: var(--cvi-color-sea-green-0);">\n                    <div>Avaldatud</div>\n                  </span>\n                </div>\n              </td>\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">utpa&#64;pi.ca</div></td>\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">2018-07-17</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <div\n                    class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex"\n                    style="--gap: 3; --horizontal-alignment: normal;">\n                    <button title="Add">\n                      <span class="cvi-screenreader-text">Add</span>\n                      <span>\n                        <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="undefined" height="18px">\n                          <path d="M28 16H16v12h-4V16H0v-4h12V0h4v12h12v4Z"></path>\n                        </svg>\n                      </span>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr class="cvi-table__body-row">\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">Geoloogilise luure teenistus</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <span\n                    class="cvi-status-badge"\n                    style="--color: var(--cvi-color-sapphire-blue-10); --background-color: var(--cvi-color-sapphire-blue-0);">\n                    <div>Avaldamise ootel</div>\n                  </span>\n                </div>\n              </td>\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">boole&#64;dok.ky</div></td>\n              <td class="cvi-table__body-cell"><div class="cvi-table__body-cell-inner">2016-07-05</div></td>\n              <td class="cvi-table__body-cell">\n                <div class="cvi-table__body-cell-inner">\n                  <div\n                    class="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex"\n                    style="--gap: 3; --horizontal-alignment: normal;">\n                    <button title="Edit">\n                      <span class="cvi-screenreader-text">Edit</span>\n                      <span>\n                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="undefined" height="18px">\n                          <path\n                            d="M14.63.739a2.443 2.443 0 0 0-3.455 0l-9.684 9.684a.543.543 0 0 0-.14.239L.078 15.259a.543.543 0 0 0 .668.668l4.598-1.273a.542.542 0 0 0 .239-.14l9.684-9.684c.952-.955.952-2.5 0-3.454zM2.674 10.776l7.925-7.926 2.557 2.556-7.926 7.926ZM2.163 11.8l2.042 2.042-2.825.783Zm12.336-7.738-.576.576-2.556-2.556.576-.576c.53-.53 1.39-.53 1.92 0l.636.637c.53.53.53 1.39 0 1.92z"></path>\n                        </svg>\n                      </span>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    `\n  })\n}',...Default.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  parameters: {\n    viewport: {\n      defaultViewport: 'iphone12mini'\n    }\n  }\n}",...Mobile.parameters?.docs?.source}}},Tablet.parameters={...Tablet.parameters,docs:{...Tablet.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  parameters: {\n    viewport: {\n      defaultViewport: 'ipad'\n    }\n  }\n}",...Tablet.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Mobile","Tablet"]}}]);