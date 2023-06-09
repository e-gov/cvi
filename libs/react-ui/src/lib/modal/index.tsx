import React, { FC, PropsWithChildren, ReactNode } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { MdOutlineClose } from 'react-icons/md';

import Button from '../button/button';
import Track from '../track/track';
import Icon from '../icons/icon/icon';
import './Modal.scss';

type ModalProps = {
  title?: string | null;
  onClose: () => void;
  footer?: ReactNode;
  cancelButtonText?: string,
  confirmButtonText?: string,
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  title,
  onClose,
  children,
  confirmButtonText,
  onConfirm,
  cancelButtonText,
  onCancel,
  footer,
}) => {
  return (
    <>
      <RadixDialog.Root defaultOpen={true} onOpenChange={onClose}>
        <RadixDialog.Portal>
          <RadixDialog.Content className='cvi-modal__dialog fixed__dialog'>
            {
              title && <div className='cvi-modal__header'>
                <RadixDialog.Title className='h2 cvi-modal__title'>{title}</RadixDialog.Title>
                <RadixDialog.Close asChild>
                  <button className='cvi-modal__close'>
                    <Icon icon={<MdOutlineClose />} size='medium' />
                  </button>
                </RadixDialog.Close>
              </div>
            }
            <div className='cvi-modal__body'>
              {children}
            </div>
            <div className="cvi-modal__footer">
              <Track direction='horizontal' align='right' gap={2}>
                {
                  onCancel &&
                  <Button appearance="secondary" onClick={onCancel}>
                    {cancelButtonText ?? 'Cancel'}
                  </Button>
                }
                {
                  onConfirm &&
                  <Button onClick={onConfirm}>
                    {confirmButtonText ?? 'Confirm'}
                  </Button>
                }
                {footer}
              </Track>
            </div>
          </RadixDialog.Content>
        </RadixDialog.Portal >
      </RadixDialog.Root >
      <div className="cvi-modal__backdrop" onClick={onClose} />
    </>
  );
};

export default Modal;
