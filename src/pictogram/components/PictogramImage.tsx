import { useContext, useEffect, useState } from 'react';
import { PictogramContext } from './PictogramCard';
import { getDefaultImages } from '../../helpers';

interface Props {
  className?: string;
  image?: string;
}

const { noImage } = getDefaultImages();

export const PictogramImage = ({ image, className = '' }: Props) => {
  const { pictogram, onPictogramClick, onPictogramClickError } =
    useContext(PictogramContext);

  const [imageToShow, setImageToShow] = useState(
    image ? image : pictogram.image
  );

  const onError = () => {
    setImageToShow(noImage);
    onPictogramClickError();
  };

  return (
    <img
      onClick={onPictogramClick}
      src={imageToShow}
      alt={pictogram.name}
      className={`${className} m-2 rounded-2 img-fluid`}
      onError={onError}
    />
  );
};
