import { Layout, Menu } from 'antd'
import _ from 'lodash'
import React from 'react'
import { Link, Redirect, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { IRoute } from '@/router/config'
import { RouterLayoutType } from '@/layout/RouterIndex'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import styles from './BasicLayout.module.less'
import config from '@/config'
import { Helmet } from 'react-helmet'
import { getPageTitle, getBusinessRouteList } from '../router/index'
import './BasicLayout.less'

const { Header, Sider, Content } = Layout
const { SubMenu, Item: MenuItem } = Menu

function renderMenu(router: IRoute[]) {
  return router.map((m) => {
    if (m.hideInMenu) {
      return null
    }
    if (!_.isEmpty(m.routes)) {
      return (
        <SubMenu
          key={m.path}
          title={
            <span>
              {m.meta.icon && React.createElement(m.meta.icon)}
              <span>{m.meta.title}</span>
            </span>
          }
        >
          {renderMenu(m.routes as IRoute[])}
        </SubMenu>
      )
    }

    return (
      <MenuItem key={m.path}>
        {m.meta.icon && React.createElement(m.meta.icon)}
        <span>{m.meta.title}</span>
      </MenuItem>
    )
  })
}

function renderRoute(router: IRoute[]): any[] {
  return router.map((m) => {
    if (!_.isEmpty(m.routes)) {
      return renderRoute(m.routes!)
    }
    const { redirect, path, component, authority } = m
    return (
      <PrivateRoute
        key={path}
        path={path}
        authority={authority}
        render={(props) => (redirect ? <Redirect to={redirect} /> : component && React.createElement(component, props))}
      />
    )
  })
}

interface BasicLayoutProps extends RouterLayoutType {
  child: React.ComponentType<any>
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ routes, history, location: { pathname }, child }) => {
  const paths = _.dropRight(pathname.split('/'), 1)
  const openKeys = paths.map((m, i) => _.take(paths, i + 1).join('/'))
  const { app } = useSelector((state: RootState) => ({
    app: state.app
  }))
  const { collapseMenu } = app
  const title = getPageTitle(getBusinessRouteList(routes))

  if (pathname === '/') {
    return <Redirect to="/dashboard" />
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <Layout>
        <Sider width={256} collapsed={collapseMenu}>
          <div className={styles.logo}>
            <Link to="/">{!collapseMenu ? config.SYSTEM_NAME : 'Admin'}</Link>
          </div>

          {pathname !== '/' && (
            <Menu
              mode="inline"
              theme="dark"
              defaultOpenKeys={openKeys}
              selectedKeys={[pathname]}
              onSelect={(param) => history.push(param.key)}
            >
              {renderMenu(routes)}
            </Menu>
          )}
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>{React.createElement(child)}</Header>
          <Content>
            <Switch>{_.flattenDeep(renderRoute(routes))}</Switch>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default BasicLayout
