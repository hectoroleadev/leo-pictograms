import { pictogramsList } from '../data';
import { Pictogram } from '../pictogram/interfaces';

export const getPictogramSections = (): Pictogram[] =>
  pictogramsList.map((pictogram) => pictogram.section);
