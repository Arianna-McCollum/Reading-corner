const passport = require('passport');

function IsAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    next(new Error(401))
  }
}

function destroySession(req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect('/')
}

module.exports = [IsAuthenticated, destroySession]