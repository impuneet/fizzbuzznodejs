const Joi = require('joi');

const programValidation = {
    body: Joi.object().keys({
        count: Joi.number().min(1).max(100).required(),
      }),
}

module.exports = {
  programValidation
}