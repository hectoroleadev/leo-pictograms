import { CSSProperties, ReactElement, createContext } from 'react';
import { usePictogram } from '../hooks';
import { Pictogram, PictogramContextProps } from '../interfaces';
import { OnClickArgs } from '../interfaces/interfaces';

export interface Props {
  pictogram: Pictogram;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onClick?: (args: OnClickArgs) => void;
}

export const PictogramContext = createContext({} as PictogramContextProps);
const { Provider } = PictogramContext;

export const PictogramCard = ({
  pictogram,
  children,
  className,
  style,
  onClick,
}: Props) => {
  const { onPictogramClick, onPictogramClickError, imageState } = usePictogram({
    pictogram,
    className,
    onClick,
  });

  return (
    <Provider
      value={{ pictogram, imageState, onPictogramClick, onPictogramClickError }}
    >
      <div className={`card ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
