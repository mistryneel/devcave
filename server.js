import express from 'express'
import mongoose from 'mongoose'
import keys from './config/keys.js'

const app = express()

// Connect Mongo DB
const db = keys.mongoURI
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(`MongoDB failed to connect : ${err}`))

app.get("/", (req, res) => res.send("Hello World"))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))