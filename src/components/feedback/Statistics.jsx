import React from "react";
import css from './Feedback.module.css';

const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return <div>
        <ul className={css.list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive Feedback: {positiveFeedback}%</li>
        </ul>
    </div>
}

export default Statistics;
