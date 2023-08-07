import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectComponent } from '@egov/cvi-ng';

describe('OptionButtonComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
