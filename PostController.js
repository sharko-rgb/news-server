import Post from "./Post.js"
import axios from 'axios'
import PostService from "./PostService.js"
import NewsAPI from 'newsapi'
const newsapi = new NewsAPI('411ee355cec04bbe89d06efb9cc4cdc4');

// ef14f61c-fce2-45a1-a469-b860c6605447

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {

            console.log('hello world')
                // const responce = await axios.get('https://newsapi.org/v2/top-headlines?country=ru&category=technology&page=2&apiKey=411ee355cec04bbe89d06efb9cc4cdc4');
            const responce = await newsapi.v2.topHeadlines({
                category: req.params.category,
                country: 'ru',
                pageSize: 100,
            });
            let dataPost = [];
            responce.articles.forEach(el => {
                const postId = String(Date.now());
                if (el.urlToImage == null) {
                    el.urlToImage = 'https://i.imgur.com/Z42UtRS.png';
                }
                dataPost.push({ id: postId, title: el.title, description: el.description, url: el.url, urlToImage: el.urlToImage });
            });
            return res.json(dataPost);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getSeorch(req, res) {
        try {
            console.log('trueth');
            const responce = await newsapi.v2.everything({
                q: req.params.object,
                language: 'ru',
                sortBy: 'popularity'
            });
            let dataPost = [];
            responce.articles.forEach(el => {
                const postId = String(Date.now());
                dataPost.push({ id: postId, title: el.title, description: el.description, url: el.url, urlToImage: el.urlToImage });
            });
            return res.json(dataPost);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getSaveAll(req, res) {
        try {
            const posts = await PostService.getAll(req.params.arg, req.params.log)
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getPersAll(req, res) {
        try {
            const posts = await PostService.getPers(req.params.arg)
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new PostController();