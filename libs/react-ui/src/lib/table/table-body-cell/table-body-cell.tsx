import React, { PropsWithChildren } from 'react';

const TableBodyCellComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return <td className="cvi-table__body-cell">
    <div className="cvi-table__body-cell-inner">
      {children}
    </div>
  </td>;
}

export default TableBodyCellComponent;
