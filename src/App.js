import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import { useGetShowsQuery } from './store/queries/shows';

import SideBar from './components/SideBar';
import LatestShows from './components/LatestShows';


const App = () => {
  const { data } = useGetShowsQuery(3); // 3 is id of the show
  console.log('data', data);

  return (
    <Grid container spacing={2}>
      <BrowserRouter>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <Routes>
            <Route path='/' element={<LatestShows />} />
          </Routes>
        </Grid>
      </BrowserRouter>
    </Grid>
  );
};

export default App;
