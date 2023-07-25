import React, { FC, useRef } from 'react';

interface ButtonComponentProps {
  appearance?: 'primary' | 'secondary' | 'text';
  size?: 'm' | 's';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
  appearance,
  size,
  disabled,
  onClick,
  children,
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div
      className={`cvi-button cvi-button--appearance-${
        appearance ?? 'primary'
      } cvi-button--size-${size ?? 's'}${
        disabled ? ' cvi-button--is-disabled' : ''
      }`}
    >
      <button
        type="button"
        className={'cvi-button__button'}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
