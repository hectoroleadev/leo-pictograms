import {
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import { CartoonPage, PictogramPage } from '../pictogram/pages';
import { getEnvVariables } from '../helpers';

const { URL_BASE_ROUTER, IS_HASH_ROUTER } = getEnvVariables();

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

export const router = IS_HASH_ROUTER
  ? createHashRouter(routes)
  : createBrowserRouter(routes);
