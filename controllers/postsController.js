const BaseController = require('./baseController')
const Post = require('../models/Post')

class PostsController extends BaseController {
    static permittedParams = ['title', 'content']

    static async index(_, res) {
        try {
            const posts = await Post.query().select()
            res.status(200).json(posts)
        } catch (error) {
            res.status(400).json(error)
            console.error(error)
        }
    }

    static async show(req, res) {
        try {
            const post = await Post.query().findOne({id: req.params.id})
            res.status(200).json(post)
        } catch (error) {
            res.status(400).json(error)
            console.error(error)
        }
    }

    static async create(req, res) {
        try {
            const post = await Post.query().insertAndFetch(PostsController.sanitizedParams(req))
            res.status(201).json(post)
        } catch (error) {
            res.status(400).json(error)
            console.error(error)
        }
    }

    static async update(req, res) {
        try {
            const post = await Post.query().updateAndFetchById(req.params.id, PostsController.sanitizedParams(req))
            res.status(200).json(post)
        } catch (error) {
            res.status(400).json(error)
            console.error(error)
        }
    }

    static async destroy(req, res) {
        try {
            await Post.query().deleteById(req.params.id)
            res.sendStatus(204)
        } catch (error) {
            res.status(400).json(error)
            console.error(error)
        }
    }
}

module.exports = PostsController