const router = require('express').Router();
const { User, Character } = require('../../models');
const withAuth = require('../../utils/auth');
//find a single character saved by player
router.get('/', withAuth, async (req, res) => {
  try {
    const characters = await Character.findbyPk({
      where: {
        user_id: req.session.user_id
      }
    });
    res.json(characters);
    console.log("okayyyyyyyy")
  } catch (err) {
    console.error(err);
    res.status(500).json('Something went wrong here.');
  }
});
//find all characters saved by player
router.get('/', withAuth, async (req, res) => {
  try {
    const characters = await Character.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    res.json(characters);
    console.log("okayyyyyyyy")
  } catch (err) {
    console.error(err);
    res.status(500).json('Something went wrong here.');
  }
});
//saves character to database
router.post('/', withAuth, async (req, res) => {
  try {
    const { name, realm, race, spec, role, gender, faction, points, kills } = req.body;
    console.log(req.body)
    const characterToCreate = await Character.create({
      name,
      race,
      spec,
      role,
      gender,
      faction,
      points,
      kills,
      realm,
      user_id: req.session.user_id
    });
    res.json(characterToCreate);
  } catch (err) {
    console.error(err);
    res.status(500).json('Something went wrong here.');
  }
});

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const characterToDelete = await Character.findByPk(id);
      if (!characterToDelete) {
        return res.status(404).json('Character not found');
      }
      await characterToDelete.destroy();
      res.status(200).json("Model for ", characterToDelete.name, " has been deleted!");
    } catch (err) {
      console.error(err);
      res.status(500).json('Somethign went wrong here.');
    }
  });
  
  
  
  
  
  


module.exports = router;
