require('express-async-errors')
require('dotenv').config()
const express = require('express')
const app = express()

const { connectDB } = require('./db/connect')

const handleError = require('./middlewares/error-handler')

const user = require('./routes/user')
const posts = require('./routes/posts')
const notFound = require('./middlewares/not-found')
const { initializeApp } = require('firebase/app')

const firebaseConfig = {
  apiKey: "AIzaSyA0G6xGPLj34O-6qB_-OyahLKqllFCQTk4",
  authDomain: "visita-5c160.firebaseapp.com",
  projectId: "visita-5c160",
  storageBucket: "visita-5c160.appspot.com",
  messagingSenderId: "926956837983",
  appId: "1:926956837983:web:2f8ce5973a38ec4b3a8fea",
  measurementId: "G-9W0J95XSW9"
}

const firebaseApp = initializeApp(firebaseConfig)

//middlewares 
app.use(express.json())

app.use('/api/v1/users',user)
app.use('/api/v1/posts',posts)

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