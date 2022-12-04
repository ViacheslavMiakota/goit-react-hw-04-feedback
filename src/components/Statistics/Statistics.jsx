import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticsItem,
  StatisticsList,
  Notification,
} from 'components/Statistics/Statistics.styled';
import { FeedbackTitle } from 'components/Feedback/Feedback.styled';

const Statistics = ({
  rezultGood,
  rezultNeutral,
  rezultBad,
  rezultTotal,
  rezultPositive,
}) => (
  <StatisticsBox>
    <FeedbackTitle>Statistics</FeedbackTitle>
    {rezultTotal ? (
      <StatisticsList>
        <StatisticsItem>Good: {rezultGood}</StatisticsItem>
        <StatisticsItem>Neutral: {rezultNeutral}</StatisticsItem>
        <StatisticsItem>Bad: {rezultBad}</StatisticsItem>
        <StatisticsItem>Total: {rezultTotal}</StatisticsItem>
        <StatisticsItem>Positive feedback: {rezultPositive} %</StatisticsItem>
      </StatisticsList>
    ) : (
      <Notification>There is no feedback</Notification>
    )}
  </StatisticsBox>
);
export default Statistics;

Statistics.propTypes = {
  rezultGood: PropTypes.number.isRequired,
  rezultNeutral: PropTypes.number.isRequired,
  rezultBad: PropTypes.number.isRequired,
  rezultTotal: PropTypes.number.isRequired,
  rezultPositive: PropTypes.number.isRequired,
};
