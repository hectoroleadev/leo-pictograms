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
    <div>
      <img
        onClick={onPictogramClick}
        src={image}
        alt={pictogram.name}
        className='pictogram m-2 border rounded shadow img-fluid'
        onError={onPictogramError}
      />
    </div>
  );
};
