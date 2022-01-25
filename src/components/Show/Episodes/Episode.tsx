import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import Button from '../../shared/Button';
import { setPlayerInfo, setIsPlaying } from '../../../store/slices/playerSlice';
import { RootState } from '../../../store';

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
    margin-bottom: 6px;
  }

  .play-pause-button {
    margin-right: 8px;
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
`;

const Episode = ({ episode }) => {
  const { t } = useTranslation(['common']);
  const dispatch = useDispatch();
  const { isPlaying, id } = useSelector(({ player }: RootState) => player);

  const [currentEpisodeId, setCurrentEpisodeId] = useState(null);
  const [isExpanded, setExpanded] = useState(false);

  const { id: episodeId, date, title, description, extendedDescription, source, image } = episode || {};

  const isCurrentEpisode = id === currentEpisodeId;

  const handleExpandClick = () => {
    setExpanded(prevValue => !prevValue);
  };

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
            <PauseCircleOutlineOutlinedIcon
              className="pointer play-pause-button"
              onClick={() => toglePlayPause(episodeId)}
            />
          ) : (
            <PlayCircleOutlinedIcon className="pointer play-pause-button" onClick={() => toglePlayPause(episodeId)} />
          )}
          <div className="primary-text">{title}</div>
        </div>

        <div className="description secondary-text">{description}</div>

        <div className={`description secondary-text ${descriptionClass}`}>{extendedDescription}</div>

        <Button title={t('expandMore')} onClick={handleExpandClick} customStyles={{ mt: 1 }} />
      </div>
    </Wrapper>
  );
};

export default Episode;
