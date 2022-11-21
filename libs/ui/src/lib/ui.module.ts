import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrackComponent } from './track/track.component';
import { ButtonComponent } from './button/button.component';
import { FormItemComponent } from './form-item/form-item.component';
import { InputComponent } from './input/input.component';
import { RadioGroupComponent } from './radio-button/radio-group/radio-group.component';
import { RadioButtonComponent } from './radio-button/radio-button/radio-button.component';
import { IconComponent } from './icons/icon/icon.component';
import { LabeledIconComponent } from './icons/labeled-icon/labeled-icon.component';
import { StepsComponent } from './steps/steps/steps.component';
import { StepComponent } from './steps/step/step.component';
import { StepPanelComponent } from './steps/step-panel/step-panel.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { TextareaComponent } from './textarea/textarea.component';
import { OptionButtonComponent } from './radio-button/option-button/option-button.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemDirective } from './accordion/directives/accordion-item.directive';
import { AccordionContentDirective } from './accordion/directives/accordion-content.directive';
import { AccordionTitleDirective } from './accordion/directives/accordion-title.directive';
import { AccordionHeaderDirective } from './accordion/directives/accordion-header.directive';
import { HtmlSectionComponent } from './html-section/html-section.component';
import { SafeHtmlPipe } from './html-section/safe-html-pipe';
import { NotificationComponent } from './notification/notification.component';
import { NotificationSeverityToHeaderIconPipe } from './notification/notification-severity-to-header-icon.pipe';
import { IconsRegistry } from './icons/icons-registry.service';
// Only import the icons used inside the library
import {
  veeraArrowALeft,
  veeraArrowARight,
  veeraCall,
  veeraCheckCircleOutline,
  veeraClose,
  veeraEmail,
  veeraErrorOutline,
  veeraHappyFace,
  veeraInfo,
  veeraLocation,
  veeraSadFace,
  veeraScreenShare,
  veeraSuccess,
  veeraWarningAmber,
  veeraArrowDown,
  veeraArrowUp,
  veeraEditSimple,
} from '@ria/veera-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SelectComponent } from './select/select.component';
import {
  LabelTemplateDirective,
  OptionTemplateDirective,
} from './select/select-templates.directive';
import { DataAttributeDirective } from './directives/data-attribute.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TabComponent } from './tabs/tab.component';
import { TabGroupComponent } from './tabs/tab-group.component';
import { DefaultToastConfig, TOAST_CONFIG } from './toast/toast-config';
import { ToastComponent } from './toast/toast.component';
import { ToastContainerComponent } from './toast/toast-container.component';
import { TableOfContentsSectionDirective } from './table-of-contents/toc-section.directive';
import { TableOfContentsWrapperComponent } from './table-of-contents/table-of-contents-wrapper/table-of-contents-wrapper.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents/table-of-contents.component';
import { TableOfContentsItemComponent } from './table-of-contents/table-of-contents-item/table-of-contents-item.component';

const components = [
  TrackComponent,
  ButtonComponent,
  InputComponent,
  FormItemComponent,
  IconComponent,
  LabeledIconComponent,
  StepsComponent,
  StepComponent,
  StepPanelComponent,
  RadioGroupComponent,
  RadioButtonComponent,
  OptionButtonComponent,
  FeedbackComponent,
  TextareaComponent,
  HtmlSectionComponent,
  AccordionComponent,
  AccordionItemDirective,
  AccordionContentDirective,
  AccordionTitleDirective,
  AccordionHeaderDirective,
  TableOfContentsSectionDirective,
  TableOfContentsWrapperComponent,
  TableOfContentsComponent,
  TableOfContentsItemComponent,
  NotificationComponent,
  BreadcrumbsComponent,
  SelectComponent,
  LabelTemplateDirective,
  OptionTemplateDirective,
  DataAttributeDirective,
  TooltipComponent,
  TooltipDirective,
  TabComponent,
  TabGroupComponent,
  ToastComponent,
  ToastContainerComponent,
];

const pipes = [SafeHtmlPipe, NotificationSeverityToHeaderIconPipe];

@NgModule({
  imports: [CommonModule, TextFieldModule, ReactiveFormsModule],
  declarations: [...components, ...pipes],
  exports: [...components, ...pipes, TextFieldModule, DataAttributeDirective],
  providers: [
    ...pipes,
    {
      provide: TOAST_CONFIG,
      useValue: {
        default: DefaultToastConfig,
      },
    },
  ],
})
export class UiModule {
  constructor(private registry: IconsRegistry) {
    this.registry.registerIcons([
      veeraCall,
      veeraClose,
      veeraInfo,
      veeraCheckCircleOutline,
      veeraWarningAmber,
      veeraErrorOutline,
      veeraArrowALeft,
      veeraArrowARight,
      veeraSadFace,
      veeraHappyFace,
      veeraScreenShare,
      veeraSuccess,
      veeraEmail,
      veeraLocation,
      veeraArrowDown,
      veeraArrowUp,
      veeraEditSimple,
    ]);
  }
}
