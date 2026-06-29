const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      // Marca o erro como Joi para o errorHandler tratar corretamente
      const err = new Error(error.details.map(d => d.message).join(', '));
      err.isJoi = true;
      err.details = error.details;
      return next(err);
    }
    
    next();
  };
};

module.exports = validateRequest;
