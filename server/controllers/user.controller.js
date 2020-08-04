import User from '../models/user.model'

exports.get = async (req, res) => {
  const users = await User.find({})
  res.json({ status: 'ok', users })
}

exports.post = async (req, res) => {
  const { firstName, secondName, email } = req.body
  console.log({ firstName, secondName, email })
  const user = new User({ firstName, secondName, email })
  await user.save()
  res.json({ status: 'ok', user })
}
