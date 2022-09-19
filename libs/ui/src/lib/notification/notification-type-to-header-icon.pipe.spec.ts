import { NotificationTypeToHeaderIconPipe } from './notification-type-to-header-icon.pipe';

describe('NotificationTypeToHeaderIconPipe', () => {
  it('should return icon name for notification type === success', () => {
    const pipe = new NotificationTypeToHeaderIconPipe();
    expect(pipe.transform('success')).toStrictEqual('check-circle-outline');
  });

  it('should return icon name for notification type === warning', () => {
    const pipe = new NotificationTypeToHeaderIconPipe();
    expect(pipe.transform('warning')).toStrictEqual('warning-amber');
  });

  it('should return icon name for notification type === error', () => {
    const pipe = new NotificationTypeToHeaderIconPipe();
    expect(pipe.transform('error')).toStrictEqual('error-outline');
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
