const router = require('express').Router();
const { User, Review, Character } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', (req, res) => {
    try {
        res.render('homepage', { 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Character }, { model: Review }]
      });
      const user = userData.get({ plain: true });

      const characterData = await Character.findAll({
        where: {
            user_id: req.session.user_id
        }
      });
      const characters = characterData.map((character) => character.get({ plain: true }))
  
      const reviewData = await Review.findAll({
        where: {
            user_id: req.session.user_id
        }
      });
      const reviews = reviewData.map((review) => review.get({ plain: true }))
      res.render('profile', {
        ...user,
        characters,
        reviews,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;
