import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { Roles } from '@/router/config'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

interface PrivateRouteProps extends RouteProps {
  authority?: Roles[]
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ authority, ...otherProps }) => {
  const { user } = useSelector((state: RootState) => ({
    user: state.user
  }))
  const { role } = user
  // 双??操作符
  return authority && !authority.includes(role ?? Roles.Guest) ? <Redirect to="/login" /> : <Route {...otherProps} />
}

export default PrivateRoute
