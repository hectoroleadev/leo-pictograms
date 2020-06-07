const initSufix = 1;
const endSufix = 8;
const imagesResurces = `${process.env.PUBLIC_URL}/images/pictograms`;

export const sunIcon = 'https://img.icons8.com/color/48/000000/sun.png';

export const moonIcon = 'https://img.icons8.com/color/48/000000/new-moon.png';

export const NO_IMAGE = `${imagesResurces}/no-img.png`;

export const CREATE_DATA = prefix => {
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
  { datas: 'objeto', classColor: 'orangeColor' },
  { datas: 'verbo', classColor: 'greenColor' },
  { datas: 'persona', classColor: 'yellowColor' },
  { datas: 'comida', classColor: 'redColor' },
  { datas: 'actividad', classColor: 'blueColor' },
  { datas: 'social', classColor: 'purpleColor' }
];

export default CREATE_DATA;
