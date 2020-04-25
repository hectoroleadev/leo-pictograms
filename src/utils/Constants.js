const initSufix = 1;
const endSufix = 8;
const imagesResurces = `${process.env.PUBLIC_URL}/images/pictograms`;

export const noImage = `${imagesResurces}/no-img.png`;

export const landscapeStyle = () => {
  return {
    width: '45vw',
    height: '30vw',
    marginTop: '-15vw',
    marginLeft: '-22.5vw'
  };
};

export const portraitStyle = () => {
  return {
    width: '30vw',
    height: '45vw',
    marginTop: '-22.5vw',
    marginLeft: '-15vw'
  };
};

export const landscapeThumbnailStyle = {
  width: '12vw',
  height: '8vw'
};

export const portraitThumbnailStyle = {
  width: '8vw',
  height: '12vw'
};

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
