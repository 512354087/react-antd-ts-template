import React from 'react'
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom'
import { IRoute } from '../router/config'
import connect from '../utils/connect'

export interface GroupRouteProps {
  routes: IRoute[]
}

class GroupRoute extends React.Component<GroupRouteProps> {
  render() {
    return (
      <Switch>
        {this.props.routes?.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    )
  }
}
export default GroupRoute

export function RouteWithSubRoutes(route: IRoute, key: number) {
  return <Route path={route.path} key={key} exact={route.exact} render={(props) => lazyComponent(route, props)} />
}
/**
 * 懒加载组件
 */
export function lazyComponent(route: IRoute, props: RouteComponentProps) {
  const authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置
  const authed = localStorage.getItem('authed') || '' // 如果登陆之后可以利用redux修改该值

  //如果是不需要权限 或者 已登录 或者 访问路径是/login，则直接返回当前组件
  if (authed || route.path === authPath) {
    return <route.component {...props} {...props} route={route} />
  }
  //否则重定向到/login
  return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
}
