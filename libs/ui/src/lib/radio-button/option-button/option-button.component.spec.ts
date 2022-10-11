import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionButtonComponent } from '@ria/veera-ng';

describe('OptionButtonComponent', () => {
  let component: OptionButtonComponent;
  let fixture: ComponentFixture<OptionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OptionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
