import React from 'react';

import { Link } from 'react-router-dom';

import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';


const Show = ({ showData }) => {
  return (

    <Grid item xs={3}>
      <Link to={showData.link}>
        <CardActionArea>
          <Card>
            <CardMedia
              component='img'
              image={showData.image}
              alt={showData.title}
            />
            <CardContent>
              <Typography variant='h5'>
                {showData.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', pt: 3, '& .Mui-checked': { p: 0 } }}>
                <Checkbox checked={showData.isVerified} />
                <Typography>
                  {showData.isVerified ? 'Verified' : 'Not Verified'}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </CardActionArea>
      </Link>
    </Grid>

  );
};

export default Show;
