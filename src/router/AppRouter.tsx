import {
  Navigate,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import { getEnvVariables } from '../helpers';

import { Route, defaultRoute, routes } from './';

const { IS_HASH_ROUTER, URL_BASE_ROUTER } = getEnvVariables();

export const router = () => {
  const customRoutes: Route[] = [
    ...routes,
    {
      path: `${URL_BASE_ROUTER}/*`,
      to: 'undefined',
      element: <Navigate to={defaultRoute.to} replace />,
    },
  ];

  return IS_HASH_ROUTER
    ? createHashRouter(customRoutes)
    : createBrowserRouter(customRoutes);
};
