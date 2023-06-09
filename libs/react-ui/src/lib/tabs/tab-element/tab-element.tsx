import React, { PropsWithChildren } from 'react';

type TabElementProps = {
  title: string;
};

export const TabElement: React.FC<PropsWithChildren<TabElementProps>> = ({
  children,
}) => {
  return <>{children}</>;
};

export default TabElement;
