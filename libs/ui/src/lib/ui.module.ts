import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrackComponent } from './track/track.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';
import { ButtonComponent } from './button/button.component';
import { StatusBadgeComponent } from './status-badge/status-badge.component';
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
  cviArrowALeft,
  cviArrowARight,
  cviArrowBLeft,
  cviArrowBRight,
  cviArrowDown,
  cviArrowDownAlt,
  cviArrowUp,
  cviArrowUpAlt,
  cviCalendar,
  cviCall,
  cviCheckCircleOutline,
  cviClose,
  cviEditSimple,
  cviEmail,
  cviErrorOutline,
  cviHappyFace,
  cviInfo,
  cviLocation,
  cviLoupe,
  cviSadFace,
  cviScreenShare,
  cviSuccess,
  cviWarningAmber,
} from '@egov/cvi-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SelectComponent } from './select/select.component';
import { SelectNavigationDirective } from './select/select-navigation.directive';
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
import { CharacterCounterComponent } from './character-counter/character-counter.component';
import { CharacterCounterDirective } from './character-counter/character-counter.directive';
import { TableOfContentsSectionDirective } from './table-of-contents/toc-section.directive';
import { GeneratedTableOfContentsComponent } from './table-of-contents/generated-table-of-contents/generated-table-of-contents.component';
import { TableOfContentsWrapperComponent } from './table-of-contents/table-of-contents-wrapper/table-of-contents-wrapper.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents/table-of-contents.component';
import { TableOfContentsItemComponent } from './table-of-contents/table-of-contents-item/table-of-contents-item.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal/modal.directive';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { A11yModule } from '@angular/cdk/a11y';
import { ReorderableListComponent } from './reorderable-list/reorderable-list/reorderable-list.component';
import { ReorderableListItemComponent } from './reorderable-list/reorderable-list-item/reorderable-list-item.component';
import { TableComponent } from './table/table.component';
import { BodyCellComponent } from './table/body-cell/body-cell.component';
import { HeaderCellComponent } from './table/header-cell/header-cell.component';
import { ScreenreaderTextComponent } from './screenreader-text/screenreader-text.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DatepickerCalendarComponent } from './datepicker/datepicker-calendar.component';
import { DATEPICKER_LABEL_CONFIG } from './datepicker/datepicker-label-config.token';
import { DefaultDatepickerLabelConfig } from './datepicker/default-datepicker-label.config';

const components = [
  TrackComponent,
  ContentContainerComponent,
  ContentPanelComponent,
  StatusBadgeComponent,
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
  GeneratedTableOfContentsComponent,
  NotificationComponent,
  BreadcrumbsComponent,
  SelectComponent,
  SelectNavigationDirective,
  LabelTemplateDirective,
  OptionTemplateDirective,
  DataAttributeDirective,
  TooltipComponent,
  TooltipDirective,
  TabComponent,
  TabGroupComponent,
  ToastComponent,
  ToastContainerComponent,
  CharacterCounterComponent,
  CharacterCounterDirective,
  ModalComponent,
  ModalDirective,
  ConfirmationModalComponent,
  ReorderableListComponent,
  ReorderableListItemComponent,
  TableComponent,
  ScreenreaderTextComponent,
  BodyCellComponent,
  HeaderCellComponent,
  DatepickerComponent,
  DatepickerCalendarComponent,
];

const pipes = [SafeHtmlPipe, NotificationSeverityToHeaderIconPipe];

const directives = [DataAttributeDirective];

@NgModule({
  imports: [
    CommonModule,
    TextFieldModule,
    ReactiveFormsModule,
    FormsModule,
    A11yModule,
  ],
  declarations: [...components, ...pipes],
  exports: [...components, ...pipes, ...directives],
  providers: [
    ...pipes,
    {
      provide: TOAST_CONFIG,
      useValue: {
        default: DefaultToastConfig,
      },
    },
    {
      provide: DATEPICKER_LABEL_CONFIG,
      useValue: new DefaultDatepickerLabelConfig(),
    },
  ],
})
export class UiModule {
  constructor(private registry: IconsRegistry) {
    this.registry.registerIcons([
      cviCall,
      cviClose,
      cviInfo,
      cviCheckCircleOutline,
      cviWarningAmber,
      cviErrorOutline,
      cviLoupe,
      cviArrowALeft,
      cviArrowARight,
      cviArrowBLeft,
      cviArrowBRight,
      cviSadFace,
      cviHappyFace,
      cviScreenShare,
      cviSuccess,
      cviEmail,
      cviLocation,
      cviArrowDown,
      cviArrowUp,
      cviEditSimple,
      cviArrowUpAlt,
      cviArrowDownAlt,
      cviCalendar,
    ]);
  }
}
