import request from '@/utils/request.ts'

export interface User {}

/**
 * 用户登录
 * @param data
 */
export const login = (data: User) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
