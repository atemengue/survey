/** @format */

module.exports = (sequelize, Sequelize) => {
  const Structure = sequelize.define('Structure', {
    idStructure: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nomStructure: {
      type: Sequelize.STRING,
      unique: true,
    },
    pcdExists: Sequelize.BOOLEAN,
    visionStrategique: Sequelize.BOOLEAN,
    autreDocument: Sequelize.STRING,
    dimensionStrategiques: Sequelize.JSONB,
    facteurSuccess: Sequelize.JSONB,
    indicateurPerformanceDegre: Sequelize.JSONB,
    indicateurPerformanceDecisions: Sequelize.JSONB,
  });
  return Structure;
};
