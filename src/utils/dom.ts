// dom 上的一些事件操作
import { MouseEventHandler } from 'react'

/**
 * dom 事件停止传播
 * @param e
 */
export const stopPropagation: MouseEventHandler = (e) => {
  e.stopPropagation()
}
/**
 * 阻止默认提交
 * @param e
 */
export const preventDefault: MouseEventHandler = (e) => {
  e.preventDefault()
}

/**
 * 事件停止
 * @param e
 */
export const stopEvent: MouseEventHandler = (e) => {
  e.stopPropagation()
  e.preventDefault()
}
