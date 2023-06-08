import React, { FC, ReactNode, useState } from 'react';
import IconComponent from '../icons/icon/icon';

type InputProps = {
  label: string;
  placeholder?: string;
  maxLength?: number;
  showMaxLength?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
};

const InputComponent: FC<InputProps> = ({
  label,
  placeholder,
  maxLength = 2000,
  showMaxLength = false,
  disabled = false,
  icon,
}) => {
  const [currentLength, setCurrentLength] = useState(0);

  return (
    <div className="cvi-form-item cvi-form-item--label-position-top">
      <label className="cvi-form-item__label">{label}</label>
      <div
        className={`cvi-textfield cvi-textfield--type-single-line${
          icon !== undefined ? ' cvi-textfield--has-suffix-icon' : ''
        }`}
      >
        <input
          type="text"
          className="cvi-textfield__text-control"
          maxLength={maxLength}
          disabled={disabled}
          placeholder={placeholder}
          style={{ backgroundColor: disabled ? '#f0f0f2' : undefined }}
          onChange={(e) => {
            if (showMaxLength) setCurrentLength(e.target.value.length);
          }}
        />
        {icon === undefined && (
          <div className="cvi-textfield__suffix-icon-wrapper">
            <IconComponent icon={undefined}></IconComponent>
          </div>
        )}
        {showMaxLength && (
          <div className="cvi-character-counter">
            <label className="cvi-character-counter">
              {currentLength}/{maxLength}
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputComponent;
