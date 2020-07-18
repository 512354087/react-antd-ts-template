const Koa = require('koa')
const server = new Koa()

server.use(async (ctx) => {
  ctx.body = 'Hello World'
})

server.listen(3009, () => {
  console.log('koa server is listening on 3009')
})
