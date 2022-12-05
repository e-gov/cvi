import { NotificationSeverityToHeaderIconPipe } from './notification-severity-to-header-icon.pipe';

describe('NotificationSeverityToHeaderIconPipe', () => {
  it('should return icon name for notification severity === success', () => {
    const pipe = new NotificationSeverityToHeaderIconPipe();
    expect(pipe.transform('success')).toStrictEqual('check_circle_outline');
  });

  it('should return icon name for notification severity === warning', () => {
    const pipe = new NotificationSeverityToHeaderIconPipe();
    expect(pipe.transform('warning')).toStrictEqual('warning_amber');
  });

  it('should return icon name for notification severity === error', () => {
    const pipe = new NotificationSeverityToHeaderIconPipe();
    expect(pipe.transform('error')).toStrictEqual('error_outline');
  });

  it('should return icon name for notification severity === info', () => {
    const pipe = new NotificationSeverityToHeaderIconPipe();
    expect(pipe.transform('info')).toStrictEqual('info');
  });

  it('should return undefined icon name for notification severity === neutral', () => {
    const pipe = new NotificationSeverityToHeaderIconPipe();
    expect(pipe.transform('neutral')).toStrictEqual(undefined);
  });
});
