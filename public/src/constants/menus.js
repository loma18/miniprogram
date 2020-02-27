import { ROUTE_PATH } from '~/constants/routes';
const rootPath = '/admin';
export const menus = [
  {
    key: 'home',
    title: '首页',
    icon: 's-home',
    children: [],
    path: rootPath + ROUTE_PATH.home.path
  },
  {
    key: 'system',
    title: '系统设置',
    icon: 'setting',
    children: [
      {
        key: 'banners',
        title: 'Banner管理',
        icon: 'picture',
        children: [],
        path: rootPath + ROUTE_PATH.banners.path
      },
      {
        key: 'params',
        title: '系统参数',
        icon: 'help',
        children: [],
        path: rootPath + ROUTE_PATH.systemParams.path
      }
    ],
    path: rootPath + ROUTE_PATH.system.path,
    defaultChildKey: 'banners'
  }
];
