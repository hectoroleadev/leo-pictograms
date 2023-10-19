import {
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import { CartoonPage, PictogramPage } from '../pictogram/pages';
import { URL_BASE_ROUTER, isHashRouter } from '../helpers/createPictograms';

const routes = [
  {
    path: `${URL_BASE_ROUTER}/photos`,
    element: <PictogramPage />,
  },
  {
    path: `${URL_BASE_ROUTER}/cartoons`,
    element: <CartoonPage />,
  },
  {
    path: `${URL_BASE_ROUTER}/*`,
    element: <Navigate to={`${URL_BASE_ROUTER}/photos`} replace />,
  },
];

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={`${URL_BASE_ROUTER}/photos`} element={<PictogramPage />} />
      <Route path={`${URL_BASE_ROUTER}/cartoons`} element={<CartoonPage />} />
      <Route
        path={`${URL_BASE_ROUTER}/*`}
        element={<Navigate to={`${URL_BASE_ROUTER}/photos`} replace />}
      />
    </Routes>
  );
};

export const router = isHashRouter
  ? createHashRouter(routes)
  : createBrowserRouter(routes);
