import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value on input', () => {
    jest.spyOn(component.valueChange, 'emit');

    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.valueChange.emit).toHaveBeenCalled();
  });

  it('should update _internalValue when writeValue is called', () => {
    component.writeValue('test');

    expect(component._internalValue).toEqual('test');
  });

  it('should call onChanged function when setValue is called', () => {
    const spy = jest.fn();
    component.registerOnChange(spy);

    component.setValue('test');

    expect(spy).toHaveBeenCalledWith('test');
  });

  it('should call onTouched function when setValue is called', () => {
    const spy = jest.fn();
    component.registerOnTouched(spy);

    component.setValue('test');

    expect(spy).toHaveBeenCalled();
  });

  it('should update disabled when setDisabledState is called', () => {
    component.setDisabledState(true);

    expect(component.disabled).toBe(true);
  });
});
