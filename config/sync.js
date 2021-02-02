/** @format */

const { sequelize, Sequelize } = require('./connectionProvider');

const StructureModel = require('../models/Structure');

const Structure = StructureModel(sequelize, Sequelize);

//instance of each models]

sequelize.sync().then(() => {
  console.log('Databases & tables created!!');
});

module.exports = {
  Structure,
};
