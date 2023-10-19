import { Pictogram } from '../pictogram/interfaces';

const initSufix = 1;

export const URL_BASE = import.meta.env.BASE_URL || '';
export const isHashRouter = import.meta.env.VITE_HASH_ROUTER !== 'true';
export const URL_BASE_ROUTER = isHashRouter ? '' : URL_BASE;

export const imagesResurces = `${URL_BASE}/images`;

export const createPictograms = (
  prefix: string,
  endSufix: number
): Pictogram[] => {
  let pictorgrams: Pictogram[] = [];

  for (let i = initSufix; i <= endSufix; i++) {
    const imageSrc = `${imagesResurces}/${prefix}${i}.jpg`;

    pictorgrams.push({
      id: i,
      name: `${prefix}${i}`,
      imageSrc,
    });
  }

  return pictorgrams;
};
