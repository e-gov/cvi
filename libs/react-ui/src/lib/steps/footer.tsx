import React, { FC } from "react";
import { Step } from "./type";
import './Steps.scss';

interface FooterProps {
  steps: Step[];
  activeStepIndex?: number;
  select: (index: number) => void;
}

const Footer: FC<FooterProps> = ({
  steps,
  select,
  activeStepIndex,
}) => {

  if (activeStepIndex === undefined || activeStepIndex === null || steps.length <= 1) {
    return <></>;
  }

  return (
    <div className="cvi-steps__directional-buttons">
      {activeStepIndex > 0 && (
        <button
          className="cvi-steps__directional-button cvi-steps__directional-button--direction-prev"
          onClick={() => select(activeStepIndex - 1)}
          title={steps[activeStepIndex - 1].title}
        >
          <span className="cvi-steps__directional-button-icon">◀</span>
          <span className="cvi-steps__directional-button-label">{steps[activeStepIndex - 1].title}</span>
        </button>
      )}
      {activeStepIndex < steps.length - 1 && (
        <button
          className="cvi-steps__directional-button cvi-steps__directional-button--direction-next"
          onClick={() => select(activeStepIndex + 1)}
          title={steps[activeStepIndex + 1].title}
        >
          <span className="cvi-steps__directional-button-label">{steps[activeStepIndex + 1].title}</span>
          <span className="cvi-steps__directional-button-icon">▶</span>
        </button>
      )}
    </div>
  );
}

export default Footer;
