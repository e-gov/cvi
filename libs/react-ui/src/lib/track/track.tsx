import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

type TrackProps = HTMLAttributes<HTMLDivElement> & {
  gap?: number;
  align?: 'left' | 'center' | 'right' | 'stretch';
  justify?: 'start' | 'between' | 'center' | 'around' | 'end';
  layout?: 'flex' | 'grid';
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  isMultiline?: boolean;
};

const alignMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  stretch: 'stretch',
};

const justifyMap = {
  start: 'flex-start',
  between: 'space-between',
  center: 'center',
  around: 'space-around',
  end: 'flex-end',
};

const TrackComponent: FC<PropsWithChildren<TrackProps>> = ({
  gap = 0,
  align = 'center',
  justify = 'start',
  direction = 'horizontal',
  layout = 'flex',
  isMultiline = false,
  reverse = false,
  children,
  style,
  ...rest
}) => {
  return (
    <div
      className="track"
      style={{
        display: layout,
        gap,
        alignItems: alignMap[align],
        justifyContent: justifyMap[justify],
        flexDirection:
          direction === 'horizontal'
            ? reverse
              ? 'row-reverse'
              : 'row'
            : reverse
            ? 'column-reverse'
            : 'column',
        flexWrap: isMultiline ? 'wrap' : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TrackComponent;
