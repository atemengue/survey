/** @format */

module.exports = (sequelize, Sequelize) => {
  const DegreImportance = sequelize.define('degreImportance', {
    idDegre: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    titreDegre: {
      type: Sequelize.STRING,
      unique: true,
    },
    niveauDegree: {
      type: Sequelize.STRING,
      unique: true,
    },
  });
  return DegreImportance;
};
