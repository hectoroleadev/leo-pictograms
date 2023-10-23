import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pictogram } from '../../pictogram/interfaces';

export interface PictogramState {
  pictogramInModal?: Pictogram;
}

const initialState: PictogramState = {
  pictogramInModal: undefined,
};

export const pictogramSlice = createSlice({
  name: 'pictogram',
  initialState,
  reducers: {
    onOpenPictogramModal: (state, action: PayloadAction<Pictogram>) => {
      state.pictogramInModal = action.payload;
    },
    onClosePictogramModal: (state) => {
      state.pictogramInModal = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpenPictogramModal, onClosePictogramModal } =
  pictogramSlice.actions;
