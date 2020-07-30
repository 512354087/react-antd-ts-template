

## 前言
搭一个适合自己风格的 react-antd-ts 模版 关键词 create-react-app antd react typescript less-modules
admin antd-design react-hooks

## 功能

```

- 登录
   yarn run serve 打开服务端mock接口数据
   账号 密码 任意填写 

- 全局功能
    动态可配置的router 自动生成侧边菜单 包含角色权限
    mate 标签title 实时更新
    尝试使用 hooks connect class 多种写法的react编程

- 错误页面
  - 401
  - 404

- 組件

```
## 相关配置文件
```
- prettier
  .prettierrc.js

- typescript
  tsconfing.json

- eslint
  .eslintrc.js

```
## 开发

```bash
# 克隆项目
git clone 

# 进入项目目录
cd antd-ts-template

# 安装依赖
npm install
yarn

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run start
yarn run start
```

浏览器访问 http://localhost:3000


## 发布

```bash
# 构建测试环境
npm run test

# 构建生产环境
npm run build

# 构建serve端环境
npm run serve
```

## 环境变量
```
 .env.development
 .env.production
 .env.test
```
## 其它

```bash

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run format
```
