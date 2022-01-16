import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { setPlayerInfo, setIsPlaying } from '../../../store/slices/playerSlice';
import IconButton from '@mui/material/IconButton';

import * as React from 'react';
// import { styled } from '@mui/material/styles';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';

const img = 'https://slice-fun-podcasts.s3.eu-west-1.amazonaws.com/record-classix/record-classix.jpeg';

const Wrapper = styled.div`
  align-items: baseline;
  display: flex;
  margin-bottom: 10px;

  .date {
    margin-right: 15px;
  }

  .info {
    width: 80%;
  }

  .header {
    display: flex;
    align-items: center;
  }

  .more {
    margin-top: 10px;
  }
`;

const Episode = ({ episode }) => {
  const dispatch = useDispatch();
  const { isPlaying, id } = useSelector(({ player }) => player);

  const [currentEpisodeId, setCurrentEpisodeId] = useState(null);
  const [isExpanded, setExpanded] = useState(false);
  console.log('handleExpandClick', isExpanded);
  const { id: episodeId, date, title, description, extendedDescription, source } = episode || {};

  const isCurrentEpisode = id === currentEpisodeId;

  const handleExpandClick = () => {
    setExpanded(!isExpanded);
  };

  const toglePlayPause = id => {
    const params = {
      id: episodeId,
      isPlaying: !isPlaying,
      audioSrc: source,
      imageSrc: img,
      title,
    };

    setCurrentEpisodeId(id);
    if (!isPlaying) {
      dispatch(setPlayerInfo(params));
      return;
    }

    if (isPlaying && isCurrentEpisode) {
      console.log('here 2', isPlaying);
      dispatch(setIsPlaying(!isPlaying));
      return;
    }

    if (isPlaying && !isCurrentEpisode) {
      const currentParams = { ...params, isPlaying: true };
      dispatch(setPlayerInfo(currentParams));
    }
  };

  return (
    <Wrapper>
      <div className="date secondary-text">{dayjs(new Date(date)).format('MMM D, YYYY')}</div>
      <div className="info">
        <div className="header">
          {isCurrentEpisode && isPlaying ? (
            <PauseCircleOutlineOutlinedIcon className="pointer" onClick={() => toglePlayPause(episodeId)} />
          ) : (
            <PlayCircleOutlinedIcon className="pointer" onClick={() => toglePlayPause(episodeId)} />
          )}
          <div className="primary-text">{title}</div>
        </div>
        <div className="description secondary-text">
          {description}
          {isExpanded && extendedDescription}
        </div>

        {/* {isExpanded && <div className="description secondary-text">{extendedDescription}</div>} */}

        <div type="button" onClick={handleExpandClick} className="secondary-text-bold pointer more">
          Expand more
        </div>
      </div>
    </Wrapper>
  );
};

export default Episode;
