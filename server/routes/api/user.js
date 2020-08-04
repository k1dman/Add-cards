import express from 'express'
import Joi from 'joi'
import { create } from '../../validators/user.validation'
import userController from '../../controllers/user.controller'

const router = express.Router()
const validate = (schema) => {
  return (req, res, next) => {
    const { error } = Joi.validate(req.body, schema)
    const valid = error == null

    if (valid) {
      next()
    } else {
      const { details } = error
      const message = details.map((i) => i.message).join(',')

      console.log('error', message)
      res.status(422).json({ status: 'error', message })
    }
  }
}

router.post('/', validate(create),userController.post)
router.get('/', userController.get)


export default router
