import Post from "./Post.js";

class PostService {
    async create(post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    async getAll(arg, log) {
        const posts = await Post.find({ type: arg, login: log });
        return posts;
    }
    async getPers(arg) {
        const posts = await Post.find({ type: arg });
        return posts;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('ID НЕ УКАЗАН')
        }
        const post = await Post.find({ login: id });
        return post
    }
    async delete(id) {
        if (!id) {
            throw new Error('ID НЕ УКАЗАН')
        }
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
}

export default new PostService();