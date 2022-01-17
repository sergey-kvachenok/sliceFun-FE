import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Verified from '../shared/Verified';


const Show = ({ showData }) => {
  const { title, description, image, id, verified } = showData || {};

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{display: 'flex'}}>
      <Link to={`shows/${id}`}>
          <Card sx={{height: '100%',
          maxWidth: '250px',
          width: "100%",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'}}>
            <CardMedia
              component='img'
              image={image}
              alt={title}
            />

            <CardContent>
               <Verified verified={verified} />
               <div className="primary-text">{title}</div>
            </CardContent>

          </Card>
      </Link>
    </Grid>

  );
};

export default Show;
