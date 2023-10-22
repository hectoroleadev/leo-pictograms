export interface Pictogram {
  id: number;
  name: string;
  image?: string;
}

export interface PictogramContextProps {
  imageState?: string;
  pictogram: Pictogram;
  onPictogramClick: () => void;
  onPictogramClickError: () => void;
}

export interface OnClickArgs {
  pictogram: Pictogram;
  className: string;
}
