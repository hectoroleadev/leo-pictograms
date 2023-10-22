import { useContext } from 'react';
import { getDefaultImages } from '../../helpers';
import { PictogramContext } from './PictogramCard';

interface Props {
  className?: string;
  image?: string;
}

const { noImage } = getDefaultImages();

export const PictogramImage = ({ image, className = '' }: Props) => {
  const {
    pictogram,
    imageState = '',
    onPictogramClick,
    onPictogramClickError,
  } = useContext(PictogramContext);
  let imageToShow: string;

  if (image) {
    imageToShow = image;
  } else if (pictogram.image) {
    imageToShow = pictogram.image;
  } else {
    imageToShow = noImage;
  }

  console.log(imageToShow);

  return (
    <img
      onClick={onPictogramClick}
      src={imageState}
      alt={pictogram.name}
      className={`${className} m-2 rounded-2 img-fluid border border-1`}
      onError={onPictogramClickError}
    />
  );
};
