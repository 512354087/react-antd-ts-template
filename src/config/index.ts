/**
 * 这里做一些项目的默认设置
 */
export interface Config {
  SYSTEM_NAME: string
  BASENAME?: string
  TOKEN_KEY: string
  FOOTER_TEXT: string
}
const config: Config = {
  // react-router basename
  SYSTEM_NAME: 'Admin Antd',
  BASENAME: '',
  TOKEN_KEY: 'admin-antd-ts-token',
  FOOTER_TEXT: 'Ant Design ©2018 Created by Donie'
}
export default config
