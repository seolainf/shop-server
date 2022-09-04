import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    res.status(401).json('You are not authenticated!');
  } else {
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) res.status(403).json('Token is not valid!');
      req.user = user;
      next();
    });
  }
};

export const verifyTokenAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not allowed to do that!');
    }
  });
};

export const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not allowed to do that!');
    }
  });
};
