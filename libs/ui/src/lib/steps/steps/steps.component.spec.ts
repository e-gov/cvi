import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsComponent } from '@ria/veera-ng';

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
});
