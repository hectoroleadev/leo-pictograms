import { LazyExoticComponent, lazy } from 'react';
import { getEnvVariables } from '../helpers';

const { URL_BASE_ROUTER } = getEnvVariables();

type JSXElement = JSX.Element;
type JSXComponent = () => JSXElement;

export interface Route {
  path: string;
  to: string;
  Component?: LazyExoticComponent<JSXComponent> | JSXComponent;
  name?: string;
  element?: JSXElement;
}

const LazyPhotoPage = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPhotoPage"  */
      '../pictogram/pages/PictogramPage'
    )
);

const LazyCartoonPage = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyCartoonPage"  */
      '../pictogram/pages/CartoonPage'
    )
);

export const routes: Route[] = [
  {
    path: `${URL_BASE_ROUTER}/photos`,
    to: `${URL_BASE_ROUTER}/photos`,
    Component: LazyPhotoPage,
    name: 'Photos',
  },
  {
    path: `${URL_BASE_ROUTER}/cartoons`,
    to: `${URL_BASE_ROUTER}/cartoons`,
    Component: LazyCartoonPage,
    name: 'Cartoons',
  },
];

export const defaultRoute = routes[0];
