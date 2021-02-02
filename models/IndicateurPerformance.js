/** @format */

module.exports = (sequelize, Sequelize) => {
  const IndicateurPerformance = sequelize.define('IndicateurPerformance', {
    idIndicateur: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    titreIndicateur: {
      type: Sequelize.STRING,
      unique: true,
    },
  });
  return IndicateurPerformance;
};
