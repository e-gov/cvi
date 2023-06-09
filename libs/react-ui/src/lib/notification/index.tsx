import React, { FC, useState } from 'react';
import {
  MdOutlineClose,
  MdOutlineInfo,
  MdCheckCircleOutline,
  MdOutlineWarningAmber,
  MdErrorOutline,
} from 'react-icons/md';
import clsx from 'clsx';

import Icon from '../icons/icon/icon';
import './Notification.scss';


export type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'neutral';

type NotificationProps = {
  title: string;
  content: string;
  type?: NotificationType;
  close?: () => void;
  closable?: boolean;
  size?: 'normal' | 'compact';
  icon?: JSX.Element;
};

const notificationIcons: any = {
  info: <MdOutlineInfo />,
  success: <MdCheckCircleOutline />,
  warning: <MdOutlineWarningAmber />,
  error: <MdErrorOutline />,
};

const Notification: FC<NotificationProps> = ({
  title,
  content,
  type = 'info',
  close,
  closable = true,
  size = 'normal',
  icon,
}) => {
  const notificationClasses = clsx('notification', `notification--${type}`);

  return (
    <div className={notificationClasses}>
      {
        size === 'normal' &&
        <h2 className="notification__title">
          {icon ? icon : notificationIcons[type] ? <Icon icon={notificationIcons[type]} /> : null}
          {title}
        </h2>
      }
      <p className="notification__content">
        {content}
      </p>
      {
        closable &&
        <button onClick={close} className="notification__close">
          <Icon icon={<MdOutlineClose />} size="medium" />
        </button>
      }
    </div>
  );
};

export default Notification;
