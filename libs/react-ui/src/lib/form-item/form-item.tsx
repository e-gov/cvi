import React, { forwardRef } from 'react';

type FormItemProps = {
  htmlId?: string;
  label?: string;
  placeholder?: string;
  labelPosition?: 'top' | 'side';
  isLabelHidden?: boolean;
  required?: boolean;
  disabled?: boolean;
};

const FormItem = forwardRef<HTMLInputElement, FormItemProps>(
  (
    {
      htmlId,
      label,
      placeholder,
      labelPosition = 'side',
      isLabelHidden = false,
      required = false,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={`cvi-form-item cvi-form-item--label-position-${labelPosition}${
          required ? ' cvi-form-item--is-required' : ''
        }`}
      >
        {isLabelHidden === false && (
          <label htmlFor={htmlId} className="cvi-form-item__label">
            {`${label}${required ? ' *' : ''}`}
          </label>
        )}
        <input
          className="cvi-textfield__text-control"
          type="text"
          placeholder={placeholder ?? ''}
          disabled={disabled}
          id={htmlId}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

export default FormItem;
