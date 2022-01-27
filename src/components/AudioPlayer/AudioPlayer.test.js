import { useSelector, useDispatch } from 'react-redux';
import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from '../../utils/test';
import AudioPlayer, { shiftTime } from '.';

describe('Audio Player', () => {
  const state = {
    player: {
      id: '1',
      isPlaying: false,
      title: 'Podcast test',
      imageSrc: 'https://image.com',
      audioSrc: 'https://audio.com',
      duration: '750',
      currentTime: '240',
    },
  };

  const mockedDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockedDispatch);
    useSelector.mockImplementation(callback => {
      return callback(state);
    });
  });

  afterEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
  });

  it('should render main ui elements', async () => {
    renderWithProviders(<AudioPlayer />);

    const durationInMinutes = '12:30';

    const title = screen.getByText(state.player.title);
    const duration = screen.getByText(`Duration: ${durationInMinutes}`);
    const shiftBackButton = screen.getByTestId('shift-back-button');
    const shiftForwardButton = screen.getByTestId('shift-forward-button');
    const playPauseButton = screen.getByTestId('play-pause-button');
    const currentTime = screen.getByTestId('current-time');
    const progressBar = screen.getByTestId('progress-bar');

    expect(title).toBeVisible();
    expect(duration).toBeVisible();
    expect(shiftBackButton).toBeVisible();
    expect(shiftForwardButton).toBeVisible();
    expect(playPauseButton).toBeVisible();
    expect(currentTime).toBeVisible();
    expect(progressBar).toBeVisible();
  });

  it('should allow to toggle play/pause', () => {
    renderWithProviders(<AudioPlayer />);

    const dispatchData = {
      payload: true,
      type: 'player/setIsPlaying',
    };

    const playPauseButton = screen.getByTestId('play-pause-button');

    fireEvent.click(playPauseButton);

    expect(mockedDispatch).toHaveBeenCalledWith(dispatchData);
  });

  it('should allow to jump forward', () => {
    renderWithProviders(<AudioPlayer />);

    const dispatchData = {
      payload: shiftTime,
      type: 'player/setCurrentTime',
    };

    const shiftForwardButton = screen.getByTestId('shift-forward-button');

    fireEvent.click(shiftForwardButton);

    expect(mockedDispatch).toHaveBeenCalledWith(dispatchData);
  });

  it('should allow to jump backward', () => {
    renderWithProviders(<AudioPlayer />);

    const shiftBackButton = screen.getByTestId('shift-back-button');

    fireEvent.click(shiftBackButton);

    expect(mockedDispatch).toHaveBeenCalled();
  });

  it('should allow to pause the audio', () => {
    const currentState = { ...state };
    currentState.player.isPlaying = true;

    useSelector.mockImplementationOnce(callback => {
      return callback(currentState);
    });

    const dispatchData = {
      payload: false,
      type: 'player/setIsPlaying',
    };

    renderWithProviders(<AudioPlayer />);

    const pauseButton = screen.getByTestId('play-pause-button');
    expect(pauseButton).toBeInTheDocument();

    fireEvent.click(pauseButton);

    expect(mockedDispatch).toHaveBeenCalledWith(dispatchData);
  });
});
