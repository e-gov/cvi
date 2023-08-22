import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedNoticeComponent } from './timed-notice.component';

describe('TimedNoticeComponent', () => {
  let component: TimedNoticeComponent;
  let fixture: ComponentFixture<TimedNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimedNoticeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimedNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
