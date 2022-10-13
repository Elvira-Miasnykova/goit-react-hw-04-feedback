import React, {useState } from "react";
//import ReactDOM from "react-dom";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Box } from 'components/Box';

  
export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
    
  const options = { good, neutral, bad };
  
  const keys = Object.keys(options);

  //const options = [ 'good', 'neutral', 'bad' ];  // method with switch case

  // const FeedbackItemCounter = feedbackItem => {
  //   switch (feedbackItem) {
  //     case 'good':
  //       setGood(prevState => prevState + 1)
  //       break;
  //     case 'neutral':
  //       setNeutral(prevState => prevState + 1)
  //       break;
  //     case 'bad':
  //       setBad(prevState => prevState + 1)
  //       break;
  //     default:
  //       break;
  //   }
  // };
    
    
  const FeedbackItemCounter = options => {
    if (options === keys[0]) {
      setGood(prevState => prevState + 1);
    } else
      if (options === keys[1]) {
        setNeutral(prevState => prevState + 1);
      } else
        if (options === keys[2]) {
          setBad(prevState => prevState + 1);
        }
      

        };
     

    const FeedbackTotalValueCounter = () => {
      return(
        good + neutral + bad
      )
    };

    const FeedbackPercentageCounter = () => {
      return(
        (good / FeedbackTotalValueCounter()) * 100
      )
    };

    
      const total = FeedbackTotalValueCounter();
      const positive = Math.floor(FeedbackPercentageCounter());
      
      return (
        <Box pt={3} pb={3} pl={4} >
          <Section title={"Please leave feedback"}>
            <FeedbackOptions
            options={keys}
            onLeaveFeedback={FeedbackItemCounter} />
          </Section>
          <Section title={"Statistics"}>
            {total > 0 ?
          <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
              positivePercentage={positive} />
            : <Notification message={"There is no feedback"} />}
          </Section>
        </Box>
      );
    
  }

  // `<h2>Please leave feedback</h2>
  //           <ul>
  //             <li>
  //               <button>Good</button>
  //             </li>
  //             <li>
  //               <button>Neutral</button>
  //             </li>
  //             <li><button>Bad</button></li>
  //           </ul>
  //           <div>
  //             <h2>Statistics</h2>
  //             <div>
  //               <p>Good:</p>
  //               <p>Neutral:</p>
  //               <p>Bad:</p>
  //             </div>
  //           </div>`
          
  