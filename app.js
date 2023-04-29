require('express-async-errors')
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')

// image process
const fileUpload = require('express-fileupload')

//cloud config

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});


const { connectDB } = require('./db/connect')

const handleError = require('./middlewares/error-handler')

const user = require('./routes/user')
const posts = require('./routes/posts')
const facilities = require('./routes/facilities')
const images = require('./routes/images')
const home = require('./routes/home')


const notFound = require('./middlewares/not-found')

//middlewares 
app.use(express.json())
app.use(fileUpload({ useTempFiles : true}))
// app.use(upload.none())
app.use(cors())
app.use(helmet())

app.use('/api/v1/users',user)
app.use('/api/v1/posts',posts)
app.use('/api/v1/facilities',facilities)
app.use('/api/v1/home',home)
app.use('/images',images)

app.use(notFound)
app.use(handleError)

const port = process.env.PORT || 4567

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port , () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(error.message)
  }
}

start()