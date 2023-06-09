import React, { FC, useEffect, useState } from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import {
  MdOutlineClose,
  MdOutlineInfo,
  MdCheckCircleOutline,
  MdOutlineWarningAmber,
  MdErrorOutline,
} from 'react-icons/md';
import clsx from 'clsx';
import type { ToastType } from '../context/ToastContext';
import './Toast.scss';
import Icon from '../icons/icon/icon';

type ToastProps = {
  toast: ToastType;
  close: () => void;
};

const toastIcons = {
  info: <MdOutlineInfo />,
  success: <MdCheckCircleOutline />,
  warning: <MdOutlineWarningAmber />,
  error: <MdErrorOutline />,
};

const Toast: FC<ToastProps> = ({ toast, close }) => {
  const [open, setOpen] = useState(true);
  const toastClasses = clsx('toast', `toast--${toast.type}`);
  const progressClasses = clsx('toast__progress-bar', `toast__progress-bar--${toast.type}`);

  return (
    <RadixToast.Root
      className={toastClasses}
      onEscapeKeyDown={close}
      open={open}
      onOpenChange={setOpen}
      duration={toast.timeout || 5000}
    >
      <RadixToast.Title className="toast__title h5">
        <Icon icon={toastIcons[toast.type]} />
        {toast.title}
      </RadixToast.Title>
      <RadixToast.Description className="toast__content">
        {toast.message}
      </RadixToast.Description>
      <RadixToast.Close onClick={close} className="toast__close">
        <Icon icon={<MdOutlineClose />} size="medium" />
      </RadixToast.Close>
      <div
        className={progressClasses}
        style={{
          animationDuration: `${toast.timeout}ms`,
        }}
      />
    </RadixToast.Root>
  );
};

export default Toast;
