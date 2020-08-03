import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import React, { useCallback } from 'react'
// import { useStoreActions, useStoreState } from 'src/hooks'
import './index.less'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { SET_CALLAPSW_MENU } from '@/store/app/types'
import { removeAll } from '@/utils/cookie'
import NoticeIcon from '@/components/NoticeIcon'

interface HomeHeaderProps {
  [key: string]: any
}

const HomeHeader: React.FC<HomeHeaderProps> = (props) => {
  const { app, user } = useSelector((state: RootState) => ({
    app: state.app,
    user: state.user
  }))
  const { collapseMenu } = app
  const dispatch = useDispatch()
  const setCollapseMenu = useCallback(
    (collapseMenu: boolean) => dispatch({ type: SET_CALLAPSW_MENU, payload: collapseMenu }),
    [dispatch]
  )

  return (
    <div className={'wrap'}>
      <span className={'btn_toggle'} onClick={() => setCollapseMenu(!collapseMenu)}>
        {collapseMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </span>
      <div className="layout__navbar__menu">
        <NoticeIcon />
        <Dropdown
          className={'layout__navbar__menu-item'}
          overlay={
            <Menu>
              <Menu.Item>
                <span
                  className={'menu_item'}
                  onClick={() => {
                    localStorage.clear()
                    removeAll()
                    window.location.href = '/login'
                  }}
                >
                  <PoweroffOutlined style={{ marginRight: 15 }} />
                  <span>退出登录</span>
                </span>
              </Menu.Item>
            </Menu>
          }
        >
          <div className={'pop_trigger'}>
            <Avatar icon={<UserOutlined />} />
            <span className={'user_name'}>{user.username}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default HomeHeader
