const { core } = require('../config/application')
const router = core.Router()
const PostsController = require('../controllers/postsController')

// BaseRoutes
router.get('/', (_, res) => res.send('Yay you\'re on rails')),

router.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
})

router.get('/posts/', PostsController.index)
router.get('/posts/:id', PostsController.show)
router.post('/posts/', PostsController.create)
router.put('/posts/:id', PostsController.update)
router.delete('/posts/:id', PostsController.destroy)

module.exports = router