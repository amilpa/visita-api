
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  id : {
    type : String,
    required : true
  },
  text : {
    type : String,
    minLength : 0,
    maxLength : 200
  },
  postedBy : {
    type : String,
    ref : "user"
  },
  createdAt : {
    type : Date, 
    default : Date.now()
  },
  imageURL : {
    type : String,
    required : true
  },
  userURL : {
    type : String
  }
})

module.exports = mongoose.model('Posts',postSchema)