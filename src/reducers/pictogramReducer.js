import { DISPLAY_IMAGE } from '../actions/types';

export default function image(state = null, action) {
  switch (action.type) {
    case DISPLAY_IMAGE:
      return action.srcImage;
    default:
      return state;
  }
}
