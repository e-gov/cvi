import { ChangeDetectorRef, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  CharacterCounterComponent,
  CharacterCounterDirective,
} from '@ria/veera-ng';

@Component({
  selector: 'veera-ng-test-textarea',
  template: `<textarea maxlength="2000"></textarea>`,
})
class TestTextAreaComponent {}

@Component({
  selector: 'veera-ng-test-text-input',
  template: `<input type="text" />`,
})
class TestTextInputComponent {}

@Component({
  selector: 'veera-ng-test-button',
  template: `<input type="button" />`,
})
class TestButtonComponent {}

@Component({
  selector: 'veera-ng-test-random',
  template: `<p>Random text</p>`,
})
class TestRandomComponent {}

@Component({
  template: ` <veera-ng-test-textarea
      veeraNgCharacterCounter
      [maxChars]="10"
    ></veera-ng-test-textarea>
    <veera-ng-test-textarea veeraNgCharacterCounter></veera-ng-test-textarea>
    <veera-ng-test-text-input
      veeraNgCharacterCounter
      [maxChars]="10"
    ></veera-ng-test-text-input>
    <veera-ng-test-text-input
      veeraNgCharacterCounter
    ></veera-ng-test-text-input>
    <veera-ng-test-button veeraNgCharacterCounter></veera-ng-test-button>
    <veera-ng-test-random veeraNgCharacterCounter></veera-ng-test-random>`,
})
class TestComponent {}

async function runOnPushChangeDetection<T>(cf: ComponentFixture<T>) {
  const cd = cf.debugElement.injector.get<ChangeDetectorRef>(
    // tslint:disable-next-line:no-any
    ChangeDetectorRef as any
  );
  cd.markForCheck();
  cd.detectChanges();
  await cf.whenStable();
  return;
}

describe('CharacterCounterDirective', () => {
  let baseComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        CharacterCounterDirective,
        CharacterCounterComponent,
        TestTextAreaComponent,
        TestTextInputComponent,
        TestButtonComponent,
        TestRandomComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    baseComponent = fixture.componentInstance;
    // fixture.detectChanges();
    runOnPushChangeDetection(fixture);

    des = fixture.debugElement.queryAll(
      By.directive(CharacterCounterDirective)
    );
  });

  it('should create', () => {
    expect(baseComponent).toBeTruthy();
  });

  it('should have 6 elements that use character counter directive', () => {
    expect(des.length).toBe(6);
  });

  it('should render the character counter component after a textarea that has both [maxChars] and maxlength value set', () => {
    expect(des[0].nativeElement.nextSibling.tagName).toBe(
      'VEERA-NG-CHARACTER-COUNTER'
    );
  });

  it('should override the maxlength value of the textarea with set [maxChars] value', () => {
    expect(des[0].childNodes[0].nativeNode.maxLength).toBe(10);
  });

  it('should render the character counter component after a textarea that has no [maxChars] but does have maxlength value set', () => {
    expect(des[1].nativeElement.nextSibling.tagName).toBe(
      'VEERA-NG-CHARACTER-COUNTER'
    );
  });

  it('should use the maxlength value of a textarea if no [maxChars] value is set', () => {
    expect(des[1].childNodes[0].nativeNode.maxLength).toBe(2000);
  });

  it('should render the character counter component after a text input that has [maxChars] but no maxlength value set', () => {
    expect(des[2].nativeElement.nextSibling.tagName).toBe(
      'VEERA-NG-CHARACTER-COUNTER'
    );
  });

  it('should set the maximum length of a text input to [maxChars] value', () => {
    expect(des[2].childNodes[0].nativeNode.maxLength).toBe(10);
  });

  it('should not render the character counter component after a text input that has no [maxChars] or maxlength value set', () => {
    expect(des[3].nativeElement.nextSibling.tagName).toBe(undefined);
  });

  it('should not render the character counter component after a button element', () => {
    expect(des[4].nativeElement.nextSibling.tagName).toBe(undefined);
  });

  it('should not render the character counter component after a random non-input element', () => {
    expect(des[5].nativeElement.nextSibling.tagName).toBe(undefined);
  });

  it('should count characters', () => {
    des[0].nativeElement.children[0].value = '1235';
    des[0].nativeElement.dispatchEvent(new Event('input'));
    runOnPushChangeDetection(fixture);
    expect(des[0].nativeElement.nextSibling.textContent).toContain('4');
  });
});
