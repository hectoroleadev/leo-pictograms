import { useState } from 'react';
import { getDefaultImages } from '../../helpers';
import { OnClickArgs, Pictogram } from '../interfaces';

interface Props {
  pictogram: Pictogram;
  onClick?: (args: OnClickArgs) => void;
}

const { noImage } = getDefaultImages();

export const usePictogramCard = ({ pictogram, onClick }: Props) => {
  const [image, setImage] = useState(pictogram.image);

  const onPictogramClick = () => {
    if (image === noImage) {
      return;
    }

    onClick && onClick({ pictogram });
  };

  const onPictogramClickError = () => {
    setImage(noImage);
  };

  return {
    onPictogramClick,
    onPictogramClickError,
  };
};
