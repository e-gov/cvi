import React, { FC, useState } from 'react';

type TextareaProps = {
  placeholder: string;
  maxLength?: number;
  showMaxLength?: boolean;
  resizable?: boolean;
};

const TextareaComponent: FC<TextareaProps> = ({
  placeholder,
  maxLength = 2000,
  showMaxLength = false,
  resizable = true,
}) => {
  const [currentLength, setCurrentLength] = useState(0);
  return (
    <span className="cvi-textfield cvi-textfield--type-multiple-lines">
      <textarea
        className="cvi-textfield__text-control"
        placeholder={placeholder}
        maxLength={maxLength}
        style={{ resize: resizable ? undefined : 'none' }}
        onChange={(e) => {
          if (showMaxLength) setCurrentLength(e.target.value.length);
        }}
      ></textarea>
      {showMaxLength && (
        <div className="cvi-character-counter">
          {currentLength}/{maxLength}
        </div>
      )}
    </span>
  );
};

export default TextareaComponent;
