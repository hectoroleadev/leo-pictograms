interface Image {
  id: number;
  name: string;
  image?: string;
}

export interface Pictogram extends Image {
  backgroundColor?: string;
}

export interface Photo extends Image {
  borderColor?: string;
}

export interface PictogramContextProps {
  pictogram: Pictogram;
  onPictogramClick: () => void;
  onPictogramClickError: () => void;
}

export interface OnClickArgs {
  pictogram: Pictogram;
}
