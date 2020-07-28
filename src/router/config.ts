import React from 'react'
import BasicLayout from '@/layout/BasicLayout'
import HomeHeader from '@/components/header'
import { DashboardOutlined, FileOutlined, FormOutlined, TableOutlined } from '@ant-design/icons'
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
    component: React.lazy(() => import('@/layout/BasicLayout')),
    child: HomeHeader,
    redirect: '/dashboard/intro',
    meta: {
      title: '首页',
      icon: DashboardOutlined
    },
    authority: [Roles.Guest, Roles.Admin],
    layout: true,
    auth: false,
    routes: [
      {
        path: '/dashboard',
        meta: {
          title: '首页',
          icon: DashboardOutlined
        },
        routes: [
          {
            path: '/dashboard/intro',
            meta: {
              title: '系统总览'
            },
            component: React.lazy(() => import('../views/dashborad/intro'))
          }
        ]
      },
      {
        path: '/list',
        meta: {
          title: '列表',
          icon: TableOutlined
        },
        routes: [
          {
            path: '/list/list-list',
            meta: {
              title: '查询表格'
            },
            component: React.lazy(() => import('../views/dashborad/intro'))
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
