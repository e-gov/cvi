import React, { PropsWithChildren } from "react";

type TableOfContentWrapperProps = {
  readonly hideNavOnMobile?: boolean;
}

const TableOfContentsWrapperComponent: React.FC<PropsWithChildren<TableOfContentWrapperProps>> = (props) => {
  const { children, hideNavOnMobile = true } = props;
  return <div
      className={`cvi-table-of-contents ${hideNavOnMobile ? 'is-nav-hidden-on-mobile' : ''}`}
    >
      {children}
    </div>;
}

export default TableOfContentsWrapperComponent;
