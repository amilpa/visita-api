
const express = require('express')
const router = express.Router()

const { getAllPosts,createPost,createPostImage } = require('../controllers/posts')
const upload = require('../storage/posts')

router.get('/',getAllPosts)

router.post('/',createPost)
router.post('/:id', createPostImage )

module.exports = router
