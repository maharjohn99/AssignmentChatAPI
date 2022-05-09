import mongoose from 'mongoose'
import config from './index.js'

const CONNECTION_URL = `mongodb://${config.db.url}/${config.db.name}`

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('MongoDB has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('MongoDB has reconnected')
})
mongoose.connection.on('error', error => {
  console.log(' Error while connecting', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!')
})
