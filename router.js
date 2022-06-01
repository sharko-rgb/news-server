import { Router } from "express";
import PostController from "./PostController.js";
import cors from "cors";

const router = new Router()

router.post('/posts', cors(), PostController.create)
router.get('/posts/:category', cors(), PostController.getAll)
router.get('/postsave/:arg/:log', cors(), PostController.getSaveAll)
router.get('/perssave/:arg', cors(), PostController.getPersAll)
router.get('/postseorch/:object', cors(), PostController.getSeorch)
router.get('/post/:id', cors(), PostController.getOne)
router.delete('/posts/:id', cors(), PostController.delete)

export default router;