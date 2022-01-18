import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const HeaderBackground = ({ backgroundImageSrc }) => {
  return <StyledImage src={backgroundImageSrc} alt="Show background" />;
};

export default HeaderBackground;
