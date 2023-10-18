import { URL_BASE } from '.';

const imagesResurces = `${URL_BASE}/images`;

export const getDefaultImages = () => {
  const sunIcon = 'https://img.icons8.com/color/48/000000/sun.png';
  const moonIcon = 'https://img.icons8.com/color/48/000000/new-moon.png';
  const noImage = `${imagesResurces}/no-img.png`;

  return { sunIcon, moonIcon, noImage };
};
