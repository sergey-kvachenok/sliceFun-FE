import { createSlice } from '@reduxjs/toolkit';

const defaultImage = 'https://slice-fun-podcasts.s3.eu-west-1.amazonaws.com/record-classix/record-classix.jpeg';

const initialState = {
  isMobileSidebarActive: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleIsMobileSidebarActive: state => {
      state.isMobileSidebarActive = !state.isMobileSidebarActive;
    },
  },
});

export const { toggleIsMobileSidebarActive } = sidebarSlice.actions;

export default sidebarSlice.reducer;
