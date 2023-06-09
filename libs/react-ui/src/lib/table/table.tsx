import React, { ReactNode } from 'react';


type TableComponentProps = {
  readonly headerCells: ReactNode;
  readonly body: ReactNode;
}


const TableComponent: React.FC<TableComponentProps> = (props) => {
  const { headerCells, body } = props;

  return <div className="cvi-table">
      <div className="cvi-table__inner">
        <table className="cvi-table__table">
          <tr className="cvi-table__header-row">
            {headerCells}
          </tr>
          {body}
        </table>
      </div>
    </div>;
}

export default TableComponent;
