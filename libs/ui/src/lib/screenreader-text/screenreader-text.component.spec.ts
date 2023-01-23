import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenreaderTextComponent } from '@ria/cvi-ng';

describe('ScreenreaderTextComponent', () => {
  let component: ScreenreaderTextComponent;
  let fixture: ComponentFixture<ScreenreaderTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScreenreaderTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenreaderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
