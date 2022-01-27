import React from 'react';
import Alert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';
import { zIndexes } from '../../../styles/theme';

const useStyles = makeStyles(() => ({
  fixed: {
    position: 'fixed',
    width: '100%',
    zIndex: zIndexes.offlineBanner,
  },
}));

type ErrorProps = {
  message: string;
  customClassName?: 'fixed';
};

const Error = ({ message, customClassName }: ErrorProps) => {
  const classes = useStyles();

  return (
    <Alert className={customClassName ? classes[customClassName] : ''} severity="error">
      {message}
    </Alert>
  );
};

export default Error;
