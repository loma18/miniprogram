export const ROUTE_PATH = {
  home: '/home',
  system: '/system',
  banners: '/system/banners',
  systemParams: '/system/params'
};

import Home from '~/pages/home/Index';
import Banners from '~/pages/system/banners/Index';
import Params from '~/pages/system/params/Index';
import NotFound from '~/components/common/404';

export const routes = [
  {
    path: '/',
    redirect: ROUTE_PATH.home
  },
  {
    path: ROUTE_PATH.home,
    component: Home
  },
  {
    path: ROUTE_PATH.system,
    redirect: ROUTE_PATH.banners
  },
  {
    path: ROUTE_PATH.banners,
    component: Banners
  },
  {
    path: ROUTE_PATH.systemParams,
    component: Params
  },
  {
    path: '/*',
    component: NotFound
  }
];
