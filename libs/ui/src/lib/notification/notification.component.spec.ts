import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';
import { IconComponent } from '../icons/icon/icon.component';
import { NotificationTypeToHeaderIconPipe } from './notification-type-to-header-icon.pipe';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NotificationComponent,
        IconComponent,
        NotificationTypeToHeaderIconPipe,
      ],
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
