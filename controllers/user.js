
const User = require('../models/user')
const statusCodes = require('http-status-codes')

const createUser = async (req,res) => {

  if(!(await User.findOne({ id : req.body.id})))
  {
    const newUser = await User.create(req.body)
    return res.status(statusCodes.OK).json(newUser)
  }
  else{
    const user = await User.findOne({ id : req.body.id })
    return res.status(statusCodes.OK).json(user)
  }
}

module.exports = { createUser }