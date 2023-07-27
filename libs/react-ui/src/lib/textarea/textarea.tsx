import React, { FC, useState } from 'react';

type TextareaProps = {
  id: string;
  placeholder: string;
  maxLength?: number;
  showCharacterCount?: boolean;
  disabled?: boolean;
  resizable?: boolean;
};

const TextareaComponent: FC<TextareaProps> = ({
  id,
  placeholder,
  maxLength = 2000,
  showCharacterCount = false,
  resizable = true,
  disabled = false,
}) => {
  const [currentLength, setCurrentLength] = useState(0);

  return (
    <span
      className={`cvi-textfield cvi-textfield--type-multiple-lines ${
        disabled ? 'cvi-textfield--is-disabled' : ''
      } ${!resizable ? 'cvi-textfield--no-resize' : ''}`}
    >
      <textarea
        className="cvi-textfield__text-control"
        id={id}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => {
          if (showCharacterCount) setCurrentLength(e.target.value.length);
        }}
        disabled={disabled}
      ></textarea>
      {showCharacterCount && (
        <div className="cvi-character-counter">
          {currentLength}/{maxLength}
        </div>
      )}
    </span>
  );
};

export default TextareaComponent;

