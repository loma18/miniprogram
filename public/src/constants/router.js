import Index from '~/pages/Index';
import Home from '~/pages/home/Index';
import Banners from '~/pages/system/banners/Index';
import Params from '~/pages/system/params/Index';
import Login from '~/pages/login/Index';
import NotFound from '~/components/common/404';
import { ROUTE_PATH } from '~/constants/routes';

export const routes = [
  {
    path: ROUTE_PATH.login.path,
    component: Login
  },
  {
    path: '/',
    redirect: ROUTE_PATH.admin.path
  },
  {
    path: ROUTE_PATH.admin.path,
    component: Index,
    children: [
      {
        path: '/',
        redirect: ROUTE_PATH.home.key
      },
      {
        path: ROUTE_PATH.home.key,
        component: Home
      },
      {
        path: ROUTE_PATH.system.key,
        redirect: ROUTE_PATH.banners.path.replace(/^\//, '')
      },
      {
        path: ROUTE_PATH.banners.path.replace(/^\//, ''),
        component: Banners
      },
      {
        path: ROUTE_PATH.systemParams.path.replace(/^\//, ''),
        component: Params
      },
      {
        path: '/*',
        component: NotFound
      }
    ]
  },
  {
    path: '/*',
    component: NotFound
  }
];
