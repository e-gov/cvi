import React, { FC, useEffect } from 'react';
import { Step } from './type';
import './steps.scss';

interface Header {
  steps: Step[];
  activeStepIndex?: number;
  select: (index: number) => void;
}

const Header: FC<Header> = ({ steps, activeStepIndex, select }) => {
  const anyStepSelcted =
    activeStepIndex !== null && activeStepIndex !== undefined;

  useEffect(() => {
    const currentProgressCSSVar = anyStepSelcted
      ? (activeStepIndex / (steps.length - 1)) * 100
      : 0;

    document.documentElement?.style.setProperty(
      `--progress`,
      anyStepSelcted ? currentProgressCSSVar + '%' : '100%'
    );
  }, [activeStepIndex, steps]);

  return (
    <>
      <ol className="cvi-steps__list">
        {steps.map((step: any, i: number) => (
          <li
            key={i}
            className={`cvi-steps__list-item ${
              anyStepSelcted && i <= activeStepIndex ? 'is-past' : ''
            } ${i === activeStepIndex ? 'is-current' : ''}`}
          >
            <button
              className="cvi-steps__list-item-button"
              onClick={() => select(i)}
            >
              <div className="cvi-steps__list-item-inner">
                <span className="cvi-steps__list-item-title">{step.title}</span>
                <div className="cvi-steps__list-item-arrow-icon-wrapper">
                  <span className="cvi-steps__list-item-arrow-icon">▶</span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ol>
      <svg
        style={{ visibility: 'hidden', position: 'absolute' }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="round">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>
    </>
  );
};

export default Header;
