const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const fs = require('fs')


const app = new Koa()
const router = new Router()
const port = 3000

fs.readdir(`${__dirname}/json`, (err, files) => {
  if (err) return console.log('读取目录错误')
  files.forEach(item => {
    let pathName = path.basename(`${__dirname}/json/${item}`, '.json')
    fs.readFile(`${__dirname}/json/${item}`, 'utf-8', (err, data) => {
      if (err) return console.log('读取文件失败')
      router.get(`/json/${pathName}`, (ctx, next) => {
        // 输出数据
        ctx.body = data
      })
    });
  });
})

router.get('/', (ctx, next) => {

  console.log(ctx.host);
  ctx.body = `程序启动,欢迎访问http://${ctx.host}`
});

app.use(router.routes())

app.listen(port, () => {
  console.log(`程序启动,请访问http://localhost:${port}`);
})