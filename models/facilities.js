
const mongoose = require('mongoose')

const facilitiesSchema = mongoose.Schema({
  id : {
    type : String,
    required : true
  },
  accommodation : {
    type : String,
    minLength : 0,
    maxLength : 200
  },
  location : {
    type : String,
  },
  facility : {
    type : String,
    minLength : 0,
    maxLength : 200
  },
  hostName : {
    type : String
  },
  phone : {
    type : String
  },
  price : {
    type : String
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
  },
  userURL : {
    type : String
  },
  lat : String,
  long : String
})

module.exports = mongoose.model('Facilities',facilitiesSchema)