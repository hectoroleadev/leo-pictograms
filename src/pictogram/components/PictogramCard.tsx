import { CSSProperties, ReactElement, createContext } from 'react';
import { usePictogramCard } from '../hooks';
import { Pictogram, PictogramContextProps } from '../interfaces';
import { OnClickArgs } from '../interfaces/interfaces';

export interface Props {
  pictogram: Pictogram;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onClick?: (args: OnClickArgs | string) => void;
}

export const PictogramContext = createContext<PictogramContextProps>(
  {} as PictogramContextProps
);
const { Provider } = PictogramContext;

export const PictogramCard = ({
  pictogram,
  children,
  className,
  style,
  onClick,
}: Props) => {
  const { onPictogramClick, onPictogramClickError } = usePictogramCard({
    pictogram,
    onClick,
  });

  return (
    <Provider value={{ pictogram, onPictogramClick, onPictogramClickError }}>
      <div className={`card ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
