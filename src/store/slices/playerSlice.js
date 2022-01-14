import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  title: 'Quickly Kevin, will he score?',
  audioSrc:
    'https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3',
  imageSrc: 'https://slice-fun-podcasts.s3.eu-west-1.amazonaws.com/record-classix/record-classix.jpeg',
  duration: 0,
  currentTime: 0,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerInfo: (state, action) => {
      const { isPlaying, audioSrc, imageSrc, title } = action.payload;
      state = { isPlaying, audioSrc, imageSrc, title };
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
  },
});

export const { setPlayerInfo, setIsPlaying, setDuration, setCurrentTime } = playerSlice.actions;

export default playerSlice.reducer;
