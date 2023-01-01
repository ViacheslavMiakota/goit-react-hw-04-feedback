import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticsItem,
  StatisticsList,
  Notification,
} from 'components/Statistics/Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsBox>
    {total ? (
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>
          Positive feedback: {positivePercentage} %
        </StatisticsItem>
      </StatisticsList>
    ) : (
      <Notification>There is no feedback</Notification>
    )}
  </StatisticsBox>
);
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
