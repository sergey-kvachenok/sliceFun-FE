import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import Button from '../shared/Button';
import Verified from '../shared/Verified';
import {colors} from '../../styles/theme'

const Wrapper = styled.div`
 background-image: url(${({ imageSrc }) => imageSrc});
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
  const navigate = useNavigate();
    const { isPlaying } = useSelector(({ player }) => player);

  const { id, verified, title, category, description, image, mainImage} = showData || {};
console.log(showData)

const redirectToShow = () => {
  navigate(`/shows/${id}`)
}

  return (
    <Wrapper imageSrc={mainImage}>
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
            <PauseCircleOutlineOutlinedIcon fontSize="large" className="pointer" onClick={() => {}} />
          ) : (
            <PlayCircleOutlinedIcon fontSize="large" className="pointer" onClick={() => {}} />
          )}

          <Button variant="outlined" title="Go to Show" customStyles={{ mr: 2 }} onClick={redirectToShow}/>
        </div>
        </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default HeadShow;
