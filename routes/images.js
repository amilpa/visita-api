const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/posts/:filename',(req,res) => {
  const fileName = req.params.filename
  const imagePath = path.resolve(`C:\\Users\\amilp\\Documents\\Code\\visita-api\\uploads\\posts\\${fileName}`)
  res.sendFile(imagePath)
})

router.get('/facilities/:filename',(req,res) => {
  const fileName = req.params.filename
  const imagePath = path.resolve(`C:\\Users\\amilp\\Documents\\Code\\visita-api\\uploads\\facilities\\${fileName}`)
  res.sendFile(imagePath)
})

module.exports = router