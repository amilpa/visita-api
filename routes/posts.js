
const express = require('express')
const router = express.Router()

const { getAllPosts,createPost } = require('../controllers/posts')
const upload = require('../storage/posts')

router.get('/',getAllPosts)

router.post('/',upload.single('image'),createPost)

module.exports = router