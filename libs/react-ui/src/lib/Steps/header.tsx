import React, { FC } from 'react';
import { Step } from './type';
import './Steps.scss';

interface Header {
  steps: Step[];
  activeStepIndex: number;
  select: (index: number) => void;
}

const Header: FC<Header> = ({
  steps,
  activeStepIndex,
  select,
}) => (
  <ol className="cvi-steps__list">
    {steps.map((step: any, i: number) => (
      <li
        key={i}
        className={`cvi-steps__list-item ${activeStepIndex !== null && i <= activeStepIndex ? 'is-past' : ''} ${i === activeStepIndex ? 'is-current' : ''}`}
      >
        <button className="cvi-steps__list-item-button" onClick={() => select(i)}>
          <div className="cvi-steps__list-item-inner">
            <span className="cvi-steps__list-item-title">{step.title}</span>
          </div>
        </button>
      </li>
    ))}
  </ol>
);

export default Header;

