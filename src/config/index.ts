/**
 * 这里做一些项目的默认设置
 */
export interface Config {
  SYSTEM_NAME: string
  BASENAME?: string
  TOKEN_KEY: string
  CLIENT_VERSION: string | number
  FOOTER_TEXT: string
}
const config: Config = {
  // react-router basename
  SYSTEM_NAME: 'Admin Antd',
  CLIENT_VERSION: process.env['REACT_APP_VERSION '] || '0.1.0',
  BASENAME: '',
  TOKEN_KEY: 'admin-antd-ts-token',
  FOOTER_TEXT: 'Ant Design ©2018 Created by Donie'
}
export default config
