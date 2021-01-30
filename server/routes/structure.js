/** @format */

const {
  create_commune,
  table1,
  table3,
  table2,
  table4,
  table5,
  table6,
  table7,
  table8,
  table9,
  communes,
  delete_structure,
} = require('../controllers/StructureController');

module.exports = (app) => {
  app.get('/api/structures', communes);
  app.post('/api/structures', create_commune);
  app.delete('/api/structures', delete_structure);
  app.get('/api/structures/table1', table1);
  app.get('/api/structures/table2', table2);
  app.get('/api/structures/table3', table3);
  app.get('/api/structures/table4', table4);
  app.get('/api/structures/table5', table5);
  app.get('/api/structures/table6', table6);
  app.get('/api/structures/table7', table7);
  app.get('/api/structures/table8', table8);
  app.get('/api/structures/table9', table9);
};
