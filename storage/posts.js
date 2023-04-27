
const multer = require('multer')

const storage = multer.diskStorage({
  destination : function(req,file,cb){
    cb(null,'uploads/posts')
  },
  filename : function(req,file,cb){
    cb(null, req.body.id+'.jpg')
  }
})

const upload = multer({ storage : storage })

module.exports = upload