const Post = require('../models/Post')

class PostsController {

    static async index(ctx) {
        try {
            const posts = await Post.query().select()
            ctx.body = posts
        } catch (error) {
            console.error(error)
        }
    }

    static async show(ctx) {
        try {
            const post = await Post.query().findOne({id: ctx.params.id})
            console.log(post)
            ctx.body = post
        } catch (error) {
            console.error(error)
        }
    }

    static async create(ctx) {
        try {
            const post = await Post.query().insertAndFetch(ctx.request.body)
            console.log(post)
            ctx.body = post
        } catch (error) {
            console.error(error)
        }
    }

    static async update(ctx) {
        try {
            const post = await Post.query().updateAndFetchById(ctx.params.id, ctx.request.body)
            console.log(post)
            ctx.body = post
        } catch (error) {
            console.error(error)
        }
    }

    static async destroy(ctx) {
        try {
            await Post.query().deleteById(ctx.params.id)
            ctx.status = 200
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = PostsController