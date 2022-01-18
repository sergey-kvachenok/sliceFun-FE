import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import Button from '../../shared/Button';
import Verified from '../../shared/Verified';
import HeaderBackground from '../../shared/HeaderBackground';
import { colors } from '../../../styles/theme';
import { setPlayerInfo, setIsPlaying } from '../../../store/slices/playerSlice';

const Wrapper = styled.div`
  height: 250px;
  position: relative;
  background-color: ${colors.darkBlue1};
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

const HeadShow = ({ showData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isPlaying, id } = useSelector(({ player }) => player);

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
          <div className="header-poster">
            <img height="120" width="120" src={image} alt="Podcast poster" />
          </div>

          <div className="info">
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

              <Button variant="outlined" title="Go to Show" customStyles={{ ml: 2 }} onClick={redirectToShow} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeadShow;
