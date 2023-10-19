import { Navigate, Route, Routes } from 'react-router-dom';
import { CartoonPage, PictogramPage } from '../pictogram/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/photos' element={<PictogramPage />} />
      <Route path='/cartoons' element={<CartoonPage />} />
      <Route path='/*' element={<Navigate to='/photos' replace />} />
    </Routes>
  );
};
