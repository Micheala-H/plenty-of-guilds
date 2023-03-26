const router = require('express').Router();
const { Character, Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const { char, user } = req.params
        const oneReview = await Review.findOne({
          where: {
            character_id: char,
            user_id: user,
          },
        });
      res.json(oneReview);
      console.log("okayyyyyyyy")
    } catch (err) {
      console.error(err);
      res.status(500).json('Something went wrong here.');
    }
  });
  //find all reviews saved by player
  router.get('/', withAuth, async (req, res) => {
    try {
      const allReviews = await Review.findAll({
        where: {
          user_id: req.session.user_id
        }
    });
      res.json(allReviews);
      console.log("okayyyyyyyy")
    } catch (err) {
      console.error(err);
      res.status(500).json('Something went wrong here.');
    }
  });
  //saves character to database
  router.post('/', withAuth, async (req, res) => {
    
    try {
        const character = await Character.findOne({
            where: {
            id: req.body.character_id,
            user_id: req.session.user_id
          }
        });
        const { rating, comment, character_id, user_id } = req.body
        const reviewToCreate = await Review.create({
            rating,
            comment,
            character_id,
            user_id
          });
          return res.json(reviewToCreate);
        } catch (err) {
          console.error(err);
          return res.json("Something went wrong here");
        }
      });
    router.delete('/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const reviewToDelete = await Character.findByPk(id);
        if (!reviewToDelete) {
          return res.status(404).json('Character not found');
        }
        await reviewToDelete.destroy();
        res.status(200).json("Model for ", reviewToDelete.name, " has been deleted!");
      } catch (err) {
        console.error(err);
        res.status(500).json('Something went wrong here.');
      }
    });




module.exports = router;