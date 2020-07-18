import React from 'react'
import GroupRoute from '../router/GroupRoute'

export interface IRouteBase {
  // 路由路径
  path: string
  // 路由组件
  component?: any
  // 路由跳转
  redirect?: string
  // 是否做路由完全匹配
  exact?: boolean
  // 路由信息
  meta: IRouteMeta
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean
}
export interface IRouteMeta {
  title: string
  icon?: string
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
    exact: true,
    path: '/',
    component: React.lazy(() => import('../layout/Index')),
    meta: {
      title: '系统路由'
    },
    routes: []
  },
  {
    path: '/login',
    component: React.lazy(() => import('../views/system/login/Login')),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/admin',
    component: React.lazy(() => import('../layout/Index')),
    meta: {
      title: '系统'
    },
    routes: [
      {
        path: '/admin/dashborad',
        meta: {
          title: '首页',
          icon: 'dashborad'
        }
        // component: GroupRoute,
        // routes: [
        //   {
        //     path: '/admin/dashborad/intro',
        //     component: React.lazy(() => import('../views/dashborad/intro')),
        //     meta: {
        //       title: '系统介绍',
        //       icon: 'read'
        //     }
        //   }
        // ]
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
    component: React.lazy(() => import('../views/error/404'))
  }
]
export default routes
