const Joi = require('joi');

const schema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().min(1).required(),
    content: Joi.string().min(10).required(),
});

const result = schema.validate({
    id: 1,
    title: '1',
    content: '12345678909876',
});

console.log(result.error?.details);