import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pictogram } from '../../pictogram/interfaces';

export interface PictogramInModal extends Pictogram {
  className?: string;
}

export interface PictogramState {
  pictogramInModal?: PictogramInModal;
}

const initialState: PictogramState = {
  pictogramInModal: undefined,
};

export const pictogramSlice = createSlice({
  name: 'pictogram',
  initialState,
  reducers: {
    onOpenPictogramModal: (state, action: PayloadAction<PictogramInModal>) => {
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
