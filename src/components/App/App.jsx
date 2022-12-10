import React from 'react';
import FeedbackOptions from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import { Container } from 'components/App/App.styled';
import Section from 'components/Section/Section';
import { ButtonBox } from 'components/Section/Section.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const positive = Math.round((good / total) * 100);
    return positive;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      good
    );

    const options = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <ButtonBox>
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleFeedback}
            />
          </ButtonBox>
        </Section>
        ,
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Container>
    );
  }
}
export default App;
