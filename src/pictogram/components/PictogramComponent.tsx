import { usePictogram } from '../hooks';
import { Pictogram } from '../interfaces';

interface Props {
  classColor: string;
  pictogram: Pictogram;
}

export const PictogramComponent = ({ pictogram, classColor }: Props) => {
  const { onPictogramClick, onPictogramError, image } = usePictogram({
    imageSrc: pictogram.imageSrc,
    classColor,
  });

  return (
    <div className={`card ${classColor} my-2 shadow`}>
      <img
        onClick={onPictogramClick}
        src={image}
        alt={pictogram.name}
        className='pictogram m-2 rounded-2 img-fluid border border-1'
        onError={onPictogramError}
      />
    </div>
  );
};
