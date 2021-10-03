const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const bookRoutes = require('./book-routes.js');
// const friendRoutes = require('./friendship-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/books', bookRoutes);
// router.use('/friendship', friendRoutes);


module.exports = router;
