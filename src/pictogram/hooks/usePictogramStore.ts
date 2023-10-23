import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  onClosePictogramModal,
  onOpenPictogramModal,
} from '../../store';
import { OnClickArgs } from '../interfaces';

export const usePictogramStore = () => {
  const dispatch = useDispatch();
  const { pictogramInModal } = useSelector(
    (state: RootState) => state.pictogram
  );

  const openPictogramModal = ({ pictogram }: OnClickArgs) => {
    dispatch(onOpenPictogramModal({ ...pictogram }));
  };

  const closePictogramModal = () => {
    dispatch(onClosePictogramModal());
  };

  return {
    pictogramInModal,
    openPictogramModal,
    closePictogramModal,
  };
};
