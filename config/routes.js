const Router = require('koa-router')

const router = new Router()

// BaseRoutes
router.get('/', ctx => ctx.res.end('Yay you\'re on rails')),
router.get('/hello/:name', ctx => {
    ctx.res.end(`Hello ${ctx.params.name}`)
})

module.exports = router