const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./route1');
const commentRoutes = require('./route2');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
