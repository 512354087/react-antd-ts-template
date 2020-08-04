import React from 'react'
import BasicLayout from '@/layout/BasicLayout'
import HomeHeader from '@/components/header'
import { DashboardOutlined, FileOutlined, FormOutlined, TableOutlined, AreaChartOutlined } from '@ant-design/icons'
export enum Roles {
  /** 游客 */
  Guest = 'Guest',
  /** 超级管理员 */
  SuperAdmin = 'SuperAdmin',
  /** 普通管理员 */
  Admin = 'Admin',
  /** 操作账号 */
  User = 'User'
}
export interface IRouteBase {
  // 路由路径
  path: string
  // 路由组件
  component?: any
  /** 重定向不能与布局组件同时使用，同时使用时会忽略重定向（可以通过布局组件内部处理解决） */
  redirect?: string
  // 是否做路由完全匹配
  exact?: boolean
  // 路由信息
  meta: IRouteMeta
  // 是否校验权限,
  auth?: boolean
  /** 授权 */
  authority?: Roles[]
  /** 菜单布局组件会使用 */
  hideInMenu?: boolean
  /** 是否是布局组件（默认 `false`）  */
  layout?: boolean
  /** 预留自定义属性 */
  [otherProp: string]: any
}
export interface IRouteMeta {
  title: string
  icon?: string | React.ElementType
}

export interface IRoute extends IRouteBase {
  routes?: IRoute[]
}

/**
 * router 第一级路由负责最外层的路由渲染，比如 userLayout 和 Layout 的区分
 * 所有系统内部存在的页面路由都要在此地申明引入，而菜单栏的控制是支持异步请求控制的
 */
const routes: IRoute[] = [
  {
    path: '/login',
    component: React.lazy(() => import('../views/login/Login')),
    meta: {
      title: '登录'
    },
    auth: false
  },
  {
    path: '/',
    meta: {
      title: '首页',
      icon: DashboardOutlined
    },
    exact: true,
    redirect: '/admin/dashboard/intro'
  },
  {
    path: '/admin',
    component: React.lazy(() => import('@/layout/BasicLayout')),
    child: HomeHeader,
    redirect: '/admin/dashboard',
    meta: {
      title: '首页',
      icon: DashboardOutlined
    },
    authority: [Roles.Guest, Roles.Admin],
    layout: true,
    auth: false,
    routes: [
      {
        path: '/admin/dashboard',
        meta: {
          title: '系统总览',
          icon: DashboardOutlined
        },
        component: React.lazy(() => import('../views/dashborad/intro')),
        hideBreadcrumb: true, // 是否隐藏面包屑导航
        exact: true,
        routes: []
      },
      {
        path: '/admin/list',
        meta: {
          title: '列表',
          icon: TableOutlined
        },
        redirect: '/admin/list/list-list',
        exact: true,
        routes: [
          {
            path: '/admin/list/list-list',
            meta: {
              title: '查询表格'
            },
            exact: true,
            component: React.lazy(() => import('../views/list/table'))
          },
          {
            path: '/admin/list/list-lis222',
            meta: {
              title: '查询表111'
            },
            exact: true,
            component: React.lazy(() => import('../views/dashborad/intro'))
          }
        ]
      },
      {
        path: '/admin/chart',
        meta: {
          title: '图表',
          icon: AreaChartOutlined
        },
        redirect: '/admin/chart/echart',
        exact: true,
        routes: [
          {
            path: '/admin/chart/echart',
            meta: {
              title: 'Echarts'
            },
            exact: true,
            component: React.lazy(() => import('../views/chart/EchartsDemo/Echarts'))
          },
          {
            path: '/admin/chart/bizCharts',
            meta: {
              title: 'BizCharts'
            },
            exact: true,
            component: React.lazy(() => import('../views/chart/bizChartDemo/Index'))
          }
        ]
      }
    ]
  },
  {
    path: '/error/404',
    auth: false,
    component: React.lazy(() => import('../views/error/404')),
    meta: {
      title: '页面不存在'
    },
    routes: []
  },
  {
    path: '/error/403',
    auth: false,
    component: React.lazy(() => import('../views/error/403')),
    meta: {
      title: '暂无权限'
    }
  },
  {
    path: '/*',
    meta: {
      title: '错误页面'
    },
    auth: false,
    component: React.lazy(() => import('../views/error/404'))
  }
]
export default routes
