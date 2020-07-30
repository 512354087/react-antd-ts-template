/**
 * 单参数添加类型
 * @param fn
 */
export function mergeVoidType<T>(fn: (value: T) => void) {
  return fn as any
}
