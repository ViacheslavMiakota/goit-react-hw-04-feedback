import { useState } from 'react';
import FeedbackOptions from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import { Container } from 'components/App/App.styled';
import Section from 'components/Section/Section';
import { ButtonBox } from 'components/Section/Section.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(good);

  const optionsKeys = { good, neutral, bad };

  const handleFeedback = name => {
    console.log(name);
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const totalSum = good + neutral + bad;
    return totalSum;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / total);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <ButtonBox>
          <FeedbackOptions
            options={Object.keys(optionsKeys)}
            onLeaveFeedback={handleFeedback}
          />
        </ButtonBox>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
};
export default App;
