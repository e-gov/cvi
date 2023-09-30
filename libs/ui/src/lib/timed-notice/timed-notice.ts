import { CviIconName } from '@egov/cvi-icons';

export type TimedNoticeSeverity = 'info' | 'success' | 'error';

export type TimedNoticeAsideItem = {
  iconName?: CviIconName;
  label: string;
  /** Only applicable if iconName is set */
  tooltipLabel?: string;
};
