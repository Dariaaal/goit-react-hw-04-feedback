import React from "react";
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
          {options.map(option => (
            <button
              type="button"
              className={css.button}
              onClick={onLeaveFeedback}
              key={option}
              name={option}
            >
              {option}
            </button>
          ))}
      </div>
    );
  };

export default FeedbackOptions;