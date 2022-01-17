import React from 'react';

import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';


const HeadShow = ({ showData }) => {
  return (
    <Grid container spacing={2} sx={{ pt: 25, pb: 5 }} justifyContent='center' alignItems='center'>
      <Grid item xs={2}>
        <img src={showData.image} alt='logo' />
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h4'>
              {showData.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox checked={showData.isVerified} />
            <Typography>
              {showData.isVerified ? 'Verified' : 'Not Verified'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to={showData.link}>
              <Button variant='outlined'>Go to show</Button>
            </Link>
            <IconButton size='large'>
              <PlayCircleFilledWhiteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeadShow;
