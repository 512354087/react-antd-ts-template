import React from 'react'
import { Table } from 'antd'
import { Resizable } from 'react-resizable' //集成排序
import { StoreValue } from 'rc-field-form/lib/interface'
import AdvancedSearchForm from './components/SeachFrom'

const ResizableTitle = (props: any) => {
  const { onResize, width, ...restProps } = props
  if (!width) {
    return <th {...restProps} />
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation()
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  )
}
export interface DataItem {
  key: number
  date: string
  amount: number
  type: string
  note: string
}
interface Size {
  width: any
  [name: string]: any
}
export class Demo extends React.Component {
  state = {
    columns: [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 200
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
        sorter: (a: any, b: any) => a.amount - b.amount
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100
      },
      {
        title: 'Note',
        dataIndex: 'note',
        width: 100
      },
      {
        title: 'Action',
        key: 'action',
        render: () => {
          return <a href={'/'}>Delete</a>
        }
      }
    ]
  }

  components = {
    header: {
      cell: ResizableTitle
    }
  }

  data: DataItem[] = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer'
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer'
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer'
    }
  ]
  handleResize = (index: number) => (e: any, obj: any) => {
    const { size } = obj
    this.setState((agents: any) => {
      const { columns } = agents
      const nextColumns = [...columns]
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width
      }
      return { columns: nextColumns }
    })
  }

  render() {
    const columns: any = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: (column: any) => ({
        width: column.width,
        onResize: this.handleResize(index)
      })
    }))

    return (
      <div className={'container'}>
        <AdvancedSearchForm />
        <Table bordered components={this.components} columns={columns} dataSource={this.data} />
      </div>
    )
  }
}
export default Demo
