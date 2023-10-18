import { configureStore } from '@reduxjs/toolkit';
import { pictogramSlice } from './';

export const store = configureStore({
  reducer: {
    pictogram: pictogramSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
