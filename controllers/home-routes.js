const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("login");
  });

module.exports = router;

router.get('/login', (req, res) => {
    res.render("login");
  });

module.exports = router;

router.get('/register', (req, res) => {
    res.render("register");
  });

module.exports = router;