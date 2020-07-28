import React, { memo, useState, useEffect } from 'react'

function Intro() {
  const [introText, setIntroText] = useState<string>('')
  useEffect(() => {}, [])

  return <div>首页11111</div>
}

export default memo(Intro)
