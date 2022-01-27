import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import Button from '../../shared/Button';
import Verified from '../../shared/Verified';
import HeaderBackground from '../../shared/HeaderBackground';
import { ImageWrapper } from '../../../styles/containers';
import { setPlayerInfo, setIsPlaying } from '../../../store/slices/playerSlice';
import { RootState } from '../../../store';
import { IPopularShow } from '../../../constants/interfaces';

const Wrapper = styled.div`
  height: 250px;
  position: relative;
  background-position: center;
  background-size: auto;

  .content-container {
    display: flex;
    justify-content: 'space-between';
    position: absolute;
    bottom: 30px;
    left: 20px;
  }

  .header {
    display: flex;
    align-items: center;
  }
`;

type HeadShowProps = {
  showData: IPopularShow;
};

const HeadShow = ({ showData }: HeadShowProps) => {
  const { t } = useTranslation(['latestShows']);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isPlaying, id } = useSelector(({ player }: RootState) => player);

  const { id: showId, verified, title, image, mainImage, source } = showData || {};

  const redirectToShow = () => {
    navigate(`/shows/${showId}`);
  };

  const togglePlayPause = () => {
    const params = {
      id: showId,
      isPlaying: !isPlaying,
      audioSrc: source,
      imageSrc: image,
      title,
    };

    if (!id) {
      dispatch(setPlayerInfo(params));
    }

    if (id) {
      dispatch(setIsPlaying(!isPlaying));
    }
  };

  return (
    <Wrapper>
      <HeaderBackground backgroundImageSrc={mainImage} />
      <div className="info">
        <div className="content-container">
          <ImageWrapper height={120} width={120}>
            <img height="120" width="120" src={image} alt="Podcast poster" />
          </ImageWrapper>

          <div>
            <Verified verified={verified} />

            <div className="primary-text">{title}</div>

            <div className="header">
              {isPlaying ? (
                <PauseCircleOutlineOutlinedIcon
                  fontSize="large"
                  className="pointer play-pause-button"
                  onClick={togglePlayPause}
                />
              ) : (
                <PlayCircleOutlinedIcon
                  fontSize="large"
                  className="pointer play-pause-button"
                  onClick={togglePlayPause}
                />
              )}

              <Button
                variant="outlined"
                title={t('headShowButton')}
                customStyles={{ ml: 2 }}
                onClick={redirectToShow}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeadShow;
