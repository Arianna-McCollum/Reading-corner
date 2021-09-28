const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  res.render("login");
});

router.get('/login', (req,res) => {
  res.render("login");
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

})

router.get('/register', (req, res) => {
  res.render('register');
});

// router.get('/dashboard',withAuth, (req, res) => {
//   res.render('dashboard');
// });

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
