const Post = require('../models/Post')

class PostsController {

    static async index(_, res) {
        try {
            const posts = await Post.query().select()
            res.status(200).json(posts)
        } catch (error) {
            console.error(error)
        }
    }

    static async show(req, res) {
        try {
            const post = await Post.query().findOne({id: req.params.id})
            res.status(200).json(post)
        } catch (error) {
            console.error(error)
        }
    }

    static async create(req, res) {
        try {
            const post = await Post.query().insertAndFetch(req.body)
            res.status(201).json(post)
        } catch (error) {
            console.error(error)
        }
    }

    static async update(req, res) {
        try {
            const post = await Post.query().updateAndFetchById(req.params.id, req.body)
            res.status(200).json(post)
        } catch (error) {
            console.error(error)
        }
    }

    static async destroy(req, res) {
        try {
            await Post.query().deleteById(req.params.id)
            res.sendStatus(200)
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = PostsController