import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const Wrapper = styled.div`
  max-width: 700px;
  border-radius: 5px;
  padding: 6px 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 5px;
  margin-bottom: 10px;

  @media (hover: hover) {
    &:hover {
      background-color: ${() => colors.opacityGray};
    }
  }
`;

export const AudioInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 20px;

  .poster {
    height: 50px;
    width: 50px;
    margin-right: 15px;

    img {
      height: inherit;
    }
  }

  .text {
    color: ${() => colors.darkBlue1};
    font-size: 12px;
    margin: 0;
  }

  .title {
    font-weight: bold;
  }
`;

export const AudioPlayerWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;

  .forwardBackward {
    background: none;
    color: ${() => colors.darkBlue1};
    border: none;
    display: flex;
    align-items: center;
    font-family: monospace;
    font-size: 16px;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        color: ${() => colors.pink};
      }
    }

    &:active {
      color: ${() => colors.pink};
    }
  }

  .playPause {
    background: ${() => colors.pink};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    width: 55px;
    height: 55px;
    font-size: 26px;
    color: ${() => colors.yellow};
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: ${() => colors.white};
    }
  }

  .currentTime,
  .duration {
    font-family: monospace;
    font-size: 12px;
  }

  .currentTime {
    margin-left: 20px;
  }
`;

export const ProgressBar = styled.input.attrs({ type: 'range', defaultValue: 0 })`
  appearance: none;
  background: ${() => colors.lightPeach};
  border-radius: 10px;
  position: relative;
  height: 11px;
  outline: none;
  margin-right: 6px;
  margin-left: 6px;

  &::before {
    content: '';
    height: 11px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: ${props => `${props.beforeWidth}%` || 0};
    background-color: ${() => colors.opacityGray};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
    background-color: ${() => colors.pink};
    cursor: pointer;
    position: relative;
    z-index: 3;
    box-sizing: border-box;
  }

  &:active::-webkit-slider-thumb {
    transform: scale(1.2);
    background: ${() => colors.pink};
  }
`;
