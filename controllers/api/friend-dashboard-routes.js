const router = require('express').Router();
const { Post, User, Book} = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, (req, res) => {
    console.log(req.session);
    console.log('Cookies: ', req.cookies);
    console.log('======================');
    User.findOne({
        where: {
          id: req.params.id
        },
        include: [{
            model: Post,
            attributes: ['id', 'title', 'chapter', 'post_content', 'created_at']
          },
          {
            model: Book,
            attributes: ['id', 'book_title', 'author', 'created_at']
          },
        ],
        attributes: [
          'username'
        ],
      })
        .then(dbUserData => {
            console.log(dbUserData);
          const user = dbUserData;
    // Book.findAll({
    //   where: {
    //     user_id: req.params.id
    //   },
    //   attributes: [
    //     'id',
    //     'book_title',
    //     'author',
    //     'created_at',
    //   ],
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   ]
    // })
    //   .then(dbBookData => {
    //     const books = dbBookData.map(book => book.get({ plain: true }));
    //     Post.findAll({
    //       where: {
    //         user_id: req.params.id
    //       },
    //       attributes: [
    //         'id',
    //         'post_content',
    //         'title',
    //         'chapter',
    //         'created_at',
    //       ],
    //       include: [
    //         {
    //           model: User,
    //           attributes: ['username']
    //         }
    //       ]
    //     })
    //       .then(dbPostData => {
    //         const posts = dbPostData.map(post => post.get({ plain: true }));
            const friendusername = user.dataValues.username;
            const username = req.session.username;
            res.render('friend-dashboard', { user, username, friendusername, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
