import { configureStore } from '@reduxjs/toolkit';
import { showsApi } from './queries/shows';
import playerSlice from './slices/playerSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import sidebarSlice from './slices/sidebarSlice';

export const store = configureStore({
  reducer: {
    [showsApi.reducerPath]: showsApi.reducer,
    player: playerSlice,
    sidebar: sidebarSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(showsApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
