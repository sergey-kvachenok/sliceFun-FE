import Button from '@mui/material/Button';
import { colors } from '../../../styles/theme';

const defaultStyles = {
  border: 2,
  color: colors.darkBlue1,
  textTransform: 'capitalize',
  transition: '0.6s',
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
