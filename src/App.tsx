import React, { FC, Suspense, lazy } from 'react'
import { Spin } from 'antd'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routes, { IRoute } from './router/config'
import adminConfig from './config'
import GroupRoute from './router/GroupRoute'
const App: FC = () => (
  <Suspense fallback={<Spin size="large" className="layout__loading" />}>
    {/* basename 如果放入的是服务器子目录则需要设置 */}
    <Router basename={adminConfig.BASENAME}>
      <GroupRoute routes={routes} />
    </Router>
  </Suspense>
)
export default App
