import React, { useEffect, useState } from 'react'
import { IRoute } from '@/router/config'
import { Breadcrumb } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { getBreadcrumbs } from '@/router'
import routes from '@/router/config'
import './Breadcrumb.less'
// 限制为对象
interface BreadcrumbProps {
  [key: string]: any
}
const Breadcrumbs: React.FC<BreadcrumbProps> = (props) => {
  const [breadcrumbs, setBreadcrumbs] = useState<IRoute[]>([])
  const history = useHistory()
  useEffect(() => {
    setBreadcrumbs(getBreadcrumbs(routes))
    const unListen = history.listen(() => {
      setBreadcrumbs(getBreadcrumbs(routes))
    })
    return () => {
      unListen()
    }
  }, [history])
  return (
    <div className="breadcrumb-container">
      <Breadcrumb>
        {breadcrumbs.map((route: IRoute) => {
          if (route.routes && route.routes.length > 0) {
            return (
              <Breadcrumb.Item key={route.path}>
                <Link to={route.redirect || '/'}>{route.meta.title}</Link>
              </Breadcrumb.Item>
            )
          } else {
            return (
              <Breadcrumb.Item key={route.path}>
                <Link to={route.path}>{route.meta.title}</Link>
              </Breadcrumb.Item>
            )
          }
        })}
      </Breadcrumb>
    </div>
  )
}
// function itemRender(route, params, routes, paths) {
//   const last = routes.indexOf(route) === routes.length - 1
//   return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
// }
export default Breadcrumbs
