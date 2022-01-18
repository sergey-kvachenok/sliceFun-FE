import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { AudioPlayer } from '../src/components/AudioPlayer';
import GlobalStyle from './styles/globalStyles';
import Show from './components/Show';
import Library from './components/Library';
import SideBar from './components/SideBar';
import LatestShows from './components/LatestShows';
import Shows from './pages/Shows';

function App() {
  const { id } = useSelector(({ player }) => player);
  const containerOverflow = !!id ? 'scroll' : 'none';

  return (
    <>
      <GlobalStyle />

      <Grid container direction="row" justifyContent="center" sx={{ height: '95vh', overflow: containerOverflow }}>
        <BrowserRouter>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <SideBar />
          </Grid>

          <Grid sx={{ padding: '0' }} item xs={12} sm={8} md={9} ld={10}>
            <Routes>
              <Route path="/" element={<LatestShows />} />
              <Route path="/library" element={<Library />} />
              <Route exact path="/shows/:id" element={<Show />} />
              <Route exact path="/shows" element={<Shows />} />
            </Routes>
          </Grid>
        </BrowserRouter>

        {id && <AudioPlayer />}
      </Grid>
    </>
  );
}

export default App;
