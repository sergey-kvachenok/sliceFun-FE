import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import { useGetShowsQuery } from './store/queries/shows';
import { AudioPlayer } from '../src/components/AudioPlayer';
import GlobalStyle from './styles/globalStyles';
import Show from './components/Show';
import Library from './components/Library';
import SideBar from './components/SideBar';
import LatestShows from './components/LatestShows';


function App() {
  const { id } = useSelector(({ player }) => player);
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
      {id && <AudioPlayer />}
    </Grid>
        </>
  );
};

export default App;
