import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Verified from '../../shared/Verified';
import { StyledLink } from '../../../styles/containers';
import Typography from '@mui/material/Typography';

const Show = ({ show }) => {
  const { title, image, id, verified } = show || {};

  return (
    <StyledLink to={`/shows/${id}`}>
      <Card
        sx={{
          maxHeight: 300,
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          justifyContent: 'space-between',
          width: { xs: '80%', sm: '100%' },
          margin: { xs: '0 auto', sm: 'auto' },
        }}
      >
        <CardMedia component="img" image={image} alt={title} sx={{ height: 200 }} />

        <CardContent>
          <Verified verified={verified} />
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 16,
              height: 50,
              overflow: 'hidden',
              pt: 1,
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </StyledLink>
  );
};

export default Show;
