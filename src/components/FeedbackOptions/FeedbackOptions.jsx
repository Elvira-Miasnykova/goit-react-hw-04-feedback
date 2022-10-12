import PropTypes from 'prop-types';
import {Button} from './FeedbackOptions.styled'
import { Box } from 'components/Box';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Box es="ul" display="flex" pt={2} pb={2} >
            {options.map(option => (
                <Box es="li" mr={3}
                    key={option}>
                    <Button  type="button"
                        onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </Button>
                </Box>
            ))
            }
        </Box>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
