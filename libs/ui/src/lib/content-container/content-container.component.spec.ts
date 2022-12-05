import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContainerComponent } from '@ria/veera-ng';

describe('ContentContainerComponent', () => {
  let component: ContentContainerComponent;
  let fixture: ComponentFixture<ContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
