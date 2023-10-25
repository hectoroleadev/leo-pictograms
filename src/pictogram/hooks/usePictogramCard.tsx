import { useState } from 'react';
import { getDefaultImages } from '../../helpers';
import { OnClickArgs, Pictogram } from '../interfaces';

interface Props {
  pictogram: Pictogram;
  onClick?: (args: OnClickArgs | string) => void;
}

const { noImage } = getDefaultImages();

export const usePictogramCard = ({ pictogram, onClick }: Props) => {
  const [image, setImage] = useState(pictogram.image);

  const onPictogramClick = () => {
    if (image === noImage) {
      return;
    }

    onClick && onClick.name === 'openPictogramModal'
      ? onClick({ pictogram })
      : onClick?.(pictogram.id);
  };

  const onPictogramClickError = () => {
    setImage(noImage);
  };

  return {
    onPictogramClick,
    onPictogramClickError,
  };
};
