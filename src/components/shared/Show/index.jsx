import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Verified from '../../shared/Verified';
import { StyledLink } from '../../../styles/containers';
import { breakpoints } from '../../../styles/theme';
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

// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import Verified from '../Verified';

// const StyledLink = styled(Link)`
// /* display: flex;
// flex-direction: column; */
// max-width: 150px;
// display: block;
// width: 100%;
// color: inherit;
//   text-decoration: none;

//   .image {
//     height: 200px;
//     width: 200px;

//     img {
//       height: inherit;
//     width: inherit;
//     }
//   }

//   .info {
//     margin: 10px 0;
//     text-align: center;
//   }
// `

// const Show = ({show}) => {
//   const {id, image, verified, title} = show || {};

//   return (
//   <StyledLink to={`shows/${id}`}>
//   <div className="image">
//     <img src={image} alt="Show"/>
//   </div>

//   <div className="info">
//     <Verified verified={verified} />
//     <div className="primary-text">{title}</div>
//   </div>

//   </StyledLink>
//   )

// }

// export default Show;
