import { NotificationTypeToHeaderIconPipe } from './notification-type-to-header-icon.pipe';

describe('NotificationTypeToHeaderIconPipe', () => {
  it('should return icon name for notification type === success', () => {
    const pipe = new NotificationTypeToHeaderIconPipe();
    expect(pipe.transform('success')).toStrictEqual('check_circle_outline');
  });

  it('should return icon name for notification type === warning', () => {
    const pipe = new NotificationTypeToHeaderIconPipe();
    expect(pipe.transform('warning')).toStrictEqual('warning_amber');
  });

  it('should return icon name for notification type === error', () => {
    const pipe = new NotificationTypeToHeaderIconPipe();
    expect(pipe.transform('error')).toStrictEqual('error_outline');
  });

  it('should return icon name for notification type === info', () => {
    const pipe = new NotificationTypeToHeaderIconPipe();
    expect(pipe.transform('info')).toStrictEqual('info');
  });

  it('should return undefined icon name for notification type === compact', () => {
    const pipe = new NotificationTypeToHeaderIconPipe();
    expect(pipe.transform('compact')).toStrictEqual(undefined);
  });
});
