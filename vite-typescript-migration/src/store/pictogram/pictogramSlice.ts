import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface PictogramState {
  pictogramZoomed?: string;
}

const initialState: PictogramState = {
  pictogramZoomed: undefined,
};

export const pictogramSlice = createSlice({
  name: 'pictogram',
  initialState,
  reducers: {
    zoomPictogram: (state, action: PayloadAction<string | undefined>) => {
      state.pictogramZoomed = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { zoomPictogram } = pictogramSlice.actions;
