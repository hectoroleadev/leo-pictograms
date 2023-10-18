import { Navigate, Route, Routes } from 'react-router-dom';
import { CartoonPage, PictogramPage } from '../pictogram/pages';
import { URL_BASE } from '../helpers/createPictograms';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={`${URL_BASE}/photos`} element={<PictogramPage />} />
      <Route path={`${URL_BASE}/cartoons`} element={<CartoonPage />} />
      <Route path='/*' element={<Navigate to={`${URL_BASE}/photos`} />} />
    </Routes>
  );
};
