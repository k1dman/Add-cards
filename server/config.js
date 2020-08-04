require('dotenv').config()

const options = {
  port: process.env.PORT,
  mongo: {
    uri: process.env.MONGO_CONNECTION_STRING
  }
}

export default options
