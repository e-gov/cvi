import React, { FC } from "react";
import { Step } from "./type";
import './Steps.scss';

interface FooterProps {
  steps: Step[];
  activeStepIndex: number;
  select: (index: number) => void;
}

const Footer: FC<FooterProps> = ({
  steps,
  select,
  activeStepIndex,
}) => {
  if (steps.length <= 1 || activeStepIndex === null)
    return <></>;
  return (
    <div className="cvi-steps__directional-buttons">
      {activeStepIndex > 0 && (
        <button
          className="cvi-steps__directional-button cvi-steps__directional-button--direction-prev"
          onClick={() => select(activeStepIndex - 1)}
          title={steps[activeStepIndex - 1].title}
        >
          <span className="cvi-steps__directional-button-icon">
            <span className="cvi-steps__directional-button-icon">
              <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" className="cvi-steps__directional-button-icon cvi-steps__list-item-arrow-icon" height="24px">
                <path d="M.515 5.366 5.616.264a.897.897 0 0 1 1.272 0l.848.848a.897.897 0 0 1 0 1.272L4.119 6l3.617 3.616a.897.897 0 0 1 0 1.272l-.848.848a.896.896 0 0 1-1.272 0L.515 6.633a.892.892 0 0 1 0-1.268Z"></path>
              </svg>
            </span>
          </span>
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
          <span className="cvi-steps__directional-button-icon">
            <svg viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg" className="cvi-steps__directional-button-icon cvi-steps__list-item-arrow-icon" height="24px">
              <path d="m7.485 6.634-5.101 5.101a.896.896 0 0 1-1.272 0l-.848-.847a.897.897 0 0 1 0-1.272L3.881 6 .264 2.384a.897.897 0 0 1 0-1.272l.848-.848a.897.897 0 0 1 1.272 0l5.101 5.102a.892.892 0 0 1 0 1.268Z"></path>
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default Footer;
