import mongoose from 'mongoose'
import config from '../config'

mongoose.Promise = require('bluebird')

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected')
})

mongoose.connection.on('error', (err) => {
  console.log(`Could not connect to MongoDB because of ${err}`)
  process.exit(1)
})

if (config.env === 'development') {
  mongoose.set('debug', true)
}

const initialUrl = config.mongo.uri

exports.connect = async (mongoURI = initialUrl) => {
  mongoose.connect(mongoURI, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    useFindAndModify: false,
    useCreateIndex: true
  })
  return mongoose.connection
}
