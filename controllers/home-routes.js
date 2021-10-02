const router = require('express').Router();
const withAuth = require('../utils/auth');
const [IsAuthenticated, destroySession] = require('../utils/passport-auth');
const passport = require('passport');


router.get('/', (req, res) => {
  res.render("login");
});

router.get('/login', withAuth, (req,res) => {
  res.render("login");
  if (IsAuthenticated) {
    res.redirect('/dashboard');
    return;
  }

})

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;
