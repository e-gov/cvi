import { InjectionToken } from '@angular/core';

export interface ToastConfig {
  timeOut: number;
  toastTypes: ToastTypes;
  progressBar: boolean;
  easeTime: number;
  extendedTimeOut: number;
}

export interface ToastTypes {
  error: string;
  info: string;
  success: string;
  warning: string;
}

export interface ToastToken {
  default: ToastConfig;
  config: Partial<ToastConfig>;
}

export const DefaultToastConfig: ToastConfig = {
  timeOut: 5000,
  toastTypes: {
    error: 'cvi-toast--appearance-error',
    info: 'cvi-toast--appearance-info',
    success: 'cvi-toast--appearance-success',
    warning: 'cvi-toast--appearance-warning',
  },
  progressBar: true,
  easeTime: 300,
  extendedTimeOut: 1000,
};

export const TOAST_CONFIG = new InjectionToken<ToastToken>('ToastConfig');

export class ToastPackage {
  constructor(
    public id: number,
    public config: ToastConfig,
    public toastType: string,
    public title: string | undefined,
    public message: string | undefined
  ) {}
}
