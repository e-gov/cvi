import {
  TestBed,
  ComponentFixture,
  ComponentFixtureAutoDetect,
} from '@angular/core/testing';
import { FormNotificationDirective } from './form-notification.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormNotificationSeverity } from './form-notification';

@Component({
  template: `
    <cvi-ng-datepicker
      cviNgFormNotification
      [severityLevel]="severityLevel"
      [display]="display"
      [message]="message"
    >
    </cvi-ng-datepicker>
  `,
})
class TestComponent {
  display = false;
  message = 'Test message';
  severityLevel: FormNotificationSeverity = 'warning';
}

describe('FormNotificationDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: FormNotificationDirective;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNotificationDirective, TestComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(
      By.directive(FormNotificationDirective)
    );
    directive = debugElement.injector.get(FormNotificationDirective);
  });

  it('should create the directive', () => {
    expect(directive).toBeTruthy();
  });

  it('should create component when display is true', () => {
    component.display = true;
    fixture.detectChanges();
    expect(directive['componentRef']?.instance).toBeTruthy();
  });

  it('should not create component when display is false', () => {
    component.display = false;
    fixture.detectChanges();
    expect(directive['componentRef']?.instance).toBeFalsy();
  });

  it('should update component properties on input changes', () => {
    component.display = true;
    component.message = 'Updated message';
    component.severityLevel = 'error';
    fixture.detectChanges();

    expect(directive['componentRef']).toBeTruthy();
    expect(directive['componentRef']?.instance.display).toBe(true);
    expect(directive['componentRef']?.instance.message).toBe('Updated message');
    expect(directive['componentRef']?.instance.severity).toBe('error');
  });
});
