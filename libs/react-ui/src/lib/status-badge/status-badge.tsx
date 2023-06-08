import React, { FC, PropsWithChildren } from 'react';
import './status-badge.scss';

type StatusBadgeProps = {
  severityStyle?: 'info' | 'success' | 'warning';
  content?: string;
};

const StatusBadgeComponent: FC<PropsWithChildren<StatusBadgeProps>> = ({
  severityStyle = 'info',
  content,
}) => {
  return (
    <span className={`status-badge status-badge__${severityStyle}`}>
      {content}
    </span>
  );
};

export default StatusBadgeComponent;
