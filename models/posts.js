
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  text : {
    type : String,
    minLength : 0,
    maxLength : 200
  },
  postedBy : {
    type : mongoose.SchemaTypes.ObjectId,
    ref : "user"
  },
  imageId : {
    type : Number,
    required : true
  },
  createdAt : {
    type : Date, 
    default : Date.now()
  }
})

module.exports = mongoose.model('Posts',postSchema)