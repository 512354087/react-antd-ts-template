/**
 * 这里做一些项目的默认设置
 */
export interface Config {
  BASENAME?: string
  TOKEN_KEY: string
  FOOTER_TEXT: string
}
const config: Config = {
  // react-router basename
  BASENAME: '',
  TOKEN_KEY: 'admin-antd-ts-token',
  FOOTER_TEXT: 'Ant Design ©2018 Created by Donie'
}
export default config
