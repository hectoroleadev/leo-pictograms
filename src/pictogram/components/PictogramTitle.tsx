import { useContext } from 'react';
import { PictogramContext } from './PictogramCard';

interface Props {
  className?: string;
  title?: string;
}

export const PictogramTitle = ({ title, className = '' }: Props) => {
  const { pictogram } = useContext(PictogramContext);
  let titleToShow: string | undefined;

  if (title) {
    titleToShow = title;
  } else if (pictogram.name) {
    titleToShow = pictogram.name;
  } else {
    titleToShow = undefined;
  }

  return <div className={`text-center ${className}`}>{titleToShow}</div>;
};
