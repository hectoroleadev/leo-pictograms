const initSufix = 1;
const endSufix = 8;
const imagesResurces = `${process.env.PUBLIC_URL}/images/pictograms`;

export const noImage = `${imagesResurces}/no-img.png`;

export const createData = prefix => {
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

export default createData;
