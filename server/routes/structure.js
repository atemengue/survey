/** @format */

const { Structure } = require('../config/sync');
const { create_commune } = require('../controllers/StructureController');

/** @format */
Structure;

module.exports = (app) => {
  app.post('/api/structures', create_commune);
  app.get('/api/structures', async (req, res) => {
    const structures = await Structure.findAll();
    res.json(structures);
  });
};
