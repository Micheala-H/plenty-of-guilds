const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/',  (req, res) => {
    try {
      res.render('homepage', { 
    
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
