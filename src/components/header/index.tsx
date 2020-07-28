import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import React, { useCallback } from 'react'
// import { useStoreActions, useStoreState } from 'src/hooks'
import styles from './index.module.less'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { SET_CALLAPSW_MENU } from '@/store/app/types'
import { removeAll } from '@/utils/cookie'

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
    <div className={styles.wrap}>
      <span className={styles.btn_toggle} onClick={() => setCollapseMenu(!collapseMenu)}>
        {collapseMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </span>

      <Dropdown
        className={styles.pop}
        overlay={
          <Menu>
            <Menu.Item>
              <span
                className={styles.menu_item}
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
        <div className={styles.pop_trigger}>
          <Avatar icon={<UserOutlined />} />
          <span className={styles.user_name}>{user.username}</span>
        </div>
      </Dropdown>
    </div>
  )
}

export default HomeHeader
