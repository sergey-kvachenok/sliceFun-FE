import React from 'react';
import styled from 'styled-components';
import ShareIcon from '@mui/icons-material/Share';
import { colors } from '../../../../styles/theme';
import { HeadlineType } from '../../../../constants/types';

const Wrapper = styled.div`
  display: flex;
  border: 2px dashed ${colors.coralRed};
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  position: relative;

  .poster {
    height: 70px;
    width: 70px;
    margin-right: 15px;

    img {
      height: inherit;
    }
  }

  .title {
    width: 60%;
  }

  .banner {
    background-color: ${colors.coralRed};
    border-radius: 4px;
    box-shadow: 3px 3px 5px ${colors.opacityGray};
    color: ${colors.white};
    padding: 7px;
    position: absolute;
    right: 15px;
    top: -2px;
  }
`;

type HeadlineProps = {
  headline: HeadlineType;
};

const Headline = ({ headline }: HeadlineProps) => {
  const { image, title, description } = headline || {};

  const handleShareClick = () => {
    console.log('Shared');
  };

  return (
    <Wrapper>
      <div data-testid="headline" className="poster">
        <img data-testid="head-show-image" width="70" height="70" src={image} alt="Headline" />
      </div>

      <div className="info">
        <div className="title primary-text">{title}</div>
        <div className="description secondary-text">{description}</div>
      </div>

      <ShareIcon data-testid="share-icon" onClick={handleShareClick} type="button" fontSize="medium" sx={{ ml: 2, cursor: 'pointer' }} />

      <div className="banner" data-testid="banner">Banner text</div>
    </Wrapper>
  );
};

export default Headline;
