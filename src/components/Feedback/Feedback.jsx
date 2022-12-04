import React from 'react';

import {
  FeedbackBox,
  FeedbackTitle,
  ButtonsList,
} from 'components/Feedback/Feedback.styled';

const Feedback = ({ onGood, onNeutral, onBad }) => (
  <FeedbackBox>
    <FeedbackTitle>Please leave feedback</FeedbackTitle>
    <ButtonsList>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </ButtonsList>
  </FeedbackBox>
);

export default Feedback;
