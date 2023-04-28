
const Post = require('../models/posts')
const statusCodes = require('http-status-codes')
const path = require('path')

const { BadRequest } = require('../errors/bad-request') 

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
  // console.log(req.files)
  // const post = await Post.find({ _id : req.params.id })
  // post.imageURL = `${process.env.API_URL}/images/posts/${req.params.id}.jpg`
  // res.status(statusCodes.OK).json({ message : "Success" })
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.picture;
  uploadPath = path.resolve(__dirname,'..') + '/uploads/posts/' + req.params.id +'.jpg';

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      console.log(err)
      res.status(500).send(err);
  });

  const post = await Post.findOne({ _id: req.params.id })
  post.userURL = req.body.userURL
  post.imageURL = `http://192.168.137.1:4567/images/posts/${req.params.id}.jpg`
  post.save()
}

module.exports = { getAllPosts , createPost , createPostImage , getPosts }