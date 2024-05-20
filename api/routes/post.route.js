import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletepost, getposts, updatepost, gethomepageposts, getfeaturedposts, searchPosts } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create);
router.get('/getposts', getposts);
router.get('/gethomepageposts', gethomepageposts);
router.get('/getfeaturedposts', getfeaturedposts);  // New route for featured posts
router.get('/search', searchPosts);
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost);
router.put('/updatepost/:postId/:userId', verifyToken, updatepost);

export default router;
