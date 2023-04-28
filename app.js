require('express-async-errors')
require('dotenv').config()
const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()

const { connectDB } = require('./db/connect')

const handleError = require('./middlewares/error-handler')

const user = require('./routes/user')
const posts = require('./routes/posts')
const images = require('./routes/images')
const home = require('./routes/home')


const notFound = require('./middlewares/not-found')

//middlewares 
app.use(express.json())
app.use(fileUpload())

app.use('/api/v1/users',user)
app.use('/api/v1/posts',posts)
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