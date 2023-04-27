
const User = require('../models/user')
const statusCodes = require('http-status-codes')

const createUserClient = async (req,res) => {

  if(!(await User.findOne({ id : req.body.id})))
  {
    const newUser = await User.create(req.body)
    return res.status(statusCodes.OK).json(newUser)
  }
  else{
    const user = await User.findOne({ id : req.body.id })
    return res.status(statusCodes.OK).json(user)
  }
  return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ message : "Server error occured" })
}

const createUserHost = (req,res) => {
  res.send('Created host')
}

const getUser = async (req,res) => {
  const user = await User.find({ id : req.params.id})
  res.status(statusCodes.OK).json(user)
}

module.exports = { createUserClient,createUserHost,getUser }