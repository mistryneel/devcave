import express from 'express'
import mongoose from 'mongoose'

import keys from './config/keys.js'
import users from './routes/api/users.js'
import profile from './routes/api/profile.js'
import posts from './routes/api/posts.js'

const app = express()

// Connect Mongo DB
const db = keys.mongoURI
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(`MongoDB failed to connect : ${err}`))

app.get('/', (req, res) => res.send("Hello World"))

app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))