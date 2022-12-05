import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  IconComponent,
  NotificationComponent,
  NotificationSeverityToHeaderIconPipe,
} from '@ria/veera-ng';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NotificationComponent,
        IconComponent,
        NotificationSeverityToHeaderIconPipe,
      ],
      providers: [NotificationSeverityToHeaderIconPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close event on close button click', () => {
    jest.spyOn(component.closed, 'emit');
    component.close();
    expect(component.closed.emit).toBeCalledTimes(1);
    expect(component.closed.emit).toBeCalledWith();
  });
});
