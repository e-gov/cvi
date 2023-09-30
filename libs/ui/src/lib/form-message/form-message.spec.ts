import {
  TestBed,
  ComponentFixture,
  ComponentFixtureAutoDetect,
} from '@angular/core/testing';
import { FormMessageDirective } from './form-message.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormMessageSeverity } from './form-message';

@Component({
  template: `
    <cvi-ng-datepicker
      cviNgFormMessage
      [severityLevel]="severityLevel"
      [displayMessage]="displayMessage"
      [message]="message"
      [title]=""
    >
    </cvi-ng-datepicker>
  `,
})
class TestComponent {
  displayMessage = false;
  message = 'Test message';
  severityLevel: FormMessageSeverity = 'warning';
}

describe('FormMessageDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: FormMessageDirective;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMessageDirective, TestComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(
      By.directive(FormMessageDirective)
    );
    directive = debugElement.injector.get(FormMessageDirective);
  });

  it('should create the directive', () => {
    expect(directive).toBeTruthy();
  });

  it('should create component when display is true', () => {
    component.displayMessage = true;
    fixture.detectChanges();
    expect(directive.displayMessage).toBe(true);
  });

  it('should not create component when display is false', () => {
    component.displayMessage = false;
    fixture.detectChanges();
    expect(directive['componentRef']?.instance).toBeFalsy();
  });

  it('should update component properties on input changes', () => {
    component.displayMessage = true;
    component.message = 'Updated message';
    component.severityLevel = 'error';
    fixture.detectChanges();

    expect(directive.displayMessage).toBe(true);
    expect(directive.message).toBe('Updated message');
    expect(directive.severityLevel).toBe('error');
  });
});
