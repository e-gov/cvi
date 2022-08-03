import { Component, OnInit, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'ria-components-button',
  template: ` <p>button works!</p> `,
  styles: [],
})
export class ButtonComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonComponentModule {}
