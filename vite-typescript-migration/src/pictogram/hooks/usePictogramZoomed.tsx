import { useSelector, useDispatch } from 'react-redux';
import { RootState, zoomPictogram } from '../../store';

export const usePictogramZoomed = () => {
  const dispatch = useDispatch();
  const pictogramZoomed = useSelector(
    (state: RootState) => state.pictogram.pictogramZoomed
  );

  const onClickImageZoomed = () => {
    dispatch(zoomPictogram());
  };
  return { pictogramZoomed, onClickImageZoomed };
};
