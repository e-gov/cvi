import React, { PropsWithChildren } from "react";

type TableOfContentsProps = {
  readonly title: string;
}

const TableOfContentsComponent: React.FC<PropsWithChildren<TableOfContentsProps>> = (props) => {
  const { title, children } = props;

  return <div className="cvi-table-of-contents__aside">
    <div className="cvi-table-of-contents__aside-stickable">
      <div
        role="navigation"
        aria-label={title}
        className="cvi-table-of-contents__aside-inner"
      >
        <h2 className="cvi-table-of-contents__aside-title">{title}</h2>
        <ul className="cvi-table-of-contents__aside-list">
          {children}
        </ul>
      </div>
    </div>
  </div>;
}

export default TableOfContentsComponent;
