
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  id : {
    type : String
  },
  name : {
    type : String,
    required : true
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ]
  },
  section : {
    type : String,
    enum : ['client' , 'host']
  }
})

module.exports = mongoose.model('User',userSchema)