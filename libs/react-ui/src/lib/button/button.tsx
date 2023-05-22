import React from 'react';

export const ButtonAppearance = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TEXT: 'text',
};

export const ButtonSize = {
  S: 's',
  M: 'm',
};

interface ButtonComponentProps {
  appearance?: 'primary' | 'secondary' | 'text';
  size?: 'm' | 's';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

class ButtonComponent extends React.Component<ButtonComponentProps> {
  buttonRef: React.RefObject<HTMLButtonElement>;

  constructor(props: ButtonComponentProps) {
    super(props);
    this.buttonRef = React.createRef();
    this.onClick = this.onClick.bind(this);
    this.focus = this.focus.bind(this);
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  focus() {
    if (this.buttonRef.current) {
      this.buttonRef.current.focus();
    }
  }

  getHostClasses() {
    const appearance = this.props.appearance ?? ButtonAppearance.PRIMARY;
    const size = this.props.size ?? ButtonSize.S;
    return `cvi-button cvi-button--appearance-${appearance} cvi-button--size-${size}${this.props.disabled ? ' cvi-button--is-disabled' : ''}`;
  }

  render() {
    const {
      disabled = false,
      children
    } = this.props;

    return (
      <div className={`cvi-button__button ${this.getHostClasses()}`}>
        <button
          type="button"
          className={`cvi-button__button`}
          disabled={disabled}
          onClick={this.onClick}
          ref={this.buttonRef}
        >
          {children}
        </button>
      </div>
    );
  }
}

export default ButtonComponent;
