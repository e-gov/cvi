import React, { FC, PropsWithChildren } from 'react';

const ContentContainerComponent: FC<PropsWithChildren> = ({ children }) => {
  return <div className="cvi-content-container">{children}</div>;
};

export default ContentContainerComponent;
