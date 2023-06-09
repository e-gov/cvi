import React, { useId, useState } from "react";

type RadioButtonGroupType = {
  label: string;
  name: string;
  hideLabel?: boolean;
  items: {
    label: string | number;
    value: string;
  }[];
  apperance?: 'default' | 'compact' | 'regular',
  onChange: (selectedValue: string) => void;
};


const RadioButtonGroupComponent: React.FC<RadioButtonGroupType> = ({
  label,
  name,
  hideLabel,
  items,
  apperance = 'default',
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const id = useId();

  const radioGroupApperanceClass = () => {
    if (apperance === 'compact') return 'cvi-radio-group--appearance-compact'
    if (apperance === 'regular') return 'cvi-radio-group--appearance-regular'
    return '';
  }

  const handleRadioOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return <div className={`cvi-radio-group ${radioGroupApperanceClass()}`}>
      <fieldset className="cvi-radio-group__inner">
        {!hideLabel && <legend className="cvi-radio-group__title">
          {label}
        </legend>}
        <ul className="cvi-radio-group__list" role="group">
          {items.map((item, i) => (
            <li className="cvi-radio-group__item" key={`${item.value}-${i}`}>
              <label className="cvi-radio-group__item-inner">
                <input
                  name={name}
                  id={`${id}-${item.value}`}
                  value={item.value}
                  checked={selectedValue === item.value}
                  onChange={handleRadioOnChange}
                  type="radio"
                  className={apperance === 'default' ? 'cvi-radio-group__item-control' : 'cvi-radio-group__input'}
                />
                <span className={apperance === 'default' ? '' : 'cvi-radio-group__button'}>{item.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
};

export default RadioButtonGroupComponent;
