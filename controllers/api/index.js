const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes')
const reviewRoutes = require('./reviewRoutes')

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
