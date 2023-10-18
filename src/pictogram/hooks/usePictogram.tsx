import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDefaultImages } from '../../helpers';
import { zoomPictogram } from '../../store';

interface Props {
  classColor: string;
  imageSrc?: string;
}

export const usePictogram = ({ imageSrc, classColor }: Props) => {
  const [image, setImage] = useState(imageSrc);
  const dispatch = useDispatch();
  const { noImage } = getDefaultImages();

  const setBorderColorToImageZoomed = (classColor: string) => {
    const element = document.querySelector(`.${classColor}`);

    if (element) {
      const style = getComputedStyle(element);
      const elm = document.documentElement;
      elm.style.setProperty('--border-color', style.backgroundColor);
    }
  };

  const onPictogramClick = () => {
    if (image === noImage) {
      return;
    }

    setBorderColorToImageZoomed(classColor);
    dispatch(zoomPictogram(image));
  };

  return {
    image,
    onPictogramClick,
    onPictogramError: () => setImage(noImage),
  };
};
