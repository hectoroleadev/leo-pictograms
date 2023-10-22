import { useState } from 'react';
import { getDefaultImages } from '../../helpers';
import { OnClickArgs, Pictogram } from '../interfaces';

interface Props {
  className?: string;
  pictogram: Pictogram;
  onClick?: (args: OnClickArgs) => void;
}

const { noImage } = getDefaultImages();

export const usePictogram = ({ pictogram, className = '', onClick }: Props) => {
  const [imageState, setImageState] = useState(pictogram.image);

  const onPictogramClick = () => {
    if (imageState === noImage) {
      return;
    }

    onClick && onClick({ pictogram, className });
  };

  return {
    imageState,
    onPictogramClick,
    onPictogramClickError: () => setImageState(noImage),
  };
};
