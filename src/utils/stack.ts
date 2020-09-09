import React from 'react'
export class Stack<T> {
  private list: T[]
  constructor() {
    this.list = []
  }
  // 判断是否为空
  isEmpty() {
    return this.list.length === 0
  }
  // 获得最顶层
  getTop(): T | undefined {
    if (this.isEmpty()) {
      return
    }
    return this.list[this.list.length - 1]
  }
  // 添加
  push(e: T) {
    this.list.push(e)
  }
  // 删除并返回数组的最后一个元素
  pop(): T | undefined {
    if (this.isEmpty()) {
      return
    }
    return this.list.pop()
  }
  // 清除list
  clear() {
    this.list = []
  }
}
