const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    const err = new Error('Token não fornecido');
    err.status = 401;
    return next(err);
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    const error = new Error('Token inválido ou expirado');
    error.status = 403;
    next(error);
  }
};

module.exports = verifyToken;
