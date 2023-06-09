import React from "react";
import { Link } from "react-router-dom";

type TableOfContentsItemProps = {
  readonly label: string;
  readonly linkTo: string;
  readonly onClick?: () => void;
  readonly isSelected?: boolean;
}

const TableOfContentsItemComponent: React.FC<TableOfContentsItemProps> = (props) => {
  const { label, linkTo, onClick, isSelected = false } = props;

  const handleOnClick = () => {
    if (onClick) onClick();
  }

  return <li className={`cvi-table-of-contents__aside-list-item ${isSelected ? 'is-current' : ''}`}>
    <Link
      to={linkTo}
      className="cvi-table-of-contents__aside-list-item-link"
      onClick={handleOnClick}
    >
      {label}
    </Link>
  </li>
}

export default TableOfContentsItemComponent;
