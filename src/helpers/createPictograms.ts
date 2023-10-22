import { Pictogram } from '../pictogram/interfaces';
import { getEnvVariables } from './getEnvVariables';

const initSufix = 1;
const { BASE_URL } = getEnvVariables();

export const imagesResurces = `${BASE_URL}/images`;

export const createPictograms = (
  prefix: string,
  endSufix: number
): Pictogram[] => {
  let pictorgrams: Pictogram[] = [];

  for (let i = initSufix; i <= endSufix; i++) {
    const image = `${imagesResurces}/${prefix}${i}.jpg`;

    pictorgrams.push({
      id: i,
      name: `${prefix}${i}`,
      image,
    });
  }

  return pictorgrams;
};
