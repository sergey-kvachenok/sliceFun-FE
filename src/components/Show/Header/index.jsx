import React from 'react';
import styled from 'styled-components';
import Button from '../../shared/Button';
import Search from '../../shared/Search';
import HeaderBackground from '../../shared/HeaderBackground';
import Info from './Info';
import { breakpoints } from '../../../styles/theme';

const Wrapper = styled.div`
  height: 250px;
  position: relative;
  background-position: center;
  background-size: auto;

  .content-container {
    position: absolute;
    bottom: -20px;

    @media (max-width: ${breakpoints.xs}) {
      bottom: -5px;
      left: 15px;
    }
  }
`;

const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Header = React.memo(({ mainImage, title, verified, handleSearchChange }) => {
  return (
    <Wrapper className="container-padding">
      <HeaderBackground backgroundImageSrc={mainImage} />

      <Panel>
        <Search handleSearchChange={handleSearchChange} />

        <div className="buttons">
          <Button variant="outlined" title="Manage subscription" customStyles={{ mr: 2 }} />
          <Button variant="outlined" title="Share" />
        </div>
      </Panel>

      <Info imageSrc={mainImage} title={title} verified={verified} />
    </Wrapper>
  );
});

export default Header;
