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
    pcdExist: Sequelize.BOOLEAN,
    visionStrategique: Sequelize.BOOLEAN,
    autreDocument: Sequelize.STRING,
    dimensionStrategique: Sequelize.JSONB,
    facteurSuccessIndicateurPerformance: Sequelize.JSONB,
    indicateursDePerformanceDegreImportance: Sequelize.JSONB,
    indicateursDePerformancePriseDecision: Sequelize.JSONB,
  });
  return Structure;
};
