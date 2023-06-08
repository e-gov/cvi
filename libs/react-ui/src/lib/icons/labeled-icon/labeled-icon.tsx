import React, {
  CSSProperties,
  forwardRef,
  ReactNode,
  StyleHTMLAttributes,
} from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import clsx from 'clsx';

import '../icon.scss';
import TrackComponent from '../../track/track';
import ButtonComponent from '../../button/button';

type LabelIconProps = StyleHTMLAttributes<CSSProperties> & {
  label?: string | null;
  iconLabel?: string | null;
  icon: ReactNode;
  iconPosition?: 'before' | 'after';
  gap?: number;
  insideButton?: boolean;
  size?: 'small' | 'medium';
};

const LabeledIconComponent = forwardRef<HTMLSpanElement, LabelIconProps>(
  (
    {
      label,
      icon,
      gap,
      iconLabel,
      iconPosition = 'before',
      size = 'small',
      insideButton = false,
      ...rest
    },
    ref
  ) => {
    const iconClasses = clsx('icon', `icon--${size}`);

    const labeledIcon = (
      <TrackComponent
        gap={gap}
        reverse={iconPosition === 'before' ? false : true}
        justify={iconPosition === 'before' ? 'start' : 'end'}
      >
        {iconLabel && <label>{iconLabel}</label>}
        <AccessibleIcon.Root label={label ?? ''}>
          <span ref={ref} className={iconClasses} style={rest.style}>
            {icon}
          </span>
        </AccessibleIcon.Root>
      </TrackComponent>
    );

    const children = insideButton ? (
      <ButtonComponent>{labeledIcon}</ButtonComponent>
    ) : (
      labeledIcon
    );

    return children;
  }
);

export default LabeledIconComponent;
