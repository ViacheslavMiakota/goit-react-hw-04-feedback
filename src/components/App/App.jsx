import React from 'react';
import Feedback from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import { Container } from 'components/App/App.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return percentage;
  };
  render() {
    return (
      <Container>
        <Feedback
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />
        ,
        <Statistics
          rezultGood={this.state.good}
          rezultNeutral={this.state.neutral}
          rezultBad={this.state.bad}
          rezultTotal={this.countTotalFeedback()}
          rezultPositive={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}
export default App;
