import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsComponent } from '@egov/cvi-ng';

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit step current step index when stepSelected is called', () => {
    jest.spyOn(component.stepChange, 'emit');
    component.stepSelected(1);
    expect(component.stepChange.emit).toBeCalledTimes(1);
    expect(component.stepChange.emit).toBeCalledWith(1);
  });

  it('should emit url step click when stepSelected is called with stepIndex equal to stepTitles length', () => {
    jest.spyOn(component.urlStepClick, 'emit');
    component.stepTitles = ['index_0', 'index_1']
    component.stepSelected(2);

    expect(component.urlStepClick.emit).toBeCalledTimes(1);
    expect(component.urlStepClick.emit).toBeCalledWith();
  });

  it('should emit url step click when urlStepClicked is called', () => {
    jest.spyOn(component.urlStepClick, 'emit');
    component.urlStepClicked();

    expect(component.urlStepClick.emit).toBeCalledTimes(1);
    expect(component.urlStepClick.emit).toBeCalledWith();
  });
});
