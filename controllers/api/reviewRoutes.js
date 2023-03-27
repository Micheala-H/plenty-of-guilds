const router = require('express').Router();
const { Character, Review } = require('../../models');
const withAuth = require('../../utils/auth');
      router.post('/', withAuth, async (req, res) => {
        try {
          const reviewToCreate = await Review.create({
            ...req.body,
            user_id: req.session.user_id
          
          })
          res.json(reviewToCreate);
        } catch (err) {
          console.error(err);
          res.status(500).json('Something went wrong here.');
        }
      });

      router.delete('/:id', withAuth, async (req, res) => {
        try {
          const reviewToDelete = await Review.destroy({
            where: {
              id: req.params.id,
              user_id: req.session.user_id
            },
          });
      
          if (!reviewToDelete) {
            res.status(404).json({ message: 'No review found!' });
            return;
          }
      
          res.status(200).json({ message: 'Review deleted!'});
        } catch (err) {
          res.status(500).json(err);
        }
      });

module.exports = router;