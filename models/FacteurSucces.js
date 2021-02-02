/** @format */

module.exports = (sequelize, Sequelize) => {
  const FacteurSuccess = sequelize.define('facteurSuccess', {
    idFacteur: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    titreFacteur: {
      type: Sequelize.STRING,
      unique: true,
    },
  });
  return FacteurSuccess;
};
