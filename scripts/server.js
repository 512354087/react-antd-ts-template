const Koa = require('koa')
const server = new Koa()
const cors = require('koa2-cors') //导入跨域模块
const bodyParser = require('koa-bodyparser') // 参数解析
const tool = require('../server/tool')

const router = require('koa-router')()
router.get('/', async (ctx) => {
  ctx.body = '首页'
})
router.post('/login', async (ctx) => {
  let data = ctx.request.body
  data.token = 'react_admin_ts'
  ctx.body = tool.returnSuccessFormat(data)
})

server.use(bodyParser())
server.use(cors())
server.use(router.routes()) /*启动路由*/
server.use(router.allowedMethods())
server.listen(3009, () => {
  console.log('koa server is listening on 3009')
})
