const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const bookRoutes = require('./book-routes');

router.use('./users', userRoutes);
router.use('./posts', postRoutes);
router.use('./books', bookRoutes);

module.exports = router;