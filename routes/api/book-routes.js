const router = require('express').Router();
const { Book } = require('../../models');

// gets all books
router.get('/', (req, res) => {
    Book.findAll()
    .then(dbBookdata => res.json(dbBookdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// creates new book
router.post('/', (req, res) => {
    Book.create({
        title: req.body.title,
        text: req.body.text,
        user_id: req.body.user_id
    })
    .then(dbBookdata => res.json(dbBookdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;