import request from '@/utils/request.ts'

export interface User {}
export const login = (data: User) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
