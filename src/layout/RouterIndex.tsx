import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { IRoute } from '@/router/config'
import PrivateRoute from '@/layout/PrivateRoute'
import _ from 'lodash'
interface RouterLayoutProps {
  routes: IRoute[]
}

export type RouterLayoutType = RouterLayoutProps & RouteComponentProps

const RouterLayout: React.FC<RouterLayoutProps> = ({ routes }: RouterLayoutProps) => {
  return (
    <Switch>
      {routes.map((item) => {
        const { path, routes, layout, component, redirect, ...otherProps } = item
        return (
          <PrivateRoute
            key={path}
            path={path}
            render={(props) => {
              if (layout && !_.isEmpty(routes) && component) {
                return React.createElement(component, {
                  routes,
                  ...otherProps,
                  ...props
                })
              }
              return redirect ? <Redirect to={redirect} /> : component && React.createElement(component, props)
            }}
            {...otherProps}
          />
        )
      })}
    </Switch>
  )
}

export default RouterLayout
