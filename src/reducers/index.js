import { combineReducers } from 'redux';
import pictogramReducer from './pictogramReducer';

export default combineReducers({
  pictogramZoomed: pictogramReducer
});
