import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Box } from 'components/Box';

  
  export class App extends Component {
    
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
    
    FeedbackItemCounter = options => {
      this.setState(prevState => {
        return {
          [options]: prevState[options] + 1,

        };
      })
    };

    FeedbackTotalValueCounter = () => {
      return(
        this.state.good + this.state.neutral + this.state.bad
      )
    };

    FeedbackPercentageCounter = () => {
      return(
        (this.state.good / this.FeedbackTotalValueCounter()) * 100
      )
    };

    render() {
      const total = this.FeedbackTotalValueCounter();
      const positive = Math.floor(this.FeedbackPercentageCounter());
      
      return (
        <Box pt={3} pb={3} pl={4} >
          <Section title={"Please leave feedback"}>
            <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.FeedbackItemCounter} />
          </Section>
          <Section title={"Statistics"}>
            {total > 0 ?
          <Statistics 
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
              positivePercentage={positive} />
            : <Notification message={"There is no feedback"} />}
          </Section>
        </Box>
      );
    };
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
          
  