const initSufix = 1;
const endSufix = 8;

export const paleteColors = {
  green: '#8ae800',
  yellow: '#faf100',
  blue: '#00a7ea',
  red: '#ff0061',
  orange: '#ffaa00',
  purple: '#7734ea'
};

export const landscapeStyle = border => {
  return {
    width: '45vw',
    height: '30vw',
    marginTop: '-15vw',
    marginLeft: '-22.5vw',
    border
  };
};

export const portraitStyle = border => {
  return {
    width: '30vw',
    height: '45vw',
    marginTop: '-22.5vw',
    marginLeft: '-15vw',
    border
  };
};

export const createData = prefix => {
  let data = [];

  for (var i = initSufix; i <= endSufix; i++) {
    let srcImage = `${process.env.PUBLIC_URL}/images/pictograms/${prefix}${i}.jpg`;

    data.push({
      id: i,
      name: `${prefix}${i}`,
      image: srcImage
    });
  }

  return data;
};

export default createData;
