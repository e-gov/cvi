import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPanelComponent } from '@egov/cvi-ng';

describe('ContentPanelComponent', () => {
  let component: ContentPanelComponent;
  let fixture: ComponentFixture<ContentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
