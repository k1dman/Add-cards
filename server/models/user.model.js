import mongoose from 'mongoose'

const { Schema } = mongoose

const User = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    secondName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('users', User)
