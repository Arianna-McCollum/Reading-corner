const router = require('express').Router();
const { Post, User, Book} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'post_content',
      'title',
      'chapter',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      const username = req.session.username;
      res.render('dashboard', { posts, username, loggedIn: true });
      
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Book.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'book_title',
      'author',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbBookData => {
      const books = dbBookData.map(book => book.get({ plain: true }));
      const username = req.session.username;
      res.render('dashboard', { books, username, loggedIn: true });
      
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




module.exports = router;
