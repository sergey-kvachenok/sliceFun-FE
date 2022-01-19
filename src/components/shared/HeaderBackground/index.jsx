import React from 'react';
import styled from 'styled-components';
import DefaultImage from '../../../assets/images/defaultHeader.png'

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const HeaderBackground = ({ backgroundImageSrc }) => {
  return <StyledImage src={backgroundImageSrc || DefaultImage} alt="Show background" />;
};

export default HeaderBackground;
