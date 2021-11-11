const Router = require('koa-router')
const PostsController = require('../controllers/postsController')

const router = new Router()

// BaseRoutes
router.get('/', ctx => ctx.res.end('Yay you\'re on rails')),
router.get('/hello/:name', ctx => {
    ctx.res.end(`Hello ${ctx.params.name}`)
})


router.get('/posts', ctx => PostsController.index(ctx))
router.get('/posts/:id', ctx => PostsController.show(ctx))
router.post('/posts', ctx => PostsController.create(ctx))
router.put('/posts/:id', ctx => PostsController.update(ctx))
router.delete('/posts/:id', ctx => PostsController.destroy(ctx))

module.exports = router