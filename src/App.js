import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import { useGetShowsQuery } from './store/queries/shows';
import { AudioPlayer } from '../src/components/AudioPlayer';
import GlobalStyle from './styles/globalStyles';

import SideBar from './components/SideBar';
import LatestShows from './components/LatestShows';


const App = () => {
  const { data } = useGetShowsQuery(3); // 3 is id of the show

  return (
      <>
        <GlobalStyle />
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
      <AudioPlayer />
    </Grid>
        </>
  );
};

export default App;
