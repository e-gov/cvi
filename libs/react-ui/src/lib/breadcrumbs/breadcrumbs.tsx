import React from 'react';
import IconComponent from '../icons/icon/icon';
import TrackComponent from '../track/track';

const NavigateBackIcon = () => (
  <svg
    viewBox="0 0 8 12"
    xmlns="http://www.w3.org/2000/svg"
    className="cvi-breadcrumbs__icon"
    height="24px"
  >
    <path d="M.515 5.366 5.616.264a.897.897 0 0 1 1.272 0l.848.848a.897.897 0 0 1 0 1.272L4.119 6l3.617 3.616a.897.897 0 0 1 0 1.272l-.848.848a.896.896 0 0 1-1.272 0L.515 6.633a.892.892 0 0 1 0-1.268Z"></path>
  </svg>
);

type BreadcrumbsComponentProps = {
  labels: string[];
  onLabelClick?: (label: string) => void;
};

export const BreadcrumbsComponent: React.FC<BreadcrumbsComponentProps> = ({
  labels,
  onLabelClick,
}) => {
  return (
    <TrackComponent gap={2} className="cvi-breadcrumbs">
      <div className="cvi-track cvi-track--direction-horizontal cvi-track--layout-flex">
        <span className="cvi-breadcrumbs__icon-wrapper">
          <IconComponent icon={<NavigateBackIcon />} size="medium" />
        </span>
        <ul className="cvi-breadcrumbs__items">
          {labels.map((label) => (
            <li key={label} className="cvi-breadcrumbs__item">
              <a
                className="cvi-breadcrumbs__item-link"
                onClick={() => {
                  if (onLabelClick) onLabelClick(label);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </TrackComponent>
  );
};

export default BreadcrumbsComponent;
