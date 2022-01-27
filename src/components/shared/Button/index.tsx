import React from 'react';
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

type CustomButtonProps = {
  title: string;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  customStyles?: object;
  onClick: Function;
  dataTestId?: string;
};

const CustomButton = ({
  title,
  variant,
  dataTestId = 'custom-button',
  customStyles = {},
  onClick = () => {},
}: CustomButtonProps) => {
  return (
    <Button
      data-testid={dataTestId}
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
