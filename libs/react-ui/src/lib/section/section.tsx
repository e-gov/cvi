import React, { FC, PropsWithChildren } from 'react';

import './section.scss';

const HtmlSectionComponent: FC<PropsWithChildren> = ({ children }) => {
  return <section className="section">{children}</section>;
};

export default HtmlSectionComponent;
