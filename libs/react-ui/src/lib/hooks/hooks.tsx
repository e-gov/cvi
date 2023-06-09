import React, { useContext } from 'react';
import { ToastContext } from '../context/context';

export const useToast = () => useContext(ToastContext);
