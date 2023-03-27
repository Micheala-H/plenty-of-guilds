const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const characterToCreate = await Character.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.json(characterToCreate);
  } catch (err) {
    console.error(err);
    res.status(500).json('Something went wrong here.');
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const characterToDelete = await Character.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!characterToDelete) {
      res.status(404).json({ message: 'Character not found.' });
      return;
    }

    res.status(200).json({ message: 'Character deleted.'});
  } catch (err) {
    res.status(500).json(err);
  }
});
  
  
  
  
  
  


module.exports = router;
