import React from 'react'
import styled from 'styled-components';
import dayjs from 'dayjs';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { colors } from '../../../styles/theme';
import {IVideo} from '../../../constants/interfaces'

const Wrapper = styled.div`
  align-items: baseline;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .poster {
    height: 70px;
    width: 70px;
    margin-right: 15px;

    img {
      height: inherit;
    }
  }

  .header {
    display: flex;
    align-items: center;
  }

  .banner {
    color: ${colors.white};
    background-color: ${colors.opacityGray};
    box-shadow: 3px 3px 5px ${colors.opacityGray};
    padding: 7px;
    border-radius: 4px;
    margin-left: 15px;
  }
`;

type VideoEpisodeProps = {
  episode: IVideo
}

const VideoEpisode = ({ episode }: VideoEpisodeProps) => {
  const { date, title, description, image } = episode || {};

  const hadlePlayClick = () => {
    console.log('Play clicked');
  };

  return (
    <Wrapper>
      <div className="poster">
        <img width="70" height="70" src={image} alt="Headline" />
      </div>

      <div>
        <div className="secondary-text">{dayjs(new Date(date)).format('MMM D, YYYY')}</div>
        <div className="header">
          <PlayCircleOutlinedIcon className="pointer" onClick={hadlePlayClick} />

          <div className="primary-text">{title}</div>
          <div className="banner secondary-text">Some text</div>
        </div>
        <div className="description secondary-text">{description}</div>
      </div>
    </Wrapper>
  );
};

export default VideoEpisode;
