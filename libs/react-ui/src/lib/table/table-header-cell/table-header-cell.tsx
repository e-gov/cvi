import React, { PropsWithChildren } from 'react';

const TableHeaderCellComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return <th className="cvi-table__header-cell">
      <div className="cvi-table__header-cell-inner">
        {children}
      </div>
    </th>;
}

export default TableHeaderCellComponent;
