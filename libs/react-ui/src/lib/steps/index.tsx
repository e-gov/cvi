import React, { FC } from 'react';
import { Step } from './type';
import Header from './header';
import './Steps.scss';
import Footer from './footer';

interface StepsProps {
  title?: string;
  description?: string;
  steps: Step[];
  activeStepIndex?: number;
  select: (index: number) => void;
}

const Steps: FC<StepsProps> = ({
  title,
  description,
  steps,
  activeStepIndex,
  select,
}) => (
  <div className="cvi-steps">
    {
      title &&
      <h1 className="cvi-steps__title">
        {title}
      </h1>
    }
    <div className="cvi-steps__inner-wrapper">
      {
        description &&
        <div className="cvi-steps__intro">
          {description}
        </div>
      }
      <div className="cvi-steps__inner">
        <Header steps={steps} activeStepIndex={activeStepIndex} select={select} />
        <div className='cvi-steps__step'>
          {
            activeStepIndex !== undefined && activeStepIndex !== null &&
            <div className='cvi-steps__content-panel'>
              <h2 className='cvi-steps__content-panel-title'>{steps[activeStepIndex].title}</h2>
              {steps[activeStepIndex].content}
            </div>
          }
          <Footer steps={steps} activeStepIndex={activeStepIndex} select={select} />
        </div>
      </div>
    </div>
  </div>
);

export default Steps;
