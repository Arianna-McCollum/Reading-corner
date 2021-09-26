const router = require('express').Router();
const { Post } = require('../../models');

// gets all posts
router.get('/', (req, res) => {
    Post.findAll()
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

// creates a new post
router.post('/', (req, res) => {
    Post.create({
        chapter: req.body.chapter,
        comment: req.body.chapter,
        user_id: req.body.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
})

module.exports = router