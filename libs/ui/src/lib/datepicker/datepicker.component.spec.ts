import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatepickerComponent } from './datepicker.component';
import { ChangeDetectorRef } from '@angular/core';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;
  let cdRef: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerComponent],
      providers: [ChangeDetectorRef],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    cdRef = fixture.componentRef.injector.get(ChangeDetectorRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate date string', () => {
    expect(component.validateValue('25.05.2023')).toBe(true);
    expect(component.validateValue('2523.05323.2023')).toBe(false);
    expect(component.validateValue('2023.05.25')).toBe(false);
    expect(component.validateValue('invalid date')).toBe(false);
  });

  it('should handle date select', () => {
    component.disabled = false;
    component.handleDateSelect('25.05.2023');
    expect(component.value).toEqual('25.05.2023');
    expect(component.focus).toBe(false);
  });

  it('should set focus', () => {
    component.disabled = false;
    component.setFocus(true);
    expect(component.focus).toBe(true);
  });

  it('should not set focus when disabled', () => {
    component.disabled = true;
    component.setFocus(true);
    expect(component.focus).toBe(false);
  });

  it('should set internalValue when writeValue is called', () => {
    component.writeValue('25.05.2022'); // set a different value first

    expect(component.value).toEqual('25.05.2022');
  });

  it('should register onChange function', () => {
    const fn = jest.fn();
    component.registerOnChange(fn);
    component.value = '25.05.2022';
    expect(fn).toHaveBeenCalledWith('25.05.2022');
  });

  it('should register onTouched function', () => {
    const fn = jest.fn();
    component.registerOnTouched(fn);
    component.value = '25.05.2022';
    expect(fn).toHaveBeenCalled();
  });

  it('should set value and call registered functions', () => {
    const fn = jest.fn();
    component.registerOnChange(fn);
    const fn2 = jest.fn();
    component.registerOnTouched(fn2);
    component.value = '25.05.2023';
    expect(component.value).toEqual('25.05.2023');
    expect(fn).toHaveBeenCalledWith('25.05.2023');
    expect(fn2).toHaveBeenCalled();
  });

  it('should handle outside click when not disabled', () => {
    const event = new Event('click');
    component.disabled = false;
    component.setFocus(true);
    component.handleClickOutside(event);
    expect(component.focus).toBe(false);
  });

  it('should close calendar when user presses ESC', () => {
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    component.setFocus(true);
    component.handleKeyboardEvent(event);
    expect(component.focus).toBe(false);
  });

  it('should not handle outside click when disabled', () => {
    const event = new Event('click');
    component.disabled = true;
    component.setFocus(true);
    component.handleClickOutside(event);
    expect(component.focus).toBe(false);
  });

  it('should toggle focus', () => {
    component.focus = true;
    component.toggleFocus();
    expect(component.focus).toBe(false);
  });
});
