import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import AudioPlayer from '../src/components/AudioPlayer';
import GlobalStyle from './styles/globalStyles';
import SideBar from './components/SideBar';
import {routes} from './constants/routes'

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
            {
              routes.map(({path, component}) => {
                const RouteComponent = component;
                return <Route path={path} element={<RouteComponent />} />
               })
            }
            </Routes>
          </Grid>
        </BrowserRouter>

        {id && <AudioPlayer />}
      </Grid>
    </>
  );
}

export default App;
