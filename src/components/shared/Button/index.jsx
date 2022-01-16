import Button from '@mui/material/Button';
import { colors } from '../../../styles/theme';

const defaultStyles = {
  textTransform: 'capitalize',
  color: colors.darkBlue1,
  borderColor: colors.darkBlue1,
};

const CustomButton = ({ title, customStyles = {} }) => {
  return (
    <Button sx={{ ...defaultStyles, ...customStyles }} size="small" variant="outlined">
      {title}
    </Button>
  );
};
export default CustomButton;
