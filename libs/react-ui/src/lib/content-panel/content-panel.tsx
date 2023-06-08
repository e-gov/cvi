import React, { FC, PropsWithChildren } from 'react';

type ContentPanelProps = {
  title?: string;
};

const ContentPanelComponent: FC<PropsWithChildren<ContentPanelProps>> = ({
  title,
  children,
}) => {
  return (
    <div className="cvi-content-panel">
      <h1 className="cvi-content-panel__title">{title}</h1>
      {children}
    </div>
  );
};

export default ContentPanelComponent;
