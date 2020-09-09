import React, { memo, useState, useEffect, MouseEventHandler } from 'react'
import { Button } from 'antd'
import modelService from '@/serviceComponents/ModelService'

function Intro() {
  const [introText, setIntroText] = useState<string>('')
  useEffect(() => {}, [])
  const open: MouseEventHandler = (e) => {
    modelService.open({
      title: 'test',
      body: (
        <Button type="default" onClick={() => open}>
          Decrement
        </Button>
      ),
      confirm: () => {
        console.log('confirm')
      },
      cancel: () => {
        console.log('cancel')
      }
    })
  }
  return (
    <div>
      <Button onClick={open}>自定义model</Button>
    </div>
  )
}

export default memo(Intro)
