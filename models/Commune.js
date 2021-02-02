/** @format */

module.exports = (sequelize, Sequelize) => {
  const Commune = sequelize.define('commune', {
    idCommune: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nom: {
      type: Sequelize.STRING,
      unique: true,
    },
    pcd: Sequelize.BOOLEAN,
    statusPcd: Sequelize.BOOLEAN,
    documentStrategique: Sequelize.JSON,
  });
  return Commune;
};
