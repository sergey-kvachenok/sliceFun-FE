import Button from '@mui/material/Button';
import { colors } from '../../../styles/theme';

const defaultStyles = {
  textTransform: 'capitalize',
  color: colors.darkBlue1,
  border: 2,
  '&:hover': {
    color: colors.pink,
    border: 2,
  },
};

const CustomButton = ({ title, variant, customStyles = {}, onClick = () => {} }) => {
  return (
    <Button variant={variant} sx={{ ...defaultStyles, ...customStyles }} size="small" onClick={onClick}>
      {title}
    </Button>
  );
};
export default CustomButton;
