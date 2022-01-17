import Button from '@mui/material/Button';
import { colors } from '../../../styles/theme';

const defaultStyles = {
  textTransform: 'capitalize',
  color: colors.darkBlue1,
  borderColor: colors.darkBlue1,
};

const CustomButton = ({ title, variant, customStyles = {}, onClick = () => {} }) => {
  return (
    <Button variant={variant} sx={{ ...defaultStyles, ...customStyles }} size="small" onClick={onClick}>
      {title}
    </Button>
  );
};
export default CustomButton;
