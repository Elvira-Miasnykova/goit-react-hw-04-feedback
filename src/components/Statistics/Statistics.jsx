import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsItemTotal } from './Statistics.styled';
import { Box } from 'components/Box';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage }) => {
    return (
        <Box>
            <Box es="ul" mb={4}>
                <StatisticsItem>Good: {good}</StatisticsItem>
                <StatisticsItem>Neutral: {neutral}</StatisticsItem>
                <StatisticsItem>Bad: {bad}</StatisticsItem>
            </Box>
            <Box es="ul">
                <StatisticsItemTotal>Total: {total}</StatisticsItemTotal>
                <StatisticsItemTotal>Positive feedback: {positivePercentage}%</StatisticsItemTotal>
                
            </Box>
        </Box>
    );

};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};