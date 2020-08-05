import React, { FC } from 'react'
import { Form, Input, Button, Checkbox, Layout } from 'antd'
import { Helmet } from 'react-helmet'
import { getPageTitle, getLayoutRouteList } from '../../router'
import { connect } from 'react-redux'
import { User, UserActionTypes } from '@/store/user/types'
import { ConnectState } from '@/store/connect'
import './login.less'
import styles from './login.module.less'
import actions from '@/store/action'

import logo from '@/assets/login/logo.svg'
import config from '@/config'

import { login } from '@/api/user'
import { getToken, setToken, setUser as setUserCookie } from '@/utils/cookie'
import { Redirect } from 'react-router-dom'
import routes from '@/router/config'
import store from '@/store'
import { mergeVoidType } from '@/utils/mapper'

export interface LoginFormVM {
  username: string
  password: string
  remember?: boolean
}
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 }
}
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 }
}

type setUserType = (user: User) => UserActionTypes

export interface LoginProps {
  user: User
  setUser: setUserType
}

const Login = (loginProps: LoginProps) => {
  // console.log(loginProps)
  const { setUser, user } = loginProps
  const title = getPageTitle(getLayoutRouteList(routes))
  const onFinish = mergeVoidType((values: LoginFormVM) => {
    login(values).then((res) => {
      setUser(res.data)
      setToken(res.data.token)
      setUserCookie(res.data)
    })
  })

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  if (user.token || getToken()) {
    return <Redirect to="/" />
  }
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <div className={`${styles.container} login`}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <img alt="logo" className={styles.logo} src={logo} />
              <span className={styles.title}>Ant Design</span>
            </div>
            <div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
          </div>
          <div className={styles.main}>
            <div className={styles.login}>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                  <Input />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button size="large" className="submit" type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <Layout.Footer style={{ textAlign: 'center' }}>
          {config.FOOTER_TEXT} V{config.CLIENT_VERSION}
        </Layout.Footer>
      </div>
    </>
  )
}

export default connect(
  ({ user }: ConnectState) => ({
    user
  }),
  (dispatch, ownProps) => {
    return {
      setUser: (user: User) => dispatch(actions.SetUser(user))
    }
  }
)(Login)
