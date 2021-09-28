const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const bookRoutes = require('./book-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/books', bookRoutes);

module.exports = router;
