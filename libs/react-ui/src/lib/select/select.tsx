import React, {
  forwardRef,
  ReactNode,
  SelectHTMLAttributes,
  useId,
  useState,
} from 'react';
import { useSelect } from 'downshift';
import clsx from 'clsx';
import IconComponent from '../icons/icon/icon';

const DropdownIconUp = () => (
  <span className="cvi-select__icon-wrapper">
    <svg
      viewBox="0 0 12 8"
      xmlns="http://www.w3.org/2000/svg"
      className="cvi-select__icon-svg"
      height="24px"
    >
      <path d="M5.4.334.368 5.506a.926.926 0 0 0 0 1.289l.836.86a.868.868 0 0 0 1.255 0l3.568-3.667 3.569 3.666a.868.868 0 0 0 1.255 0l.836-.86a.926.926 0 0 0 0-1.288L6.652.334a.864.864 0 0 0-1.251 0z"></path>
    </svg>
  </span>
);

const DropdownIconDown = () => (
  <span className="cvi-select__icon-wrapper">
    <svg
      viewBox="0 0 12 8"
      xmlns="http://www.w3.org/2000/svg"
      className="cvi-select__icon-svg"
      height="24px"
    >
      <path d="M5.366 7.485.264 2.384a.897.897 0 0 1 0-1.272l.848-.848a.897.897 0 0 1 1.272 0L6 3.881 9.616.264a.897.897 0 0 1 1.272 0l.848.848a.896.896 0 0 1 0 1.272L6.633 7.485a.892.892 0 0 1-1.268 0Z"></path>
    </svg>
  </span>
);

type SelectComponentProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: ReactNode;
  options: {
    label: string;
    value: string;
  }[];
  onSelectionChange?: (
    selection: { label: string; value: string } | null
  ) => void;
};

const itemToString = (item: { label: string; value: string } | null) => {
  return item ? item.value : '';
};

const SelectComponent = forwardRef<HTMLSelectElement, SelectComponentProps>(
  (
    {
      label,
      options,
      disabled,
      placeholder,
      defaultValue,
      onSelectionChange,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const defaultSelected =
      options.find((o) => o.value === defaultValue) || null;
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<{
      label: string;
      value: string;
    } | null>(defaultSelected);
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      id,
      items: options,
      itemToString,
      selectedItem,
      onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
        setSelectedItem(newSelectedItem ?? null);
        setInputValue('');
        if (onSelectionChange) onSelectionChange(newSelectedItem ?? null);
      },
    });

    const getFilteredOptions = () => {
      return options.filter((o) =>
        o.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    };

    const placeholderValue = placeholder || 'Choose';

    return (
      <div style={rest.style}>
        <div className="cvi-form-item cvi-form-item--label-position-top">
          {label && (
            <label
              htmlFor="some-input-id"
              id="some-label-id"
              className="cvi-form-item__label"
              {...getLabelProps()}
            >
              {label}
            </label>
          )}
          <div>
            <div className="cvi-select">
              <div
                className="cvi-select__container"
                {...getToggleButtonProps()}
              >
                <div className="cvi-select__value-container">
                  {inputValue === '' &&
                    (selectedItem ? (
                      <div className="cvi-select__value">
                        {selectedItem.label}
                      </div>
                    ) : (
                      <div className="cvi-select__placeholder">
                        {placeholderValue}
                      </div>
                    ))}
                </div>
                <div className="cvi-select__input-container">
                  <input
                    type="text"
                    role="combobox"
                    autoComplete="off"
                    aria-autocomplete="both"
                    aria-haspopup="listbox"
                    aria-activedescendant="listbox-item-id-2"
                    aria-controls="some-list-id"
                    aria-owns="some-list-id"
                    aria-expanded="true"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="cvi-select__input"
                    id="some-input-id"
                  />
                </div>
                {isOpen ? (
                  <IconComponent icon={<DropdownIconUp />} />
                ) : (
                  <IconComponent icon={<DropdownIconDown />} />
                )}
              </div>
              <div ref={ref} {...getMenuProps()}>
                {isOpen && (
                  <div className="cvi-dropdown-popup">
                    <div className="cvi-dropdown-popup__inner">
                      <ul
                        role="listbox"
                        aria-labelledby="some-label-id"
                        id="some-list-id"
                      >
                        {getFilteredOptions().map((item, index) => (
                          <li
                            role="option"
                            aria-selected="false"
                            className={clsx(
                              'cvi-dropdown-popup__dropdown-item',
                              {
                                'is-focused': highlightedIndex === index,
                                'is-current':
                                  selectedItem?.value === item.value,
                              }
                            )}
                            {...getItemProps({ item, index })}
                            key={`listbox-item-id-${index}`}
                          >
                            <span className="cvi-dropdown-popup__item-label">
                              {item.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default SelectComponent;
