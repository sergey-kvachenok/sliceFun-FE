import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HeadShow from '../HeadShow';
import Show from './Show';
import Spinner from '../shared/Spinner';
import {useGetPopularShowsQuery} from '../../store/queries/shows'

const LatestShows = () => {
  const {data, isLoading} = useGetPopularShowsQuery();

if (isLoading) {
  return <Spinner />
}

const firstShow = data[0];
const transformedData = data.slice(1)

  return (
    <>
   <Paper elevation={3}>
          <HeadShow showData={firstShow} />
        </Paper>

          <div className="primary-text"> 
        Popular Shows on Slice
        </div>

         <Grid container spacing={2}>
          {transformedData.map((show) => (
            <Show key={show.id} showData={show} />
          ))}
        </Grid>
        </>
     
  );
};

export default LatestShows;
