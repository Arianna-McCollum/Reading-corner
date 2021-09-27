const router = require('express').Router();


router.get('/', (req, res) => {
  res.render("login");
});



router.get('/login', (req, res) => {
  res.render("login");
});


router.get('/register', (req, res) => {
  res.render('register');
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard/');
    return;
  }

  res.render('login');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
})
module.exports = router;
