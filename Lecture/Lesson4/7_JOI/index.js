const Joi = require('joi');

const schema = Joi.string();

const result = schema.validate(3);

console.log(result.error.details);