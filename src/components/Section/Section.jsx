import PropTypes from 'prop-types';
import { FeedbackTitle } from 'components/Section/Section.styled';
import { Box } from 'components/Box';

export const Section = ({ title, children }) => {
    return (
        <Box as="section">
            <FeedbackTitle>
                {title}
            </FeedbackTitle>
            {children}
        </Box>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};