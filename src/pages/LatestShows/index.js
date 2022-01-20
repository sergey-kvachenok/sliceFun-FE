import React from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import HeadShow from '../../components/LatestShows/HeadShow';
import Show from '../../components/shared/Show';
import Spinner from '../../components/shared/Spinner';
import { ListWrapper } from '../../styles/containers';
import { useGetPopularShowsQuery } from '../../store/queries/shows';

const LatestShows = () => {
  const { data, isLoading } = useGetPopularShowsQuery();
  const { t } = useTranslation(['latestShows']);

  if (isLoading) {
    return <Spinner />;
  }

  const firstShow = data[0];
  const transformedData = data.slice(1);

  return (
    <>
      <HeadShow showData={firstShow} mainImage={firstShow.mainImage} />
      <ListWrapper>
        <div className="primary-text">{t('latestShowsTitle')}</div>
        <Grid container spacing={4}>
          {transformedData.map(show => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
              <Show show={show} />
            </Grid>
          ))}
        </Grid>
      </ListWrapper>
    </>
  );
};

export default LatestShows;
