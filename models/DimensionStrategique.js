/** @format */

module.exports = (sequelize, Sequelize) => {
  const DimensionStrategique = sequelize.define('dimensionStrategique', {
    idDimension: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    titreDimension: {
      type: Sequelize.STRING,
      unique: true,
    },
  });
  return DimensionStrategique;
};
