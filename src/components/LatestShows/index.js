import React from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import HeadShow from '../HeadShow';
import Show from '../Show';


const latestShow = {
  isVerified: true,
  title: 'Quickly Kevin, will he score?',
  link: '/',
  image: './logo192x192.png',
};

const popularShows = [
  {
    isVerified: true,
    title: 'Quickly Marta, will he score?',
    link: '/shows',
    image: './logo192x192.png',
  },
  {
    isVerified: true,
    title: 'Quickly Bill, will he score?',
    link: '/shows',
    image: './logo192x192.png',
  },
  {
    isVerified: true,
    title: 'Quissckly Kevin, will he score?',
    link: '/shows',
    image: './logo192x192.png',
  },
  {
    isVerified: true,
    title: 'Quissckly Kevin, will he score?',
    link: '/shows',
    image: './logo192x192.png',
  },
  {
    isVerified: true,
    title: 'Quicsskly Kevin, will he score?',
    link: '/shows',
    image: './logo192x192.png',
  },
];

const LatestShows = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <HeadShow showData={latestShow} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>
          Popular Shows on Slice
        </Typography>
        <Grid container spacing={4}>
          {popularShows.map((show) => (
            <Show key={show.title} showData={show} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LatestShows;
