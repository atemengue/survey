/** @format */

const {
  create_commune,
  commune_with_pcd,
  table3,
  table2,
  table4,
  table5,
  table6,
  table7,
} = require('../controllers/StructureController');

module.exports = (app) => {
  app.post('/api/structures', create_commune);
  app.get('/api/structures/pcd', commune_with_pcd);
  app.get('/api/structures/table2', table2);
  app.get('/api/structures/table3', table3);
  app.get('/api/structures/table4', table4);
  app.get('/api/structures/table5', table5);
  app.get('/api/structures/table6', table6);
  app.get('/api/structures/table7', table7);
};
