import React, { memo, useState, useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { message } from 'antd'
import NavDropdown from '../LayoutNavBar/NavDropdown'
import NavBarItem from '../LayoutNavBar/NavBarItem'
import { IStoreState } from '../../store/types'
// import { Settings } from '../../store/module/settings'
import {
  NoticeState,
  NoticeMessageModule,
  clearNoticeByKey,
  readNoticeByKeyAndIndex,
  NoticeKeyAndIndexAndCount
} from '../../store/notice'
import renderNoticeTab from './NoticeTab'
import './index.less'

interface NoticeIconProps {
  // theme: Settings['theme']
  notices: NoticeState
  clearNoticeByKey: (key: keyof NoticeState) => void
  readNoticeByKeyAndIndex: (action: NoticeKeyAndIndexAndCount) => void
}

function NoticeIcon(props: NoticeIconProps) {
  const [noticeVisible, setNoticeVisible] = useState(false)

  const onNoticeIconClick = useCallback(() => {
    setNoticeVisible(true)
  }, [])

  const closeNotice = useCallback(() => {
    setNoticeVisible(false)
  }, [])

  useEffect(() => {
    const root = window.document.getElementById('root')

    if (root) {
      root.addEventListener('click', closeNotice, false)
    }
    return () => {
      if (root) {
        root.removeEventListener('click', closeNotice)
      }
    }
  }, [closeNotice])
  const { notices, readNoticeByKeyAndIndex, clearNoticeByKey } = props

  const onMessageClick = useCallback(
    (key: keyof NoticeState, index: number) => {
      const item = notices[key]
      if (item.list[index].read === 1) return
      readNoticeByKeyAndIndex({ key, index, count: item.count - 1 })
    },
    [notices, readNoticeByKeyAndIndex]
  )

  const onClear = useCallback(
    (key: keyof NoticeState) => {
      clearNoticeByKey(key)
    },
    [clearNoticeByKey]
  )

  const onMore = useCallback((key: keyof NoticeState) => {
    message.success(key)
  }, [])

  const noticeTotal = Object.values(props.notices)
    .map((notice: NoticeMessageModule) => notice.count)
    .reduce((a, b) => a + b)

  return (
    <NavDropdown
      visible={noticeVisible}
      overlay={renderNoticeTab(props.notices, onMessageClick, onClear, onMore)}
      trigger={['click']}
      placement="topLeft"
    >
      <div className={'layout__navbar__menu-item'}>
        <NavBarItem onClick={onNoticeIconClick} icon="bell" count={noticeTotal} overflowCount={99}></NavBarItem>
      </div>
    </NavDropdown>
  )
}

export default connect(({ notices }: IStoreState) => ({ notices }), {
  clearNoticeByKey,
  readNoticeByKeyAndIndex
})(memo(NoticeIcon))
