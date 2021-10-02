const router = require('express').Router();
const { Friendship, User} = require('../../models');

// Find all friends for user
router.get('/:id', (req, res) => {
    Friendship.findAll({
        where: { user: id },
        include: [{
            model: User,
            // as: 'info'
        }]
    })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});