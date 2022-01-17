import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import Button from '../../shared/Button';
import { setPlayerInfo, setIsPlaying } from '../../../store/slices/playerSlice';

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

  .collapsed-description {
    transition: max-height 0.5s ease-in-out;
    max-height: 0;
    overflow: hidden;
  }

  .expanded-description {
    transition: max-height 0.5s ease-in-out;
    overflow: auto;
    max-height: 200px;
  }

  @-prefix-keyframes slide {
    from {
      height: 0;
    }
    to {
      height: inherit;
    }
  }
`;

const Episode = ({ episode }) => {
  const dispatch = useDispatch();
  const { isPlaying, id } = useSelector(({ player }) => player);

  const [currentEpisodeId, setCurrentEpisodeId] = useState(null);
  const [isExpanded, setExpanded] = useState(false);

  const { id: episodeId, date, title, description, extendedDescription, source, image } = episode || {};

  const isCurrentEpisode = id === currentEpisodeId;

  const handleExpandClick = () => {
    setExpanded(prevValue => !prevValue);
  };

  console.log('isExpanded', isExpanded);
  const toglePlayPause = id => {
    const params = {
      id: episodeId,
      isPlaying: !isPlaying,
      audioSrc: source,
      imageSrc: image,
      title,
    };

    setCurrentEpisodeId(id);
    if (!isPlaying) {
      dispatch(setPlayerInfo(params));
      return;
    }

    if (isPlaying && isCurrentEpisode) {
      dispatch(setIsPlaying(!isPlaying));
      return;
    }

    if (isPlaying && !isCurrentEpisode) {
      const currentParams = { ...params, isPlaying: true };
      dispatch(setPlayerInfo(currentParams));
    }
  };

  const descriptionClass = isExpanded ? 'expanded-description' : 'collapsed-description';

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
        <div className="description secondary-text">{description}</div>

        <div className={`description secondary-text ${descriptionClass}`}>{extendedDescription}</div>

        <Button title="Expand more" onClick={handleExpandClick} className="secondary-text-bold pointer more" />
      </div>
    </Wrapper>
  );
};

export default Episode;
