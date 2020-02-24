import { ROUTE_PATH } from '~/constants/route';

export const menus = [
  {
    key: 'home',
    title: '首页',
    icon: 's-home',
    children: [],
    path: ROUTE_PATH.home
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
        path: ROUTE_PATH.banners
      },
      {
        key: 'params',
        title: '系统参数',
        icon: 'help',
        children: [],
        path: ROUTE_PATH.systemParams
      }
    ],
    path: ROUTE_PATH.system,
    defaultChildKey: 'banners'
  }
];
