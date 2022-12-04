import React from 'react';
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
