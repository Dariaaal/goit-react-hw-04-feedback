import React, { useState } from "react";
import Statistics from "./feedback/Statistics";
import FeedbackOptions from "./feedback/FeedbackOptions";
import Section from "./feedback/Section";
import Notification from "./feedback/Notification";

export default function App(){
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = {
        good,
        neutral,
        bad
    }

    const handleIncrement = (e) => {
        const {name} = e.target
        
        switch (name) {
            case 'good':
                setGood(prevState => prevState+1);
                break;

            case 'bad':
                setBad(prevState => prevState+1);
                break;
                
            case 'neutral':
                setNeutral(prevState => prevState+1);
                break;

            default:
                return;
        }
    }

    const countTotalFeedback = () => {
        return good+neutral+bad;
    }

    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / countTotalFeedback()) * 100);
    }

    return (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}
        > 
        <Section title='Please leave feedback'>
          <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleIncrement}/>
        </Section>
        <Section title='Statistics'>
          {good===0 && neutral===0 && bad===0?(<Notification message="There is no feedback"></Notification>):(        
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedback = {countPositiveFeedbackPercentage()}
          />)}
  
        </Section>
        </div>
      );
}