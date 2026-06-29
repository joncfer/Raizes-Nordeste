const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'O email deve ser válido',
    'any.required': 'O email é obrigatório'
  }),
  senha: Joi.string().min(6).required().messages({
    'string.min': 'A senha deve ter no mínimo 6 caracteres',
    'any.required': 'A senha é obrigatória'
  })
});

module.exports = { loginSchema };

