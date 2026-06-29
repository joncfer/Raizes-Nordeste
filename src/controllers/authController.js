const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  const { email, senha } = req.body;

  if (email !== 'admin@raizes.com' || senha !== '123456') {
    const err = new Error('Credenciais inválidas');
    err.status = 401;
    return next(err);
  }

  try {
    const token = jwt.sign(
      { email, id: 1 },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token, message: 'Login realizado com sucesso' });
  } catch (err) {
    next(err);
  }
};

module.exports = login;
