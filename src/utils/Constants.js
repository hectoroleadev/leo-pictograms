const initSufix = 1;
const imagesResurces = `${process.env.PUBLIC_URL}/images/`;

export const sunIcon = 'https://img.icons8.com/color/48/000000/sun.png';

export const moonIcon = 'https://img.icons8.com/color/48/000000/new-moon.png';

export const NO_IMAGE = `${imagesResurces}/no-img.png`;

export const CREATE_DATA = (prefix, endSufix) => {
  let data = [];

  for (let i = initSufix; i <= endSufix; i++) {
    const srcImage = `${imagesResurces}/${prefix}${i}.jpg`;

    data.push({
      id: i,
      name: `${prefix}${i}`,
      image: srcImage
    });
  }

  return data;
};

export const COLOR_LIST = [
  { datas: 'pictograms/objeto', classColor: 'orangeColor', size: 8 },
  { datas: 'pictograms/verbo', classColor: 'greenColor', size: 7 },
  { datas: 'pictograms/persona', classColor: 'yellowColor', size: 4 },
  { datas: 'pictograms/comida', classColor: 'redColor', size: 5 },
  { datas: 'pictograms/actividad', classColor: 'blueColor', size: 7 },
  { datas: 'pictograms/social', classColor: 'purpleColor', size: 5 }
];

export const CARTOON_LIST = [
  { datas: 'cartoons/bob', classColor: 'bg-transparent', size: 5 },
  { datas: 'cartoons/leo-camion', classColor: 'bg-transparent', size: 6 },
  { datas: 'cartoons/zenon', classColor: 'bg-transparent', size: 6 },
  { datas: 'cartoons/paw-patrol', classColor: 'bg-transparent', size: 6 }
];

export const URL_BASE = `${process.env.PUBLIC_URL}`;

export default CREATE_DATA;
