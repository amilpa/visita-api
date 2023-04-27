
const Post = require('../models/posts')
const statusCodes = require('http-status-codes')

const { BadRequest } = require('../errors/bad-request') 

const getAllPosts = async (req,res) => {
  const posts = await Post.find()
  res.status(statusCodes.OK).json({ posts : posts , nBHits : posts.length })
  // return res.send('Hello world')
} 

const createPost = async (req,res) => {
  if(!req.body)
  {
    throw new BadRequest('Bad request detected')
  }
  const newPost = await User.create(req.body)
  res.sendFile(`./uploads/${req.body.id}.jpg`)
  res.status(statusCodes.OK).json(newPost)
}

module.exports = { getAllPosts , createPost }