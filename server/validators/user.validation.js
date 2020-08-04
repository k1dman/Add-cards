const Joi = require('joi')

// User validation rules
module.exports = {
  create: {
      email: Joi.string().email().required(),
      firstName: Joi.string().required(),
      secondName: Joi.string().required()
  }
}
