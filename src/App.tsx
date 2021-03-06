import React, { useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import AudioPlayer from './components/AudioPlayer';
import GlobalStyle from './styles/globalStyles';
import Error from './components/shared/Error';
import Spinner from './components/shared/Spinner';
import SideBarContainer from './components/SideBar/SideBarContainer';
import SideBarBurgerButton from './components/shared/SideBarBurgerButton';
import { routes } from './constants/routes';
import { configureSubscription } from './utils/notifications';
import useNetwork from './hooks/useNetwork';
import { RootState } from './store';

export const theme = createTheme();

const App = () => {
  const { t } = useTranslation(['common']);
  const { id } = useSelector(({ player }: RootState) => player);
  const isOnline = useNetwork();

  // subscribes to push notifications from server
  useEffect(() => {
    configureSubscription();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {!isOnline && <Error customClassName="fixed" message={t('offline')} />}

      <Grid container direction="row" justifyContent="center">
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Grid item xs={12} sm={4} md={3} lg={2}>
              <SideBarContainer />
              <SideBarBurgerButton />
            </Grid>

            <Grid item sx={{ padding: 0 }} xs={12} sm={8} md={9} lg={10}>
              <Routes>
                {routes.map(({ path, component }) => {
                  const RouteComponent = component;
                  return <Route key={path} path={path} element={<RouteComponent />} />;
                })}
              </Routes>
            </Grid>
          </Suspense>
        </BrowserRouter>

        {id && <AudioPlayer />}
      </Grid>
    </ThemeProvider>
  );
};

export default App;
