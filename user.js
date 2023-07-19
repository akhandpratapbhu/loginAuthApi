// middleware/users.js

const jwt = require("jsonwebtoken");

module.exports = {
    // middleware/users.js

isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      console.log(token+"======ecvgbhnjmkxcvg");
      const decoded = jwt.verify(
        token,
        'SECRETKEY'
      );
      req.userData = decoded;
      next();
    } catch (err) {
      return res.status(401).send({
        msg: 'Your session is not valid!'
      });
    }
  },
  validateRegister: (req, res, next) => {
    
    if (!req.body.username ) {
      return res.status(400).send({
        msg: 'Please enter a username '
      });
    }

    // password min 6 chars
    if (!req.body.password) {
      return res.status(400).send({
        msg: 'Please enter a password '
      });
    }

    // password (repeat) does not match
    if (
      !req.body.password_repeat ||
      req.body.password != req.body.password_repeat
    ) {
      return res.status(400).send({
        msg: 'Both passwords must match'
      });
    }

    next();
  }
};