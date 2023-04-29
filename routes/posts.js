
const express = require('express')
const router = express.Router()

const { getAllPosts,createPost,createPostImage,getPosts } = require('../controllers/posts')

router.get('/',getAllPosts)
router.get('/:id',getPosts)

router.post('/',createPost)
router.post('/:id', createPostImage )

module.exports = router
