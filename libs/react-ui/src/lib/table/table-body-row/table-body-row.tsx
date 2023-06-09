import React, { PropsWithChildren } from 'react';

const TableBodyRowComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return <tr className="cvi-table__body-row">{children}</tr>;
}

export default TableBodyRowComponent;
