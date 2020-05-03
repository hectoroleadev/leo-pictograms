import { DISPLAY_IMAGE } from './types';

export const displayImageZoomed = srcImage => async dispatch => {
  dispatch({
    type: DISPLAY_IMAGE,
    srcImage
  });
};
