import React from 'react'
import { Chart, Interval } from 'bizcharts'
import './index.less'
// 数据源
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 }
]
const BizChartDemo = () => {
  return (
    <div className={'bizChart'}>
      <Chart height={320} autoFit data={data}>
        <Interval position="genre*sold" />
      </Chart>
    </div>
  )
}

export default BizChartDemo
