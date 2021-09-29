const router = require('express').Router();
const { User, Book} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  console.log('======================');
  Book.findAll({
    attributes: [
      'id',
      'book_title',
      'author',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id',
        'book_title',
        'author',
        'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbBookData => {
      if (!dbBookData) {
        res.status(404).json({ message: 'No book found with this id' });
        return;
      }
      res.json(dbBookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  console.log('Cookies: ', req.cookies);
  Book.create({
    book_title: req.body.book_title,
    author: req.body.author,
    user_id: req.session.user_id
  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Book.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbBookData => {
      if (!dbBookData) {
        res.status(404).json({ message: 'No book found with this id' });
        return;
      }
      res.json(dbBookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
