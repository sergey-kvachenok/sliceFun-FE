import Button from '@mui/material/Button';
import { colors } from '../../../styles/theme';

const defaultStyles = {
  textTransform: 'capitalize',
  transition: '0.6s',

  '&, &:focus': {
    border: 2,
    color: colors.darkBlue1,
  },

  '&:active': {
    border: 2,
    color: colors.pink,
  },

  '@media (hover: hover)': {
    '&:hover': {
      color: colors.pink,
      border: 2,
    },
  },
};

const CustomButton = ({ title, variant, customStyles = {}, onClick = () => {}, testId = 'custom-button' }) => {
  return (
    <Button
      data-testid={testId}
      variant={variant}
      sx={{ ...defaultStyles, ...customStyles }}
      size="small"
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
export default CustomButton;
