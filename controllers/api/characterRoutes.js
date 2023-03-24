const router = require('express').Router();
const { User, Character } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      // Parse from req.body
      const { name, realm, region } = req.body;
      //create 
      const newCharacter = await Character.create({
        name,
        realm,
        region,
        user_id: req.session.user_id
      });
      //return 
      res.status(200).json("Model for ", newCharacter.name, " has been created");
    } catch (err) {
      res.status(500).json('Something went wrong here.');
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const character = await Character.findByPk(id);
      if (!character) {
        return res.status(404).json('Character not found');
      }
      await character.destroy();
      res.status(200).json("Model for ", character.name, " has been deleted!");
    } catch (err) {
      console.error(err);
      res.status(500).json('Somethign went wrong here.');
    }
  });
  
  
  
  
  
  


module.exports = router;
