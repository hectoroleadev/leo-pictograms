import { DISPLAY_IMAGE } from '../actions/types';

const initialState = null;

export default function image(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_IMAGE:
      return action.srcImage;
    default:
      return state;
  }
}
