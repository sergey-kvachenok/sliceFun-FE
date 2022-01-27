import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
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

type HeaderProps = {
  mainImage: string;
  title: string;
  verified: boolean;
  handleSearchChange: Function;
};

const Header = ({ mainImage, title, verified, handleSearchChange }: HeaderProps) => {
  const { t } = useTranslation(['common']);

  return (
    <Wrapper className="container-padding">
      <HeaderBackground backgroundImageSrc={mainImage} />

      <Panel>
        <Search handleSearchChange={handleSearchChange} />

        <div className="buttons">
          <Button variant="outlined" title={t('manageSubscriptions')} customStyles={{ mr: 2 }} onClick={() => {}} />

          <Button variant="outlined" title={t('share')} onClick={() => {}} />
        </div>
      </Panel>

      <Info imageSrc={mainImage} title={title} verified={verified} />
    </Wrapper>
  );
};

export default Header;
