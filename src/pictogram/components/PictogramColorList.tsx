import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Pictogram } from '../interfaces';
import { PictogramComponent } from '.';

interface PictogramColorListProps {
  classColor: string;
  pictograms: Pictogram[];
}

export const PictogramColorList = ({
  classColor,
  pictograms,
}: PictogramColorListProps) => {
  const pictogramZoomed = useSelector(
    (state: RootState) => state.pictogram.pictogramZoomed
  );
  const filter = pictogramZoomed ? 'blur(2px) opacity(.3)' : 'none';

  return (
    <div
      className={`col-sm-2 col-4 mb-2  ps-0 ${classColor}`}
      style={{ filter }}
    >
      {pictograms.map((pictogram: Pictogram) => {
        return (
          <PictogramComponent
            key={pictogram.id}
            pictogram={pictogram}
            classColor={classColor}
          />
        );
      })}
    </div>
  );
};
