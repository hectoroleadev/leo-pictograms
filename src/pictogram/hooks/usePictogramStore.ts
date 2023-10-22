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

  const openPictogramModal = ({ pictogram, className }: OnClickArgs) => {
    dispatch(onOpenPictogramModal({ ...pictogram, className }));
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
