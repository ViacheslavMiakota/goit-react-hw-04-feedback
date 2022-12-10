import PropTypes from 'prop-types';
import { FeedbackBox, FeedbackTitle } from 'components/Section/Section.styled';

const Section = ({ title, children }) => {
  return (
    <FeedbackBox>
      {title && <FeedbackTitle>{title}</FeedbackTitle>}
      {children}
    </FeedbackBox>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Section;
