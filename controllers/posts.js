
const Post = require('../models/posts')
const statusCodes = require('http-status-codes')
const path = require('path')

const { BadRequest } = require('../errors/bad-request') 

const cloudinary = require('../cloud/cloudinary')

const getAllPosts = async (req,res) => {
  const posts = await Post.find()
  res.status(statusCodes.OK).json({ posts : posts , nBHits : posts.length })
  // return res.send('Hello world')
} 

const getPosts = async (req,res) => {
  const posts = await Post.find({ id : req.params.id })
  res.status(statusCodes.OK).json({ posts : posts , nBHits : posts.length})
}

const createPost = async (req,res) => {
  if(!req.body)
  {
    throw new BadRequest('Bad request detected')
  }
  const newPost = await Post.create({...req.body , imageURL : "the world is ending" })
  // newPost.imageURL = `${process.env.API_URL}/images/posts/${req.body.id}.jpg`
  // await newPost.save()
  res.status(statusCodes.OK).json(newPost)
}

const createPostImage = async (req,res) => {

  await cloudinary.uploader.upload(req.files.image.tempFilePath, {public_id: req.params.id , folder : "Posts"})

  const post = await Post.findOne({ _id: req.params.id })
  post.imageURL = cloudinary.url(`Posts/${req.params.id}` , { secure : true})
  post.save().catch((error) => res.send(error.message))
  res.send(post)
}

module.exports = { getAllPosts , createPost , createPostImage , getPosts }