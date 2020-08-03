import { IRoute } from './config'
import config from '@/config'

/**
 * 将路由转换为一维数组
 * @param routeList 路由
 * @param deep 是否深层转化
 * @param auth 路由是否需要检查授权, 路由配置的auth优先级比这里高
 */
export function flattenRoute(routeList: IRoute[], deep: boolean, auth: boolean) {
  const result: IRoute[] = []
  // 筛选出
  for (let i = 0; i < routeList.length; i += 1) {
    const route = routeList[i]
    result.push({
      ...route,
      auth: typeof route.auth !== 'undefined' ? route.auth : auth
    })
    if (route.routes && deep) {
      result.push(...flattenRoute(route.routes, deep, auth))
    }
  }
  return result
}

/**
 * 获得当前页面的标题
 * @param routeList
 */
export const getPageTitle = (routeList: IRoute[]) => {
  const route = routeList.find((child) => child.path === window.location.pathname)
  return route ? route.meta.title : ''
}

/**
 * 返回公共布局相关的路由
 */
export function getLayoutRouteList(routes: IRoute[]): IRoute[] {
  return flattenRoute(routes, false, false)
}

/**
 * 返回业务布局相关的路由 这里是全部的路由
 */
export function getBusinessRouteList(routes: IRoute[]): IRoute[] {
  return flattenRoute(routes, true, false)
}

/**
 *
 * @param pathname
 */
export function getPagePathList(pathname?: string): string[] {
  return (pathname || window.location.pathname)
    .split('/')
    .filter(Boolean)
    .map((value, index, array) => '/'.concat(array.slice(0, index + 1).join('/')))
}

function findRoutesByPaths(pathList: string[], routeList: IRoute[], basename?: string): IRoute[] {
  return routeList.filter((child: IRoute) => pathList.indexOf((basename || '') + child.path) !== -1)
}

/**
 * 只有业务路由会有面包屑
 */
export function getBreadcrumbs(routes: IRoute[]): IRoute[] {
  return findRoutesByPaths(getPagePathList(), getBusinessRouteList(routes), config.BASENAME)
}
