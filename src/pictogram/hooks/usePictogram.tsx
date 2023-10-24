import { useState } from 'react';
import { OnClickArgs, Pictogram } from '../interfaces';
import { getEnvVariables, getPictogramsBySectionId } from '../../helpers';
import { useNavigate } from 'react-router-dom';

const { URL_BASE_ROUTER } = getEnvVariables();

export const usePictogram = (initialState: Pictogram[]) => {
  const navigate = useNavigate();
  const [pictograms, setPictograms] = useState<Pictogram[]>(initialState);
  const onClickSection = ({ pictogram }: OnClickArgs) => {
    const pictograms = getPictogramsBySectionId(pictogram.id);

    navigate(`${URL_BASE_ROUTER}/${pictogram.id}`);

    setPictograms(pictograms ? pictograms : []);
  };
  return { pictograms, onClickSection };
};
