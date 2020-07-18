import React, { memo, useState, useEffect } from 'react'

function Intro() {
  console.log(11111)
  const [introText, setIntroText] = useState<string>('')
  useEffect(() => {}, [])

  return <div>首页</div>
}

export default memo(Intro)
