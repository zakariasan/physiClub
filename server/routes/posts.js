const express	= require('express')
const router = express.Router()
const {getFeedPosts, getUserPosts , likePost}	= require('../controllers/posts')
const {verifyToken} = require('../middleware/auth');

//Get user infos
//home page  with users 
router.get("/",verifyToken, getFeedPosts)
router.get("/:userId/posts",verifyToken, getUserPosts)

 //update user infos
router.patch('/:id/like', verifyToken, likePost);

module.exports = router
