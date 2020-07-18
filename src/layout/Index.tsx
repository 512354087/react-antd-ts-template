import React, { Suspense } from 'react'
import { Spin } from 'antd'
import GroupRoute from '../router/GroupRoute'
import { Helmet } from 'react-helmet'
import { getPageTitle, layoutRouteList } from '../router'

function Layout(props: any) {
  const title = getPageTitle(layoutRouteList)
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <section className={''}>
        <section>
          <div className={'layout__container'}>
            <Suspense fallback={<Spin size="large" className="layout__loading" />}>
              <GroupRoute routes={props.routes} />
            </Suspense>
          </div>
        </section>
      </section>
    </>
  )
}

export default Layout
