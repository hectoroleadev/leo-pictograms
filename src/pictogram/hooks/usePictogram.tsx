import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEnvVariables, getPictogramsBySectionId } from '../../helpers';
import { Pictogram } from '../interfaces';

const { URL_BASE_ROUTER } = getEnvVariables();

export const usePictogram = (initialState: Pictogram[]) => {
  const navigate = useNavigate();
  const [pictograms, setPictograms] = useState<Pictogram[]>(initialState);

  const onClickSection = (id: string) => {
    const pictograms = getPictogramsBySectionId(id);

    navigate(`${URL_BASE_ROUTER}/${id}`);

    setPictograms(pictograms ? pictograms : []);
  };
  return { pictograms, onClickSection };
};
