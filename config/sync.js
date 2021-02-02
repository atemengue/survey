/** @format */

const { sequelize, Sequelize } = require('./connectionProvider');

const CommuneModel = require('../models/Commune');
const QuestionModel = require('../models/Question');
const DegreImportanceModel = require('../models/DegreInportance');
const DimensionStrategiqueModel = require('../models/DimensionStrategique');
const FacteurSuccesModel = require('../models/FacteurSucces');
const IndicateurPerformanceModel = require('../models/IndicateurPerformance');
const StructureModel = require('../models/Structure');

const Commune = CommuneModel(sequelize, Sequelize);
const Question = QuestionModel(sequelize, Sequelize);
const DegreImportance = DegreImportanceModel(sequelize, Sequelize);
const DimensionStrategique = DimensionStrategiqueModel(sequelize, Sequelize);
const FacteurSucces = FacteurSuccesModel(sequelize, Sequelize);
const IndicateurPerformance = IndicateurPerformanceModel(sequelize, Sequelize);
const Structure = StructureModel(sequelize, Sequelize);

Commune.hasMany(Question);
Question.hasMany(DimensionStrategique);
DimensionStrategique.belongsTo(Question);
Question.hasMany(FacteurSucces);
FacteurSucces.belongsTo(Question);
Question.hasMany(IndicateurPerformance);
IndicateurPerformance.belongsTo(Question);
DimensionStrategique.hasOne(DegreImportance);
FacteurSucces.hasOne(DegreImportance);
IndicateurPerformance.hasOne(DegreImportance);

//instance of each models]

sequelize.sync().then(() => {
  console.log('Databases & tables created!!');
});

module.exports = {
  Structure,
};
