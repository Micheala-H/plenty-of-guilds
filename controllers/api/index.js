const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./route2');
const characterRoutes = require('./characterRoutes')

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/characters', characterRoutes);

module.exports = router;
